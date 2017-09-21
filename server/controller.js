module.exports = {
    //create a parent and send to database from dashboard
    createParent: (req, res) => {
        const dbInstance = req.app.get('db');
        const {firstName, lastName, email, phone, address, city, state, zip} = req.body;

        dbInstance.create_parent([firstName, lastName, email, phone, address, city, state, zip])
            .then(parent => res.status(200).send(parent))
            .catch(err => {res.status(500).send()})
    },

    //parent to input dancer info to send to the database from dashboard
    createDancer: (req, res) => {
        const dbInstance = req.app.get('db');
        const {parent_id, firstName, lastName, classname, age} = req.body;

        dbInstance.customers.create_dancer([parent_id, firstName, lastName, classname, age])
        .then(dancer => res.status(200).send(dancer))
        .catch(err => {res.status(500).send()})
    }
}