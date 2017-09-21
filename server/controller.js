module.exports = {
    //create a parent and send to database from dashboard
    createParent: (req, res) => {
       
        const dbInstance = req.app.get('db');
        const {firstName, lastName, email, phone, address, city, state, zip} = req.body;

        dbInstance.create_parent([firstName, lastName, email, phone, address, city, state, zip])
            .then(parents => res.status(200).send(parents))
            .catch(err => {res.status(500).send()})
    },

    //parent to input dancer info to send to the database from dashboard
    createDancer: (req, res) => {
        const dbInstance = req.app.get('db');
        const {firstname, lastname, age, phone, address, city, state, zip} = req.body;

    //NEED TO REVISE FOR CREATING A NEW DANCER INTO THE DATABASE --FIX THE INPUTS, ETC>>> FOR ENDPOINT
        dbInstance.customers.createDancer(firstName, lastName, email, phone, address, city, state, zip)
        .then(customer => res.status(200).send(customer))
        .catch(err => {res.status(500).send()})
    },


}