const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.route('/').get(albumController.findAll).post(albumController.create);
router.route('/:id').get(albumController.findById);

module.exports = router;
