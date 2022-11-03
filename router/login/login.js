const express = require('express')
const router = express.Router()
const path = require('path')
const mysql = require("mysql");
const passport = require("passport");
const {Strategy: LocalStrategy} = require("passport-local");

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
  res.sendFile(path.join(__dirname,'../../public/login.html'))
})

// PASSPORT 적용
passport.use('local-join', new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password',
  passReqToCallBack: true,
}, (id, password, done) => {
  const query = connection.query('select * from user where id =?',[id],(err, rows)=>{
    if(err) {return done(err)}
    if(rows.length> 0) {
      return done(null, false, {message: '이미 존재하는 아이디입니다.'})
    }
  })
}))

router.post('/', passport.authenticate('local-join',
  {successRedirect: '/main', failureRedirect: 'join', failureFlash: true}
))


module.exports =router