const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cookieParser())

require('./utils/auth/strategies/basic');

app.post('/auth/sign-in', signIn);
app.post('/auth/sign-up', signUp);
app.get('/movies', getMovies);
app.post('/user-movies', getUserMovies);
app.delete('/user-movies/:id', getUserMovie);

async function signIn(req, res, next) {
    passport.authenticate('basic', function(error, data) {
        try {
            if (error || !data) {
                next(boom.unauthorized());
            }

            req.login(data, { session: false }, async function(error) {
                if (error) {
                    next(error);
                }

                res.cookie('token', data.token, {
                    httpOnly: !config.dev,
                    secure: !config.dev,
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

async function getUserMovies(req, res, next) {
}

async function getUserMovie(req, res, next) {
}

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
