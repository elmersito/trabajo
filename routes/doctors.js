const express = require("express");
const router = express.Router();
const doctorController = require('../controllers/doctorsController');
const doctorValidator = require('../validations/doctorsValidator');
router.get('/doctor', doctorController.getdoctor);
router.get('/doctors', doctorController.getdoctors);
router.post('/doctor', doctorValidator.add, doctorController.postDoctor);
router.put('/doctor', doctorValidator.update, doctorController.putdoctor);
router.delete('/doctor', doctorValidator.id, doctorController.deletedoctor);



module.exports = router;