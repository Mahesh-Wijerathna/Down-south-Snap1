const express = require('express');
const router = express.Router();

const Controller = require('./controller');
const verify = require('./verify');

router.post('/', Controller.register);

router.put('/',  Controller.update);
router.delete('/', Controller.delete);
// router.get('/search', Controller.search); 

module.exports = router;