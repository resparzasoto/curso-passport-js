const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../src/utils/mocks/mongoLib');
const { moviesMock } = require('../src/utils/mocks/movies');

describe('services - movies', () => {
    const MoviesService = proxyquire('../src/api/services/movies', {
        '../lib/mongo': MongoLibMock
    });

    const moviesService = new MoviesService();

    describe('when getMovies method is called', async () => {
        it('should call the getAll MongoLib method', async () => {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepStrictEqual(result, expected);
        });
    });
});