const express = require('express')

const routes = express.Router()

const ProductController = require('./Controllers/ProductController')

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.get('/products/:id', ProductController.show)
routes.delete('/products/:id', ProductController.destroy)
routes.put('/products/:id', ProductController.update)
routes.get('/products/:id/:field', ProductController.viewDetail)

module.exports = routes