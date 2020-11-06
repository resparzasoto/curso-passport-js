const express = require('express');
const slash = require('express-slash');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const { config } = require('./config/index');

const authApi = require('./api/routes/auth');
const moviesApi = require('./api/routes/movies');
const userMoviesApi = require('./api/routes/userMovies');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler');

app.enable('strict routing');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

authApi(app);
moviesApi(app);
userMoviesApi(app);

app.use(slash());

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
