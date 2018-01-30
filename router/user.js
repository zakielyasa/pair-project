const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req,res) => {
  res.send('Welcome Aboard')
})

router.get('/list', (req,res) =>{
  models.User.findAll()
  .then(data => {
    res.render('user.ejs',{input: data})
  })
})

router.get('/createuser', (req,res) => {
  res.render('createuser.ejs')
})

router.post('/list', (req,res) => {
    let objUser = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    }
    models.User.create(objUser)
    .then(data => res.redirect('/user/list'))
  })

router.get('/edit/:id', (req,res) => {
  models.User.findById(req.params.id)
  .then(data => {
    res.render('edit.ejs', {data: data})
  })
})

router.post('/edit/:id', (req,res) => {
  let objUser = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }
  models.User.update(objUser, {where : {id : req.params.id}})
  .then(data => res.redirect('/user/list'))
})

router.get('/delete/:id' , (req,res) => {
  models.User.destroy ({where: {id: req.params.id}})
  .then(data => res.redirect('/user/list'))
})





module.exports = router
