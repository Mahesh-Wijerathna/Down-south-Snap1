const mongoose = require('mongoose');

const M_CenterSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
destination : {
    type: String,
    required: true
},
phone_number: {
    type: String,
    required: true
},
owner_name: {
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

module.exports = mongoose.model('M_Center', M_CenterSchema);
