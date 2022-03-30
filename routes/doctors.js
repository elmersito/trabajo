const express = require("express");
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');
const doctorValidator = require("../validations/doctorValidator");
router.get('/doctor', doctorsController.getDoctor);
router.get('/doctors', doctorsController.getDoctors);
router.post('/doctor', doctorValidator.add, doctorsController.postDoctor);
router.put('/doctor', doctorValidator.update, doctorsController.putDoctor);
router.delete('/doctor', doctorValidator.id, doctorsController.deleteDoctor);



module.exports = router;
