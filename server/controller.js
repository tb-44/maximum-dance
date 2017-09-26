module.exports = {
    //create a parent and send to database from dashboard
    createParent: (req, res) => {
        const dbInstance = req.app.get('db');
        const {firstName, lastName, email, phone, address, city, state, zip} = req.body;

        dbInstance.create_parent([firstName, lastName, email, phone, address, city, state, zip])
            .then(parent => res.status(200).send(parent))
            .catch(err => {res.status(500).send()})
    },

    createDancer: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        const {firstName, lastName, classname, age} = req.body;

        dbInstance.create_dancer([req.params.id, firstName, lastName, classname, age])
        .then(dancer => res.status(200).send(dancer))
        .catch(err => {res.status(500).send()})
    }
}