function error(message, code) {
    const customError = new Error(message);

    if (code) {
        customError.statusCode = code;
    }

    return customError;
}

module.exports = error;