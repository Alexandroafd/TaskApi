require('dotenv').config()

//async errors
require('express-async-errors')

const express = require('express')
const app = express()

const products = require('./routes/products')
const connectDB = require('./db/connect') 
const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//Middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('Store Api')
})

app.use('/api/v1/products', products)

//Routes des produits


app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        await connectDB('mongodb+srv://john:1234@nodeproject.pl7i7.mongodb.net/Store-Api?retryWrites=true&w=majority&appName=NodeProject') 
        app.listen(port, console.log(`Le serveur est démarré sur le port ${port}...`))
    } catch (error) {
       console.log(error)
    }
}

start()