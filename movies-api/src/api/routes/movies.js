const express = require('express');
const passport = require('passport');

const MoviesService = require('../services/movies');

const validationHandler = require('../../utils/middleware/validationHandler');
const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../../utils/schemas/movie');
const cacheResponse = require('../../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../../utils/time');

const response = require('../../network/response');

require('../../utils/auth/strategies/jwt');

function moviesApi(app) {
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing'),
    });
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', passport.authenticate('jwt', { session: false }), getMovies);
    router.get('/:id', passport.authenticate('jwt', { session: false }), validationHandler({ id: movieIdSchema}, 'params'), getMovie);
    router.post('/', passport.authenticate('jwt', { session: false }), validationHandler(createMovieSchema), createMovie);
    router.put('/:id', passport.authenticate('jwt', { session: false }), validationHandler({ id: movieIdSchema}, 'params'), validationHandler(updateMovieSchema), updateMovie);
    router.delete('/:id', passport.authenticate('jwt', { session: false }), validationHandler({ id: movieIdSchema}, 'params'), deleteMovie);

    async function getMovies(req, res, next) {
        try {
            cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
            const movies = await moviesService.getMovies(req.query);

            response.success(req, res, movies, 200);
        } catch (error) {
            next(error);
        }
    }

    async function getMovie(req, res, next) {
        try {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
            const movie = await moviesService.getMovie(req.params);

            response.success(req, res, movie, 200);
        } catch (error) {
            next(error);
        }
    }

    async function createMovie(req, res, next) {
        try {
            const createdMovieId = await moviesService.createMovie(req);

            response.success(req, res, createdMovieId, 201);
        } catch (error) {
            next(error);
        }
    }

    async function updateMovie(req, res, next) {
        try {
            const updatedMovieId = await moviesService.updateMovie(req.params, req);

            response.success(req, res, updatedMovieId, 200);
        } catch (error) {
            next(error);
        }
    }

    async function deleteMovie(req, res, next) {
        try {
            const deleteMovieId = await moviesService.deleteMovie(req.params);

            response.success(req, res, deleteMovieId, 200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = moviesApi;