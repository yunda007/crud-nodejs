const router = require('express').Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.list);
router.get('/update/:id', adminController.edit);
router.post('/update/:id', adminController.update);
router.get('/delete/:id', adminController.delete);

module.exports = router;