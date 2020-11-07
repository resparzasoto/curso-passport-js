const express = require('express');
const passport = require('passport');

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../../utils/middleware/validationHandler');

const { movieIdSchema } = require('../../utils/schemas/movie');
const { userIdSchema } = require('../../utils/schemas/user');
const { createUserMovieSchema } = require('../../utils/schemas/userMovie');
const response = require('../../network/response');
const scopesValidationHandler = require('../../utils/middleware/scopesValidationHandler');

require('../../utils/auth/strategies/jwt');

function userMoviesApi(app) {
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing'),
    });
    app.use('/api/user-movies', router);

    const userMoviesService = new UserMoviesService();

    router.get('/', passport.authenticate('jwt', { session: false }), scopesValidationHandler(['read:user-movies']), validationHandler({ userId: userIdSchema }, 'query'), getUserMovies);
    router.post('/', passport.authenticate('jwt', { session: false }), scopesValidationHandler(['create:user-movies']), validationHandler(createUserMovieSchema), createUserMovie);
    router.delete('/:id', passport.authenticate('jwt', { session: false }), scopesValidationHandler(['delete:user-movies']), validationHandler({ id: movieIdSchema }, 'params'), deleteUserMovie);

    async function getUserMovies(req, res, next) {
        const { userId } = req.query;

        try {
            const userMovies = await userMoviesService.getUserMovies({ userId });

            const message = {
                data: userMovies,
                message: 'user movies listed'
            };

            response.success(req, res, message);
        } catch (error) {
            next(error);
        }
    }

    async function createUserMovie(req, res, next) {
        const {  body: userMovie } = req;

        try {
            const createUserMovieId = await userMoviesService.createUserMovie({ userMovie });

            const message = {
                data: createUserMovieId,
                message: 'user movie created',
            };

            response.success(req, res, message, 201);
        } catch (error) {
            next(error);
        }
    }

    async function deleteUserMovie(req, res, next) {
        const { id } = req.params;

        try {
            const deletedUserMovieId = await userMoviesService.deleteUserMovie({ id });

            const message = {
                data: deletedUserMovieId,
                message: 'user movie deleted'
            };

            response.success(req, res, message);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = userMoviesApi;