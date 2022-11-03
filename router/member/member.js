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
  res.sendFile(path.join(__dirname,'../../public/member.html'))
})
module.exports =router