const express = require('express')

const shopController = require('../controllers/products')

const router = express.Router()

router.get("/", shopController.getIndex)

router.get("/product-list", shopController.getProductList)

router.get("/cart", shopController.getCart)

module.exports = router