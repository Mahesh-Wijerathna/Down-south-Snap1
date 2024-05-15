const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.post('/', Controller.register);
router.put('/', Controller.update);
router.delete('/', Controller.delete);
router.get('/', Controller.getAll);
router.get('/:appointment_id', Controller.getOne);
router.get('/search_with_username/:username', Controller.search_with_username);
router.get('/search_with_m_center/:m_center', Controller.search_with_m_center);


module.exports = router;