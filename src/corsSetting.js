require('dotenv').config()




exports.corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}