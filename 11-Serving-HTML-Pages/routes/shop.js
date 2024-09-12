const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')
const admin = require('../routes/admin')

const router = express.Router()

router.get("/", (req, res, next) => {
    res.render('shop', {
        docTitle: 'Shop',
        prods: admin.products,
        path: '/'
    })
})
module.exports = router