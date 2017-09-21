require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');
const cors = require('cors');

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
  db.find_parent(profile.id).then( user => {
    if(user[0]) {
      return done(null, user);
    } else {
      db.create_parent([profile.id, profile.name.givenName, profile.name.familyName, profile.emails[0].value,
      profile.picture]).then( user => {
        return done(null, user);
      })
    }
  })
}));

//THIS IS INVOKED ONE TIME TO SET UP SERIALIZE USER
passport.serializeUser(function(user, done) {
  console.log('serial: ', user);
  done(null, user[0]);
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(user, done){
  console.log('deserial: ', user);
  done(null, user);
});

//ENDPOINT - AUTH0
app.get('/auth', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/dashboard',  //direct to dashboard for parents
  failureRedirect: 'http://localhost:3000/#/parentportal' //redirect to parent portal (login page)
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
  return res.redirect(302, 'http://localhost:3000/#/'); //res.redirect comes from express to redirect user to the given url
    //302 is the status code for redirect
})

//PARENT AND DANCER ENDPOINTS --- NEED TO REVISE TO WORK FOR EACH DATA TO BE RECEIVED FROM DATABASE
app.post('/api/create_parent', controller.createParent);
app.post('/db/create_dancer', controller.createDancer);

let PORT = 3005;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
