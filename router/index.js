const express =require('express')
const router = express.Router()
const path = require('path')
// const main = require('./main/main');
// const email = require('./email/email');
// const join = require("./join/join");
// const login = require("./login/login");

router.get('/', (req, res)=> {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/main.html'))
})
router.get('/form', (req, res)=> {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/form.html'))
})

router.get('/ajax', (req, res)=> {
  // res.send('<h1>hi!! send data</h1>')
  res.sendFile(path.join(__dirname, '../public/ajax.html'))
})

router.post('/email/form',(req, res) => {
  res.render('email.ejs', {'email': req.body.email})
})

router.post('/email/ajax',(req, res) => {
  let responseData = {
    'resultCode': '0000', 'email' : req.body.email
  }
  res.json(responseData)
})

// router.use('/main', main)
// router.use('/email', email)
// router.use('/join', join)
// router.use('/login', login)

module.exports= router