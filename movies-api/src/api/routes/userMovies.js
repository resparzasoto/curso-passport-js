const express = require('express');

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../../utils/middleware/validationHandler');

const { movieIdSchema } = require('../../utils/schemas/movie');
const { userIdSchema } = require('../../utils/schemas/user');
const { createUserMovieSchema } = require('../../utils/schemas/userMovie');

function userMoviesApi(app) {
    const router = express.Router();
    app.user('/api/user-movies', router);

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
}

