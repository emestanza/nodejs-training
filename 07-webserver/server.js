var express = require('express')
var hbs = require('hbs');
var app = express();

app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render("home", {
        name: "TU"
    })
})

app.listen(3000, () => {
    console.log("Listening port 3000");
})