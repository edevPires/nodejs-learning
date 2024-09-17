const { render } = require("pug")
const Product = require("../models/product")

exports.getIndex = (req, res, next) => {
    res.render("shop/index", {
        path: "/",
        docTitle: "Home"
    })
}

exports.getMyProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        console.log(products)
        res.render("admin/products", {
            docTitle: "My Products",
            prods: products,
            path: "/products"
        })
    })
}

exports.getProductList = (req, res, next) => {
    const products = Product.fetchAll(products => {
        console.log(products)
        res.render("shop/product-list", {
            docTitle: "Shop",
            prods: products,
            path: "/product-list"
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        docTitle: "My Cart"
    })
}

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        docTitle: "My Orders"
    })
}

exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-product", {
        docTitle: "Add Product",
        path: "/admin/add-product",
    })
}

exports.postAddProducts = (req, res, next) => {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    const id = getRandomInt(99999).toString()
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price

    const product = new Product(id, title, imageUrl, description, price)
    product.save()
    res.redirect("/product-list")
}

exports.getProductDetail = (req, res, next) => {
    const productId = req.params.prodId
    Product.findById(productId, product => {
        res.render("shop/product-detail", {
            prod: product,
            docTitle: "Product Details",
            path: "/product-list"
        })
    })
}