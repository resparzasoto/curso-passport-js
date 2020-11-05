require('dotenv').config();

const config = {
    api: {
        env: process.env.NODE_ENV,
        dev: process.env.NODE_ENV === 'development',
        port: process.env.PORT,
        cors: process.env.CORS,
    },
    mongo: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
    },
};

module.exports = { config };