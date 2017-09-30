require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');
const cors = require('cors');
const stripe = require('stripe')( process.env.REACT_APP_SECRET_KEY );

const app = express();
app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/../public/build` ) );
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//MIDDLEWARE USING PASSPORT
app.use( passport.initialize() );
app.use( passport.session() );

//DATABASE CONNECTION
massive( process.env.CONNECTIONSTRING ).then( db => {
  app.set('db', db);
});

//AUTHENTICATION (AUTH0)
passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    
  const db = app.get('db');
  db.find_parent(profile.emails[0].value).then( user => {
    if(user[0]) {
      return done(null, user);
    } else {
      db.create_parent([profile.name.givenName, profile.name.familyName, profile.emails[0].value,
      profile.phone, profile.address, profile.city, profile.state, profile.zip]).then( user => {
        return done(null, user);
      })
    }
  })
}));

//THIS IS INVOKED ONE TIME TO SET UP
passport.serializeUser(function(user, done) {
  done(null, user[0]);
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(user, done){
  done(null, user);
});

//ENDPOINT #1 - AUTH0 AUTHENTICATION
app.get('/auth', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/dashboard',
  failureRedirect: 'http://localhost:3000/#/parentportal'
}));

//ENDPOINT (Login)
app.get('/auth/me', (req, res) => {
  if(!req.user) {
    return res.status(404).send('User not found')
  } else {
    return res.status(200).send(req.user);
  }
});

//ENDPOINT (Logout)
app.get('/auth/logout', (req, res) => {
  req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
  return res.redirect(302, 'http://localhost:3000/#/'); 
})

//PARENT AND DANCER ENDPOINTS FROM CONTROLLER
app.post('/api/create_parent', controller.createParent);
app.post('/api/create_dancer/:id', controller.createDancer);
app.post('/api/getDancerInfo', controller.getDancer);

app.post('/api/payment', function(req, res, next){
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function(err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
});
});

let PORT = 3005;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
