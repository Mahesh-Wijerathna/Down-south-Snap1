require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 10003;
// const express = require('express');
const app = require('./app');
// const app = express();
// const port = 4003;

mongoose.connect(
    process.env.MONGO_URL,
    {}).then(result => {
        console.log('Connected to MongoDB Medical Center Database');
        app.listen(port,() => {
            console.log(`Medical Center Server is running on port ${port}`);
        });
    }).catch(err => {
        console.log(err); 
    });