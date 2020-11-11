const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');

const { config } = require('../../../config');

passport.use(
    new BasicStrategy(async function(email, password, cb) {
        try {
            const { data, status } = await axios({
                url: `${config.apiMovies.apiUrl}/api/auth/sign-in`,
                method: 'post',
                auth: {
                    password,
                    username: email
                },
                data: {
                    apiKeyToken: config.apiMovies.apiKeyToken
                }
            });

            const { body } = data;

            if (!body || status != 200) {
                return cb(boom.unauthorized(), false);
            }

            return cb(null, body);
        } catch (error) {
            return cb(error);
        }
    })
);