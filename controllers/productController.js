const Product = require('../models/Product')

module.exports.fetchAllProducts = async (req, res) => {
    try {
        res.json(await Product.find())
    } catch (error) {
        res.send(error)
    }
}

module.exports.fetchSpecificProduct = async (req, res) => {
    try {
        res.json(await Product.findById(req.params.productId))
    } catch (error) {
        res.send(error)
    }
}

module.exports.createProduct = async (req, res) => {
    try {
        const product = new Product({
            title:          req.body.title,
            description:    req.body.description,
            price:          req.body.price,
            stock:          req.body.stock,
            category:       req.body.category,
            image:          req.body.image,
        })
        res.send(await product.save())
    }
    catch (error) {
        res.send(error)
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        res.json(await Product.deleteOne({_id: req.params.productId}))
    } catch (error) {
        res.send(error)
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        res.json(await Product.updateOne(
            {_id: req.params.productId}, 
            {$set: {
                title:          req.body.title,
                description:    req.body.description,
                price:          req.body.price,
                stock:          req.body.stock,
                category:       req.body.category,
                image:          req.body.image
                }
            }
        ))
    } catch (error) {
        res.send(error)
    }
}