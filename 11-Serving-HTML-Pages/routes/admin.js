const path = require('path')

const express = require('express')

const router = express.Router()

const products = []

router.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        docTitle: 'Add Product',
        prods: products,
        path: "/admin/add-product",
    })
})

router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.product })
    console.log(products)
    res.redirect('/')
})

exports.routes = router
exports.products = products