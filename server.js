const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const dotenv = require('dotenv').config({path: './src/.env'})
const cors = require('cors')
const path = require('path')
const cOptions = require('./src/corsSetting').corsOptions
const porta = process.env.PORT || 8080

//Criando app
const app = express()
app.use(express.json())
app.use(cors(cOptions))

//Iniciando DB
mongoose.connect(
    'mongodb+srv://cluster0-wddgs.mongodb.net/node-api', 
    {useNewUrlParser: true, useUnifiedTopology: true, auth: {user: process.env.DB_USER, password: process.env.DB_PASS}}
)
requireDir('./src/models')


//Rotas
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/public/index.html'))
})
app.use('/api', require('./src/routes'))

app.listen(porta)