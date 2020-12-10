//variables
const movie =
    {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
    }

//function giving back the movie
const favoriteMovie = function(movie){
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars)
}

favoriteMovie(movie);
