const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

// render a page for user to provide login details
sessions.get('/sessions/newSession', (req, res) => {
  res.render('sessions/newSession.ejs');
})

//once user is successfully logged in, create  a session
sessions.post('/session/new', (req, res) => {

  User.findOne({ username: req.body.username }, (err, foundUser) => {
      console.log('found user ...');
      if( bcrypt.compareSync(req.body.password, foundUser.password) ){
          console.log('password matched ...creating session');
          req.session.currentUser = foundUser;
            console.log(req.session.currentUser);
            res.redirect('/');
        } else {
            res.send('<a href="/">wrong password</a>');
        }
    });
});

//destroy user session, once user clicks on log out
sessions.delete('/session', (req, res) => {
  //res.send('destroy session');
  req.session.destroy( () => {
    res.redirect('/')
  });
});

module.exports = sessions
