const path = require('path')

const express = require('express')
const app = express()

const userRoute = require('./routes/user')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/user', userRoute)
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"))
})

app.listen(3000)