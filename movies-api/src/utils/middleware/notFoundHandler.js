const Boom = require('@hapi/boom');
const response = require('../../network/response');

function notFoundHandler(req, res) {
    const {
        output: { statusCode, payload }
    } = Boom.notFound();

    response.error(req, res, payload, statusCode);
}

module.exports = notFoundHandler;