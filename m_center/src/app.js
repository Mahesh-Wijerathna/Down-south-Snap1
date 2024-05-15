require('dotenv').config();
const express = require('express');

const cors = require('cors');


const app = express();

const Router = require('./routes');

app.use(express.json());






app.use(cors());
app.use('/api/v1/m_center', Router);

app.get('/', (req, res,next) => {
    res.send({message : 'Welcome to M-Center API'});
});

module.exports = app;