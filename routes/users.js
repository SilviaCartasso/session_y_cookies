var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const formValidator = require ('../validations/formValidator')
const cookieCheck = require('../middlewares/cookieCheck')

/* GET users listing. */
router.get('/form', cookieCheck, usersController.form);
router.post('/form', formValidator ,usersController.submit);
router.get('/forget', usersController.forget)
module.exports = router;
