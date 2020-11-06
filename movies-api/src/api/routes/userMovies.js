const express = require('express');

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../../utils/middleware/validationHandler');

const { movieIdSchema } = require('../../utils/schemas/movie');
const { userIdSchema } = require('../../utils/schemas/user');
const { createUserMovieSchema } = require('../../utils/schemas/userMovie');

function userMoviesApi(app) {
    const router = express.Router();
    app.use('/api/user-movies', router);

    const userMoviesService = new UserMoviesService();

    router.get('/', validationHandler({ userId: userIdSchema }, 'query'), async function (req, res, next) {
        const { userId } = req.query;

        try {
            const userMovies = await userMoviesService.getUserMovies({ userId });

            res.status(200).json({
                data: userMovies,
                message: 'user movies listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', validationHandler(createUserMovieSchema), async function (req, res, next) {
        const {  body: userMovie } = req;

        try {
            const createUserMovieId = await userMoviesService.createUserMovie({
                userMovie
            });

            res.status(200).json({
                data: createUserMovieId,
                message: 'user movie created',
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:id', validationHandler({ id: movieIdSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;

        try {
            const deletedUserMovieId = await userMoviesService.deleteUserMovie({
                id
            });

            res.status(200).json({
                data: deletedUserMovieId,
                message: 'user movie deleted'
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = userMoviesApi;