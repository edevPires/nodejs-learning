const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'))
})

app.listen(3000)

//     module.exports = path.dirname(require.main.filename);