const { check, validationResult } = require("express-validator");

const generatedoctorValidator = () => [
    check("name").notEmpty().isLength({ max: 50 }).withMessage("Invalid name"),
    check("lastname").notEmpty().isLength({ max: 50 }).withMessage("Invalid lastname"),
    check("address").notEmpty().isLength({ max: 50 }).withMessage("Invalid address"),
    check("phone").notEmpty().isLength({ max: 10 }).isNumeric().withMessage("Invalid phone (ten numbers)"),
]

const generateIdmdoctorValidator = () => [
    check("id").notEmpty().isNumeric().withMessage("ID invalid not found")
]

const updatedoctorValidator = () => [
    check("name").notEmpty().isLength({ max: 50 }).withMessage("Invalid name"),
    check("lastname").notEmpty().isLength({ max: 50 }).withMessage("Invalid lastname"),
    check("address").notEmpty().isLength({ max: 50 }).withMessage("Invalid address"),
    check("phone").notEmpty().isLength({ max: 10 }).isNumeric().withMessage("Invalid phone (ten numbers)"),
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
        generateDoctorValidator(),
        reporter
    ],

    id: [
        generateIdDoctorValidator(),
        reporter
    ],

    update: [
        updateDoctorValidator(),
        reporter
    ]
}
