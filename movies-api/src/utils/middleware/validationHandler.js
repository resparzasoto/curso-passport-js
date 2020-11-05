const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = Joi.object(schema).validate(data);
    return error;
}

function validationHandler(schema, check = 'body') {
    return function (req, res, next) {
        const err = validate(req[check], schema);

        err ? next(Boom.badRequest(err)) : next();
    }
}

module.exports = validationHandler;