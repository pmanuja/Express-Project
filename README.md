# Express-Project


"My Appointment Manager" is a Full CRUD MVC App built using following technology stack that helps user manage or keep a track of his/her appointments.

Express,
Node.js,
MongoDB/Mongoose
EJS,
EJS -partials
HTML5/CSS,
CSS framework - Bootstrap
Express-Session

Application adheres to the MVC file structure : Models, Views and Controller and is deployed on Heroku.

Application is fully functional and accessible to public via Heroku;
Link : https://appointment-manager-demo.herokuapp.com/

Application uses 2 models - User model and Appointments model.

A user would need to signUp and then login to access application features.

A user can schedule New/ Reschedule or delete/cancel appointment/appointments

User Stories:

1. As a user, I should be able to SignUp
  . Should see a SignUp button/Link
  . Click on a signUp button/link should take me a sign up Page
  . Sign up page should have a username and password text fields and a signUp button
  . Click on SignUp button should sign me up and bring me back to home page

2. As a valid user, I should be able to LogIn
  . Should see a LogIn button/Link
  . Click on a LogIn button/link should take me to a Login Page
  . Login page should have a username and password text fields and a Go button
  . Click on GO button should log me in and take me to showALL appointments page

3. As a user, I should be able to create a new appointment/appointments
  . Should see a ScheduleNew button/Link on ShowALL page
  . Click on a ScheduleNew button/link should take me to a create new appointment   form
  . New form should have fields -Date, Time, with, Where and Description text fields and Cancel & ADD buttons
  . Click on Cancel button should take me back to Show ALL page
  . Click on ADD button should take me back to Show ALL page and also display the newly created appointment

4. As a user, I should be able to edit my existing appointment/appointments
  . Should see a Reschedule and Cancel buttons/Links on ShowALL page under each appointment details
  . Click on a Reschedule button/link should take me to a edit appointment form
  . Edit form should have fields -Date, Time, with,Where,and Description text fields  pre populated with data and should have Cancel & Update buttons
  . Click on Cancel button should take me back to Show ALL page
  . Click on Update button should take me back to Show ALL page and also display the updated details for that appointment

5. As a user, I should be able to view all my appointment/appointments
  . It should display following details about each appointment
    Date
    time
    With
    Location
    Description/purpose
    


Wireframe:
wireframes/IMG_4721.jpeg

Stretch goals accomplished:
- use 2 Models
-Included Signin/ Sign up /sign Out functionality
-EJS partials
-user stories
-Wireframes

Notes to myself:
1. Link 2 models (users and appointments) together so that a logged in user would see his/her appointments only

2. Make show All screen- a tabbed view - Once you cancel the appointment - it would appear under cancelled tab, the ones that are passed would appear under PAST tab

3. When clicked on LogOut link on Show ALL screen , it should log the user out and go to home Page
