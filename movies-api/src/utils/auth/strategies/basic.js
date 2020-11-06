const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UsersService = require('../../../api/services/users');

passport.use(
    new BasicStrategy(async function(email, password, done) {
        const userService = new UsersService();

        try {
            const user = await userService.getUser({ email });

            if (!user) {
                return done(Boom.unauthorized(), false);
            }

            if (!(await bcrypt.compare(password, user.password))) {
                return done(Boom.unauthorized(), false);
            }

            delete user.password;

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

module.exports = passport;