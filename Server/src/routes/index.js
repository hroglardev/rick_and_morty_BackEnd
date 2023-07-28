const { getCharById } = require('../controllers/getCharById')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')

const router = require('express').Router()

router.get('/character/:id', (req, res) => {
  getCharById(req, res)
})

router.get('/login', login)

router.post('/login', postUser)

// router.get('/login', login) better practice

router.post('/fav', (req, res) => {
  postFav(req, res)
})

router.delete('/fav/:id', (req, res) => {
  deleteFav(req, res)
})

module.exports = router
