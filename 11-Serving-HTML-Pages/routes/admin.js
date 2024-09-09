const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')

const router = express.Router()

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'pages', 'add-product.html'))
})

module.exports = router