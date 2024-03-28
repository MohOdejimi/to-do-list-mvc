const express = require('express')
const app = express()
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todo')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view-engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better go catch it at ${process.env.PORT}`)
})