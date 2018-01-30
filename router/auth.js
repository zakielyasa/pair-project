const express = require('express')
const router = express.Router()
// const sequelize = require('sequelize')
const models = require('../models')

router.get('/login', (req,res) => {
  // res.send('tembak tidak ya')
  res.render('login')
})

router.get('/register', (req,res) => {
  res.render('register')
})

module.exports = router
