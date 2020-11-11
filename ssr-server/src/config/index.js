require('dotenv-safe').config();

const config = {
    api: {
        dev: process.env.NODE_ENV !== 'production',
        port: Number(process.env.PORT),
    },
    apiMovies: {
        apiUrl: process.env.API_URL,
        apiKeyToken: process.env.API_KEY_TOKEN
    },
    oauth: {
        googleClientId: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    twitter: {
        sessionSecret: process.env.SESSION_SECRET,
        twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
        twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    }
};

module.exports = {
    config
};
