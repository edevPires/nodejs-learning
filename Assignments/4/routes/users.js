const express = require('express')

const app = express()
const router = express.Router()

const users = []

router.post('/name', (req, res, next) => {
    users.push(req.body)
    res.redirect('/users/list')
})

router.get('/list', (req, res, next) => {
    console.log(users)
    res.render('users', {
        signedUsers: users
    })
})

exports.router = router