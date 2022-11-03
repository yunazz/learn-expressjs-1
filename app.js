const express = require('express')
app = express()
const router = require('./router/index')
const bodyParser = require("body-parser");
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port : 3306,
  user : 'root',
  password: '1234',
  database: 'practiceexpress'
})
connection.connect()

app.listen(3000, ()=> {
  console.log('3000포트에서 express 서버 시작 ')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(router)


