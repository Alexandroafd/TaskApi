require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')


const start = async () =>{
    try {
        await connectDB('mongodb+srv://john:1234@nodeproject.pl7i7.mongodb.net/Store-Api?retryWrites=true&w=majority&appName=NodeProject') 
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!')
        process.exit(0)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}

start()