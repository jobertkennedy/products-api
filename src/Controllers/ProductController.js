const mongoose = require('mongoose')
const { json } = require('express')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        const products = await Product.find()

        return res.json(products)
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true})

        return res.json(product)
    },
    async show(req, res){
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },
    async store(req, res){
        const product = await Product.create(req.body)

        return res.json(product)
    },
    async destroy(req, res){
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.send('')
    },
    async viewDetail(req, res){
        const detail = await Product.findById(req.params.id)
        const field = detail[req.params.field]

        return res.json(field)
    }
}