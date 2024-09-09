const express = require('express')

const router = express.Router()

router.get("/add-products", (req, res, next) => {
    res.send(
        "<form action='/admin/product' method='POST'> <input type='text' name='product' placeholder='Enter product name'/> <button type='submit'>Submit</button> </form>"
    )
})

router.post("/product", (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router