const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy } = require('passport-oauth')

const { config } = require('../../../config');

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

const oAuth2Strategy = new OAuth2Strategy
(
    {
        authorizationURL: GOOGLE_AUTHORIZATION_URL,
        tokenURL: GOOGLE_TOKEN_URL,
        clientID: config.oauth.googleClientId,
        clientSecret: config.oauth.googleClientSecret,
        callbackURL: '/auth/google-oauth/callback'
    },
    async function(accessToken, refreshToken, profile, cb) {
        const { data, status } = axios({
            url: `${config.apiMovies.apiUrl}/api/auth/sing-provider`,
            method: 'POST',
            data: {
                name: profile.name,
                email: profile.email,
                password: profile.id,
                apiKeyToken: config.apiKeyToken
            }
        });

        if (!data || status !== 200) {
            return cb(boom.unauthorized(), false);
        }

        cb(null, data);
    }
);

oAuth2Strategy.userProfile = function(accessToken, done) {
    this._oauth2.get(GOOGLE_USERINFO_URL, accessToken, (err, body) => {
        if (err) {
            return done(err);
        }

        try {
            const { sub, name, email } = JSON.parse(body);

            const profile = {
                id: sub,
                name,
                email
            };

            done(null, profile);
        } catch (parseError) {
            return done(parseError);
        }
    });
}

passport.use('google-oauth', oAuth2Strategy);