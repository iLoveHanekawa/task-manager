const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const connectDB = require('./db/connect')
const error = require('./middlewares/error')
const Tasks = require('./models/tasks')
const noMatch = require('./middlewares/noMatch')
require('dotenv').config()

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(error)
app.use(noMatch)

const port = process.env.PORT || 5000

const start = async (port) => {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`server listening on port: ${port}`)
    })
}

start(port) 