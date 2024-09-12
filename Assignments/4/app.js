// node packages
const path = require('path')

// 3rd packages 
const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/users')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', users.router)
app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3000)