const http = require('http')

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('Hello from middleware!')
    next()
})

app.use((req, res, next) => {
    console.log('Hello from another  midlleware!')
    res.send(
        '<h1> Hello from middleware!</h1>'
    )
})

app.listen(3000)