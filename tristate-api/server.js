const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
// const config = require('./db');


// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
// );

const app = express();

 // app.use(bodyParser.urlencoded({ extended: false }));
 // app.use(bodyParser.json());

app.get('/', function(req, res) {
 res.json()
});
const eventData = require("./ticketMaster")
// eventData.then(async function (events) {await  JSON.stringify(events)})
console.log(eventData);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
