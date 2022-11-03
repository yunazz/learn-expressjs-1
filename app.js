const express = require('express')
app = express()
const router = require('./router/index')
const bodyParser = require("body-parser");

app.listen(3000, ()=> {
  console.log('3000포트에서 express 서버 시작 ')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

app.set('view engine', 'ejs')


