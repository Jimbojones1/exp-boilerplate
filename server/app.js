var express    = require('express'),
    app        = express(),
    server     = require('http').createServer(app),
    path       = require('path'),
    bodyParser = require('body-parser');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Requiring Database
require('./db/db');

// require models
var User           = require('./models/UserModel');

// require controllers
var SomeController = require('./controllers/SomeController');





// set up routes use the controller
app.use('/', SomeController);

server.listen(3000, function(){
  console.log('Server is listening on port 3000')
})
