const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const events = require("./ticketMaster");
const CircularJSON = require('flatted');

// const passport = require('passport');
// const config = require('./db');

// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
// );

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function getEvents() {
  return await events.then((res) => {
    console.log(res);
    app.get("/", function (req, res) {
      res.send(".");
    });
  });
}
getEvents();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
