const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Project name is required.']
    },
    code: {
        type: String,
        required: [true, 'Project code is required.']
    },
    description: {
        type: String
    },
    device_types: {
        type: [Object],
        required: [true, 'At least one device type is required.']
    },
    collection_name: {
        type: String,
        unique:true,
        required: [true, 'Collection name is required.']
    }
}, {timestamps:true})

const project = mongoose.model('Project',projectSchema)

module.exports = project;