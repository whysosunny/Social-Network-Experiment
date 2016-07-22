var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', function(err,db) {
    if(err) {
        console.log("DB Error!");
    } else {
        console.log("DB is ready!");
    }
});

module.exports = mongoose;