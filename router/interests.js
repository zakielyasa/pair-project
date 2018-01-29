const express = require('express')
const router = express()
router.set('view engine', 'ejs');
router.set('views', '../views');
const model = require('../models')
const Interest = model.Interest
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
router.use(cookieParser())
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

router.get('/interest', (req, res) => {
    Interest.findAll().then(dataInterest => {
        res.render('interest', {dataInterest: dataInterest})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/interest/add', (req, res) => {
    let objInterest = {
        beach: req.body.beach,
        shopping: req.body.shopping,
        sport: req.body.sport,
        music: req.body.music,
        culinary: req.body.culinary
    }
    Interest.create(objInterest).then(() => {
        res.redirect('/interest')
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/interest/edit/:id', (req, res) => {
    Interest.findById(req.params.id).then(dataInterest => {
        res.render('interest_edit', {dataInterest: dataInterest})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/interest/edit/:id', (req, res) => {
    let objEditInterest = {
        id: req.params.id,
        beach: req.body.beach,
        shopping: req.body.shopping,
        sport: req.body.sport,
        music: req.body.music,
        culinary: req.body.culinary
    }
    Interest.update(objEditInterest, {
        where: {
            id: objEditInterest.id
        }
    })
    .then(res.redirect('/interest'))
})

router.get('/interest/delete/:id', (req, res) => {
    Interest.destroy({
        where: {
            id: req.params.id
        }
    })
})

