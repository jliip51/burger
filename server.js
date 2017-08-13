var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: "main"}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);
app.use("/add", routes);

app.listen(port, function() {
console.log("Connected on port: " + port);
});
