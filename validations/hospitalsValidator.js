const { check, validationResult } = require("express-validator");

const generatehospitalValidators = () => [
    check("name").notEmpty().isLength({ max: 50 }).withMessage("Invalid name"),
    check("address").notEmpty().isLength({ max: 50 }).withMessage("Invalid address"),
    check("cellphone").notEmpty().isLength({ min: 10, max: 15 }).isNumeric().withMessage("Invalid phone (ten numbers)"),
    check("description").notEmpty().isLength({ max: 50 }).withMessage("Invalid description"),
]

const generateIdhospitalvalidator = () => [
    check("id").notEmpty().isNumeric().withMessage("Invalid id"),
]


const updatehospitalValidator = () => [

    check("id").notEmpty().isNumeric().withMessage("Invalid id"),
    check("name").isLength({ max: 50 }).withMessage("Invalid name"),
    check("lastname").isLength({ max: 50 }).withMessage("Invalid lastname"),
    check("phone").optional().isLength({ min: 10, mas: 50 }).withMessage("Invalid phone"),
    check("asignature").notEmpty().isLength({ max: 50 }).withMessage("Invalid subject please check your information"),
    check("address").isLength({ max: 50 }).withMessage("Invalid address"),

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
        generatehospitalValidators(),
        reporter
    ],

    id: [
        generateIdhospitalvalidator(),
        reporter
    ],
    update: [
        updatehospitalValidator(),
        reporter
    ]

};