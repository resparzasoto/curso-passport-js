require('dotenv-safe').config();

const config = {
    api: {
        env: process.env.NODE_ENV,
        dev: process.env.NODE_ENV === 'development',
        port: process.env.PORT,
        cors: process.env.CORS,
        publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
        adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
        authJwtSecret: process.env.AUTH_JWT_SECRET,
    },
    mongo: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
    },
    users: {
        defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
        defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
    },
};

module.exports = { config };