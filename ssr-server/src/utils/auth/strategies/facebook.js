const passport = require('passport');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const axios = require('axios');
const boom = require('@hapi/boom');

const { config } = require('../../../config');

passport.use(
    new FacebookStrategy({
        clientID: config.facebook.facebookClientId,
        clientSecret: config.facebook.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email']
    },
    async function(accessToken, refreshToken, profile, cb) {
        const email = profile.email ? profile.emails[0].value : `${profile.id}@facebook.com`;

        const { data, status } = await axios({
            url: `${config.apiMovies.apiUrl}/api/auth/sign-provider`,
            method: 'POST',
            data: {
                name: profile.displayName,
                email: email,
                password: profile.id,
                apiKeyToken: config.apiMovies.apiKeyToken
            }
        });

        if (!data || status !== 200) {
            return cb(boom.unauthorized(), false);
        }

        cb(null, data);
    })
);