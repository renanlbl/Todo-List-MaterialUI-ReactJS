const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false);

module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })