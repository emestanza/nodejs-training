require("../config/config");
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path');

mongoose.connect(process.env.URLDB,  { useNewUrlParser: true, useCreateIndex: true }, (err, res) =>{
    if (err) throw err

    console.log("BD online");

});

app.use(require('../routes/index'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(process.env.PORT, () =>{
    console.log("Listening port", process.env.PORT);
})