const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const dotenv = require('dotenv').config({path: './src/.env'})

//Criando app
const app = express()
app.use(express.json())

//Iniciando DB
mongoose.connect(
    'mongodb+srv://cluster0-wddgs.mongodb.net/node-api', 
    {useNewUrlParser: true, useUnifiedTopology: true, auth: {user: process.env.DB_USER, password: process.env.DB_PASS}}
)
requireDir('./src/models')


//Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)