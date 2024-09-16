const { render } = require("pug")
const Product = require("../models/product")

exports.getIndex = (req, res, next) => {
    res.render("shop/index", {
        path: "/",
        docTitle: "Home"
    })
}

exports.getMyProducts = (req, res, next) => {
    res.render("admin/products", {
        path: "/admin/my-products",
        docTitle: "My Products"
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

exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-product", {
        docTitle: "Add Product",
        path: "/admin/add-product",
    })
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title)
    console.log(req.body.title)
    product.save()
    res.redirect("/product-list")
}

