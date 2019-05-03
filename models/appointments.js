const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date:  { type: String, required: true },
    time:  { type: String, required: true },
    with:  { type: String, required: true },
    location:  { type: String, required: true },
    description:{ type: String, required: true }

});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
