const response = require('./response');

function errors(err, req, res) {
    response.error(req, res, err.message, err.statusCode, err);
}

module.exports = errors;
