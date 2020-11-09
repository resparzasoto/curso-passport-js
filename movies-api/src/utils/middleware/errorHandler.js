const boom = require('@hapi/boom');

const { config } = require('../../config');
const response = require('../../network/response');

function wrapErrors(err, req, res, next) {
    if (!err.isboom) {
        next(boom.badImplementation(err));
    }

    next(err);
}

function logErrors(err, req, res, next) {
    if (config.api.dev) {
        console.log(err);
    }
    next(err);
}

function errorHandler(err, req, res, next) { //eslint-disable-line
    const {
        output: { statusCode, payload }
    } = err;

    response.error(req, res, payload, statusCode);
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
};