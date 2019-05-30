const {} = require('../dao/commentsDao');

module.exports.getMoviesByPage = async function(movie) {
    const data = await getMoviesByPage(movie);
    return data;
};