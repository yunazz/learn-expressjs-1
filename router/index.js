const express = require('express')
const router = express.Router()
const path = require('path')
const email = require('./email/email');
const join = require("./join/join");
const login = require("./login/login");
const member = require("./member/member");

// ROUTER
// ROUTER
router.get('/', (req, res) => {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/main.html'))
})
router.get('/form', (req, res) => {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/form.html'))
})

router.get('/ajax', (req, res) => {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/ajax.html'))
})

router.use('/email', email)
router.use('/join', join)
router.use('/login', login)
router.use('/member', member)

module.exports = router