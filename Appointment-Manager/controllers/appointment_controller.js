const express = require('express');
const appointment = express.Router();
const Appointment = require('../models/appointments.js');


//index page - show all appointments
appointment.get('/',(req, res) => {
  Appointment.find({},(err, allAppointments) => {
    res.render('index.ejs',{
      allAppointments : allAppointments
    });
  });

});


//create a new appointment
appointment.get('/new',(req, res) => {
  res.render('new.ejs');
});

//post a new appointment in db
appointment.post('/new',(req, res) => {

  console.log(req.body);
  Appointment.create(req.body , (err, newAppointment) => {
      console.log(newAppointment);
      res.redirect('/');
  });
});

//show details of a specific appointment
appointment.get('/:id',(req, res) => {
  res.render('show.ejs');
});

//edit details of an appointment
appointment.get('/:id/edit',(req, res) => {
  Appointment.findById(req.params.id,(err, foundAppointment) => {
    res.render('edit.ejs',{
      appointment : foundAppointment
    });
  });

});

appointment.put('/:id/edit',(req, res) => {

  Appointment.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/');
    });

});

//one time seed route
// appointment.get('/seed', async (req, res) => {
//   const newappointments = [{
//     date: "Monday, August 17, 2019",
//     time:"1:30 AM",
//     with:"Myself",
//     location:"At Home",
//     description:"Discuss Peace"
//
//   },{
//     date: "Thursday, May 14, 2019",
//     time:"1:30 AM",
//     with:"Myself",
//     location:"At Park",
//     description:"Discuss nature"
//   },{
//     date: "Wednesday, July 4, 2019",
//     time:"1:30 AM",
//     with:"Myself",
//     location:"At Restaurant",
//     description:"Discuss food"
//   }
// ];
//
//
//   try {
//     const seedItems = await Appointment.create(newappointments);
//     res.send(seedItems);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

module.exports = appointment;
