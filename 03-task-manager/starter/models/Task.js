const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Le champ nom est requis'],
        trim : true,
        maxlength : [20, 'Le nombre de caractère ne doit pas dépasser 20'],
    },
    completed : {
        type : Boolean,
        default : false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)