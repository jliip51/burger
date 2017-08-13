var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require("path");

var port = process.env.PORT || 5000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodeOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');

app.use("/", routes);

//Remove this - temporary!!
app.get("/", function (req, res) {

  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
console.log("Connected on port: " + port);
