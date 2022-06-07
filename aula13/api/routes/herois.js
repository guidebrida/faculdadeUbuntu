const express = require('express');
const router = express.Router();
const heroiController = require('../controllers/heroiController');

router.route('/').get(heroiController.findAll).post(heroiController.create);
router
  .route('/:id')
  .delete(heroiController.deleteOne)
  .put(heroiController.updateOne);

module.exports = router;
