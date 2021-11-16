const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.listar);
router.post('/add', customerController.guardar);

module.exports = router;

