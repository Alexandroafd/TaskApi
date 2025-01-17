const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectionDb = require('./db/connection')
const notFound = require('./middleware/notFound')

//Middleware
app.use(express.static('./public'))
app.use(express.json())

//Routes
//app.get('/', (req, res) => {
  //  res.send('Todo-list app')
//})

app.use('/api/v1/tasks', tasks)

app.use(notFound)

const port = 3000

const start = async () =>{
    try {
        await connectionDb('mongodb+srv://john:1234@nodeproject.pl7i7.mongodb.net/?retryWrites=true&w=majority&appName=NodeProject') 
        app.listen(port, console.log(`Le serveur est démarré sur le port ${port}...`))
    } catch (error) {
       console.log(error) 
    }
}

start()
