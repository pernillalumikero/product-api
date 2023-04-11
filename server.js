require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')

connectDB()

app.use(cors())
// This formats data to json
app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {console.log(`Example app listening on port ${port}`)} )
})