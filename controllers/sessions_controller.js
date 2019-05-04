const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})



module.exports = sessions
