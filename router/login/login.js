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
  // res.sendFile(path.join(__dirname,'../../public/login.html'))
    res.render('login.ejs',{id:req.user})
})

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  done(null, id)
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password',
}, (id, password, done) => {
  const query = connection.query('select * from user where id =?', [id], (err, rows) => {
    if (err) {
      return done(err)
    }
    if (rows.length > 0) {
      return done(null, {id: rows[0].id})
    } else {
      return done(null, false, {message: '아이디 정보가 없습니다.'})
    }
  })
}))

// json 방식으로 데이터 넘기기
router.post('/', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) {
      return res.status(500).json(err)
    }
    if (!user) {
      return res.status(401).json({resultCode: '9999', resultMsg: info.message})
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.json({resultCode: '0000', ...user})
    })
  })(req, res, next)
})

module.exports = router