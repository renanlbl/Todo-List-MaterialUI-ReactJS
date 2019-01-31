const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    status: { type: Boolean, required: true, default: false }
})

module.exports = restful.model('Todo', todoSchema)