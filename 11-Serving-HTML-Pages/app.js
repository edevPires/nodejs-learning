const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const rootDir = require('./utils/path')

app.set('view engine', 'ejs');
app.set('views', 'pages');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRouter.routes)
app.use(shopRouter)

app.use((req, res, next) => {
    res.status(404).render("404", { docTitle: 'Page not found' })
})

app.listen(3000)
