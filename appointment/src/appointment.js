const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    appointment_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    medical_center: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    patient: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        // ! email is used as username
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
