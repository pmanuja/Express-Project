const express = require('express');
const appointment = express.Router();
const Appointment = require('../models/appointments.js');

//function that returns month name
const getMonthName = (monthNum) => {
  let month = '';
  switch (monthNum){
    case 0:
      month = 'January';
      break;
    case 1:
        month = 'February';
        break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
        month = 'May';
        break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
        month = 'August';
        break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
        month = 'November';
        break;
    case 11:
      month = 'December';
      break;

    default:
    month: 'invalid';
    break;
  }

  return month;
}

//function returns day of week based on input day number
const getDay = (dayNum) => {
  let day ='';

  switch (dayNum){
    case 0:
      day = 'Sunday';
      break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;

    default:
      day = "Invalid";
      break;


  }
  return day;
}

//get date as format 'May 30, 2019'
const getFormattedDate = (date) => {

  let dateFormatted='';

  let day = date.getDay();
  day = getDay(parseInt(day));
  console.log(day);

  let mm = date.getMonth();
  console.log('mm is ' , mm);
  mm = getMonthName(parseInt(mm));
  console.log('mm is ' , mm);

  let dd = String(date.getDate() + 1);
  let yyyy = date.getFullYear();


  dateFormatted = day + ', ' + mm + ' ' + dd + ',' + yyyy;
  console.log('Formatted date is ', dateFormatted);

  return dateFormatted;
}


//delete appointment from db
appointment.delete('/:id',(req, res) => {

  Appointment.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/');//redirect back to index
    });

});

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
  console.log('re body before' ,req.body);

  let date = new Date(req.body.date);
  let dateFormatted = getFormattedDate(date);

  console.log('dateFormatted :' , dateFormatted);
  console.log('original date :' , req.body.date);
  req.body.date = dateFormatted;

  console.log('req body after' , req.body);

  Appointment.create(req.body , (err, newAppointment) => {
      console.log(newAppointment);
      res.redirect('/');
  });
});




//show details of a specific appointment for edit
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

//put edited/updated appointment details into db
appointment.put('/:id/edit',(req, res) => {

  console.log('Edit - req body before ' ,req.body);

  let date = new Date(req.body.date);
  let dateFormatted = getFormattedDate(date);

  console.log('dateFormatted :' , dateFormatted);
  console.log('original date :' , req.body.date);

  req.body.date = dateFormatted;

  console.log('Edit - req body after' , req.body);
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
