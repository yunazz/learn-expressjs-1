const express = require('express')
const router = express.Router()
const path = require('path')
const mysql = require("mysql");

// DATABASE SETTING
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'practiceexpress'
})

connection.connect()

// ROUTER
router.post('/form', (req, res) => {
  res.render('email.ejs', {'email': req.body.email})
})

router.post('/ajax', (req, res) => {
  let email = req.body.email;
  let responseData = {}

  let query = connection.query('select * from user where id="' + email + '"', (err, rows) => {
    if (err) {
      throw err
    }
    if (rows[0]) {
      responseData.resultCode = '0000'
      responseData.data = rows[0]
    } else {
      responseData.resultCode = '9999'
      responseData.resultMsg = '조회된 결과가 없습니다.'
      responseData.data = rows[0]
    }
    res.json(responseData)
  })
})

module.exports =router