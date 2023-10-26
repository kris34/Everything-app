const userController = require('./controllers/userController');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Working pro0perly...');
});

router.use(userController);

module.exports = router;
