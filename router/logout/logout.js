const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res, next) => {
  req.logout(err=> {
    if(err) {return next(err)}
    res.redirect('/login')
  });
})

module.exports = router