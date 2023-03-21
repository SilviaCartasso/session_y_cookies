const { check,  body } = require ('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage("Datos requeridos"),

    check('email')
    .notEmpty().withMessage('Datos requeridos').bail()
    .isEmail().withMessage('Email inválido'),

    check('color')
    .notEmpty().withMessage("Debe seleccionar un color"),

    check('age')
    .isNumeric().withMessage("La edad debe ser expresada en números")
    .optional({nullable: true, checkFalsy: true}),


]