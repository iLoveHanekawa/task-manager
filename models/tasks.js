const mongoose = require('mongoose')
const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'this is a required field']
    },
    success: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)
