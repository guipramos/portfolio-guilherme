const express = require('express');
const router = express.Router();
const constroler = require('../controllers/userControllers');

router.get('/', constroler.get);
router.post('/', constroler.post);
router.put('/', constroler.put);
router.delete('/', constroler.delete);

module.exports = router;