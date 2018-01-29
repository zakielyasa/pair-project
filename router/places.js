const express = require('express')
const router = express()
router.set('view engine', 'ejs');
router.set('views', '../views');
const model = require('../models')
const Place = model.Place
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
router.use(cookieParser())
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())


router.get('/places', (req, res) => {
    Place.findAll().then((dataPlace) => {
        res.render('places', {dataPlace: dataPlace})
    }).catch((err) => {
        res.send(err)
    })
})

 
router.post(`/places/add`, (req, res) => {
    let objNewPlaces = {
        name: req.body.name
    }
    Place.create(objNewPlaces).then(() => {
        res.redirect(`/places`)
    }).catch((err) => {
        res.send(err)
    })
})

router.get(`/places/edit/:id`, (req, res) => {
    Place.findById(req.params.id).then(dataPlace => {
        res.render('place_edit', {dataPlace: dataPlace})
    }).catch(err => {
        res.send(err)
    })
})

router.post('/places/edit/:id', (req, res) => {
    let objUpdatePlaces = {
        id: req.params.id,
        name: req.body.name
    }
    Place.update(objNewPlaces, {
        where: {
            id: objUpdatePlaces.id
        }
    })
    .then(res.redirect('places'))
})

router.get(`/places/delete/:id`, (req, res) => {
    Place.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(res.redirect(`/places`))
})



