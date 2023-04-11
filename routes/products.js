const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

router.get('/', controller.fetchAllProducts)
router.get('/:productId', controller.fetchSpecificProduct)
router.post('/', controller.createProduct)
router.delete('/:productId', controller.deleteProduct)
router.patch('/:productId', controller.updateProduct)

// router.get('/', async (req, res) => {
//   try {
//     res.json(await Product.find())
//   } catch (error) {
//     console.log(error)
//   }
// })

// router.post('/', async (req, res) => {
//     console.log(req.body)
//     try {
//         const product = new Product({
//             title:          req.body.title,
//             description:    req.body.description,
//             price:          req.body.price,
//             stock:          req.body.stock,
//             category:       req.body.category,
//             image:          req.body.image,
//         })
//         res.send(await product.save())
//     }
//     catch (error) {
//         res.send(error)
//     }
// })


// router.get('/:productId', async (req, res) => {
//     console.log(req.body)
//     try {
//         res.json(await Product.findById(req.params.productId))
//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = router