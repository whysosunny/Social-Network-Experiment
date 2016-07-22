var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(3000, function() {
    console.log('Server up and running at 3000');
}); 
