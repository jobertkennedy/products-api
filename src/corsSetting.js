require('dotenv').config()

const whitelist = ['http://127.0.0.1:5500/']



exports.corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}