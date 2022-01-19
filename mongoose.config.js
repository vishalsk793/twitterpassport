var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/college';

module.exports = function() {
    var db = mongoose.connect(uri);
    console.log('DB Connection');
    require('../models/models.students');
    return db;
};