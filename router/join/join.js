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
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', (req, res) => {
  const responseData = {}
  const sql = {id: req.body.id, name: req.body.name, password: req.body.password}
  const query = connection.query('insert into user set ?', sql, (err, rows) => {
    if (err) {
      throw err
    }
    res.render('welcome.ejs', {'name': req.body.name})
  })
})
console.log()

module.exports = router