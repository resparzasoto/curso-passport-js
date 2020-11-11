const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require('./config');
const { TWO_HOURS_IN_MILLISECONDS, THIRTY_DAYS_IN_MILLISECONDS } = require('./utils/time');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cookieParser())

require('./utils/auth/strategies/basic');
require('./utils/auth/strategies/oauth');

app.get('/auth/google-oauth', passport.authenticate('google-oauth', { scope: ['email', 'profile', 'openid'] }));
app.get('/auth/google-oauth/callback', passport.authenticate('google-oauth', { session: false }), googleCallback);
app.post('/auth/sign-in', signIn);
app.post('/auth/sign-up', signUp);
app.get('/movies', getMovies);
app.post('/user-movies', createUserMovie);
app.delete('/user-movies/:id', deleteUserMovie);

async function signIn(req, res, next) {
    const { rememberMe } = req.body;

    passport.authenticate('basic', function(error, data) {
        try {
            if (error || !data) {
                return next(boom.unauthorized());
            }

            req.login(data, { session: false }, async function(error) {
                if (error) {
                    return next(error);
                }

                res.cookie('token', data.token, {
                    httpOnly: !config.dev,
                    secure: !config.dev,
                    maxAge: rememberMe ? THIRTY_DAYS_IN_MILLISECONDS : TWO_HOURS_IN_MILLISECONDS
                });

                res.status(200).json(data.user);
            });
        } catch (error) {
            next(error);
        }
    })(req, res, next);
}

async function signUp(req, res, next) {
    const { body: user } = req;

    try {
        await axios({
            url: `${config.apiMovies.apiUrl}/api/auth/sign-up`,
            method: 'post',
            data: user
        });

        res.status(201).send({ message: 'user created' });
    } catch (error) {
        next(error);
    }
}

async function getMovies(req, res, next) {
}

async function createUserMovie(req, res, next) {
    try {
        const { body: userMovie } = req;
        const { token } = req.cookies;

        const { data, status } = await axios({
            url: `${config.apiMovies.apiUrl}/api/user-movies`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST',
            data: userMovie,
        });

        if (status !== 201) {
            return next(boom.badImplementation());
        }

        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

async function deleteUserMovie(req, res, next) {
    try {
        const { id } = req.params;
        const { token } = req.cookies;

        const { data, status } = await axios({
            url: `${config.apiMovies.apiUrl}/api/user-movies/${id}`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'DELETE',
        });

        if (status !== 200) {
            return next(boom.badImplementation());
        }

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

async function googleCallback(req, res, next) {
    if (!req.user) {
        return next(boom.unauthorized());
    }

    const { token, ...user } = req.user.body;

    res.cookie('token', token, {
        httpOnly: !config.api.dev,
        secure: !config.api.dev
    });

    res.status(200).json(user);
}

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
