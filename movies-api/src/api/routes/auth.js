const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const ApiKeysService = require('../services/apiKeys')
const UsersService = require('../services/users');

const validationHandler = require('../../utils/middleware/validationHandler');
const { createUserSchema, createProviderUserSchema } = require('../../utils/schemas/user');

const { config } = require('../../config');
const response = require('../../network/response');

require('../../utils/auth/strategies/basic');

function authApi(app) {
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing'),
    });
    app.use('/api/auth', router);

    const apiKeysService = new ApiKeysService();
    const usersService = new UsersService();

    router.post('/sign-in', signIn);
    router.post('/sign-up', validationHandler(createUserSchema), signUp);
    router.post('/sign-provider', validationHandler(createProviderUserSchema), signProvider);

    async function signIn(req, res, next) {
        const { apiKeyToken } = req.body;

        if (!apiKeyToken) {
            next(boom.unauthorized('apiKeyToken is required'));
        }

        passport.authenticate('basic', function (error, user) {
            try {
                if (error || !user) {
                    next(boom.unauthorized());
                }

                req.logIn(user, { session: false }, async function(error) {
                    if (error) {
                        next(error);
                    }

                    const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

                    if (!apiKey) {
                        next(boom.unauthorized());
                    }

                    const { _id: id, name, email } = user;

                    const payload = {
                        sub: id,
                        name,
                        email,
                        scopes: apiKey.scopes
                    };

                    const token = jwt.sign(payload, config.api.authJwtSecret, {
                        expiresIn: '15m'
                    });

                    const message = {
                        token,
                        user: { id, name, email }
                    };

                    response.success(req, res, message);
                });
            } catch (error) {
                next(error);
            }
        })(req, res, next);
    }

    async function signUp(req, res, next) {
        const { body: user } = req;

        try {
            const createdUserId = await usersService.createUser({ user });

            const message = {
                data: createdUserId,
                message: 'user created'
            };

            response.success(req, res, message, 201);
        } catch (error) {
            next(error);
        }
    }

    async function signProvider(req, res, next) {
        const { body } = req;

        const { apiKeyToken, ...user } = body;

        if (!apiKeyToken) {
            return next(boom.unauthorized('apiKeyToken is required'));
        }

        try {
            const queriedUser = await usersService.getOrCreateUser({ user });
            const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

            if (!apiKey) {
                return next(boom.unauthorized());
            }

            const { _id: id, name, email } = queriedUser;

            const payload = {
                sub: id,
                name,
                email,
                scopes: apiKey.scopes
            };

            const token = jwt.sign(payload, config.api.authJwtSecret, {
                expiresIn: '15m'
            });

            const message = {
                token,
                user: { id, name, email }
            };

            response.success(req, res, message);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = authApi;