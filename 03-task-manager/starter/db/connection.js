const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://john:1234@nodeproject.pl7i7.mongodb.net/?retryWrites=true&w=majority&appName=NodeProject'

const connectionDb = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectionDb
