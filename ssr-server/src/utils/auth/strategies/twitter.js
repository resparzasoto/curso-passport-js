const passport = require('passport');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const axios = require('axios');
const { get } = require('lodash');
const boom = require('@hapi/boom');

const { config } = require('../../../config');

passport.use(
    new TwitterStrategy({
        consumerKey: config.twitter.twitterConsumerKey,
        consumerSecret: config.twitter.twitterConsumerSecret,
        callbackURL: '/auth/twitter/callback',
        includeEmail: true
    },
    async function(token, tokenSecret, profile, cb) {
        const { data, status } = await axios({
            url: `${config.apiMovies.apiUrl}/api/auth/sign-provider`,
            method: 'POST',
            data: {
                name: profile.displayName,
                email: get(profile, 'emails.0.value', `${profile.username}@twitter.com`),
                password: profile.id,
                apiKeyToken: config.apiMovies.apiKeyToken
            }
        });

        if (!data || status !== 200) {
            return cb(boom.unauthorized(), false);
        }

        return cb(null, data);
    })
);