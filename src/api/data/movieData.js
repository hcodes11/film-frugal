import axios from 'axios';

const apiTMDB = process.env.REACT_APP_TMDB_API;
const popUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiTMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&locale=US`;

const getPopularMovies = () => new Promise((resolve, reject) => {
  axios
    .get(`${popUrl}.json`)
    .then((response) => resolve(Object.values(response.data.results)))
    .catch(reject);
});

export default getPopularMovies;
