import axios from 'axios';
import firebaseConfig from '../apiKeys';

const apiTMDB = process.env.REACT_APP_TMDB_API;
const dbUrl = firebaseConfig.DBURL;
const popUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiTMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
// const searchUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&api_key=${apiTMDB}&query=`;

const getSearchMovies = () => new Promise((resolve, reject) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiTMDB}&language=en-US&page=1&include_adult=false&query="jumanji".json`,
    )
    .then((response) => resolve(Object.values(response.data.results)))
    .catch(reject);
});

function createWatchList(obj) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${dbUrl}/watchlist.json`, obj)
      .then((response) => {
        const firebaseKey = response.data.name;
        axios
          .patch(`${dbUrl}/${firebaseKey}.json`, { firebaseKey })
          .then(() => {
            getSearchMovies().then(resolve);
          });
      })
      .catch(reject);
  });
}

const getPopularMovies = () => new Promise((resolve, reject) => {
  axios
    .get(`${popUrl}.json`)
    .then((response) => resolve(Object.values(response.data.results)))
    .catch(reject);
});

export { getSearchMovies, createWatchList, getPopularMovies };
