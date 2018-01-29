const express = require('express')
const router = express()
router.set('view engine', 'ejs');
router.set('views', '../views');
const model = require('../models')
const User = model.User
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
router.use(cookieParser())
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

router.get('/', function (req, res) {
  res.send('Hello World')
})

router.get('/register', (req, res) => {
    res.render('register')
})
 
router.post(`/register`, (req, res) => {

})



router.listen(3000)