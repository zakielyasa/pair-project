//Library
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const model = require('./models')

//modelconst
const user = require('./router/user.js')

app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', user)

app.listen(3000, () => console.log('CUUSSSSS di 3000'))
