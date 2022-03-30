const express = require("express");
const router = express.Router();
const hospitalsController = require('../controllers/hospitalsController');
const hospitalValidator = require("../validations/hospitalsValidator");
const jwToken = require("../validations/jwtValidation");
router.get('/hospital', hospitalsController.gethospital);
router.get('/hospitals', jwToken.validateToken hospitalsController.gethospitals);
router.post('/hospital', hospitalValidator.add, hospitalsController.posthospital);
router.post("/login", hospitalValidator.id, hospitalsController.getLogin);
router.put('/hospital', hospitalValidator.update, hospitalsController.posthospital);
router.delete('/hospital', hospitalValidator.id, hospitalsController.deletehospital);
module.exports = router;
