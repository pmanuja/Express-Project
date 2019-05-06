//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const session = require('express-session');
const app = express ();
const db = mongoose.connection;

require('dotenv').config();
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form



//___________________
// Routes
//___________________
//localhost:3000

//get the home page
app.get('/', (req, res) => {
  res.render('index.ejs',{
    currentUser: req.session.currentUser
  });
});

//
app.get('/index', (req, res) => {
  if(req.session.currentUser){
        res.render('index.ejs',{
          currentUser :req.session.currentUser
        });
    }
    else {
         res.redirect('/sessions/newSession');
     }
});


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

const usersController = require('./controllers/users_Controller.js');
app.use(usersController);

const sessionsController = require('./controllers/sessions_Controller.js');
app.use(sessionsController);

const appointmentController = require('./controllers/appointment_Controller.js');
app.use(appointmentController);
