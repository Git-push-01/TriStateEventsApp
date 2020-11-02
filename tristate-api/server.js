const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const events = require("./ticketMaster");
var cors = require('cors')

// const passport = require('passport');
// const config = require('./db');

// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
// );

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require('cors')



async function getEvents() {
  return await events.then((response) => {
    app.get("/events", (req, res) => {
      return res
        .status(200)
        .send({
          events: response
        });
    });
  });
}
getEvents();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
