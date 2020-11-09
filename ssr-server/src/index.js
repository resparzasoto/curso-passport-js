const express = require('express');
const morgan = require('morgan');

const { config } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.post('/auth/sign-in', signIn);
app.post('/auth/sign-up', signUp);
app.get('/movies', getMovies);
app.post('/user-movies', getUserMovies);
app.delete('/user-movies/:id', getUserMovie);

async function signIn(req, res, next) {
}

async function signUp(req, res, next) {
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
