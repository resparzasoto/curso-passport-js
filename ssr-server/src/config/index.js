require('dotenv-safe').config();

const config = {
    api: {
        dev: process.env.NODE_ENV !== 'production',
        port: Number(process.env.PORT),
    },
    apiMovies: {
        apiUrl: process.env.API_URL,
        apiKeyToken: process.env.API_KEY_TOKEN
    }
};

module.exports = {
    config
};
