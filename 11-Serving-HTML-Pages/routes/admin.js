const path = require('path')

const express = require('express')

const router = express.Router()

const products = []

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'pages', 'add-product.html'))
})

router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.product })
    console.log(products)
    res.redirect('/')
})

exports.routes = router
exports.products = products