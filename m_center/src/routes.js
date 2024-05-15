const express = require('express');
const router = express.Router();

const Controller = require('./controller');


router.post('/', Controller.register);


router.get('/', Controller.get_all);
router.put('/', Controller.update);
router.delete('/', Controller.delete);
router.get('/search_by_destination', Controller.search_by_destination);
router.get('/search_by_radius' , Controller.search_by_radius);
router.get('/:username', Controller.get_by_username);


module.exports = router;