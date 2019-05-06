const express = require('express')
const user = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')


//render to the sign up page for user
user.get('/users/newUser',(req, res) => {
  res.render('users/newUser.ejs');
});

//create  a new user in db
user.post('/',(req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {

    if(err) {
      console.log(err)
    }
    console.log(createdUser)
    res.redirect('/')
  });
});


module.exports = user
