const { check, validationResult } = require("express-validator");

const generateHospitalValidators = () => [
    check("name").notEmpty().isLength({ max: 50 }).withMessage("Invalid name"),
    check("address").notEmpty().isLength({ max: 50 }).withMessage("Invalid address"),
    check("cellphone").notEmpty().isLength({ max: 10 }).isNumeric().withMessage("Invalid phone (ten numbers)"),
    check("description").notEmpty().isLength({ max: 50 }).withMessage("Invalid description"),
]

const generateIdHospitalvalidator = () => [
    check("id").notEmpty().isNumeric().withMessage("Invalid id"),
]


const updateHospitalValidator = () => [

    check("name").notEmpty().isLength({ max: 50 }).withMessage("Invalid name"),
    check("address").notEmpty().isLength({ max: 50 }).withMessage("Invalid address"),
    check("cellphone").notEmpty().isLength({ max: 10 }).isNumeric().withMessage("Invalid phone (ten numbers)"),
    check("description").notEmpty().isLength({ max: 50 }).withMessage("Invalid description"),

]
const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({
            "sucess": false,
            "code": 404,
            "message": errors,
            "data": []
        })
    }
    next();
}

module.exports = {
    add: [
        generateHospitalValidators(),
        reporter
    ],

    id: [
        generateIdHospitalvalidator(),
        reporter
    ],
    update: [
        updateHospitalValidator(),
        reporter
    ]

};
