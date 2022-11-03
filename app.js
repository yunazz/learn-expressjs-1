const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const router = require('./router/index')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const flash = require('connect-flash')

app.listen(3000, ()=> {
  console.log('3000포트에서 express 서버 시작 ')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.session())
app.use(flash())

app.use(router)


