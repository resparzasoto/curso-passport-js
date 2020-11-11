const passport = require('passport');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const boom = require('@hapi/boom');
const axios = require('axios');

const { config } = require('../../../config');

passport.use(
    new GoogleStrategy(
        {
            clientID: config.oauth.googleClientId,
            clientSecret: config.oauth.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async function(accessToken, refreshToken, { _json: profile }, done) {
            try {
                const { data, status } = await axios({
                    url: `${config.apiMovies.apiUrl}/api/auth/sign-provider`,
                    method: 'POST',
                    data: {
                        name: profile.name,
                        email: profile.email,
                        password: profile.sub,
                        apiKeyToken: config.apiMovies.apiKeyToken
                    }
                });

                if (!data || status !== 200) {
                    return done(boom.unauthorized(), false);
                }

                done(null, data);
            } catch (error) {
                return done(error);
            }
        }
    )
);