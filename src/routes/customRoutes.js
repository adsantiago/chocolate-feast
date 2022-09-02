const express = require('express');
const router = express.Router();

const customController = require('../controllers/customController');

router.get('/', customController.main);
router.post('/do', customController.do);

module.exports = router;