import axios from 'axios';
import firebaseConfig from '../apiKeys';
import userId from './userId';

const dbUrl = firebaseConfig.databaseURL;

const getWatchlist = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/watchlist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getMovie = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/watchlist/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const createWatchlist = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/watchlist.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/watchlist/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getWatchlist(userId()).then(resolve);
        });
    })
    .catch(reject);
});

const deleteMovie = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/watchlist/${firebaseKey}.json`)
    .then(() => getWatchlist(userId()).then(resolve))
    .catch(reject);
});

const updateMovie = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/watchlist/${obj.firebaseKey}.json`, obj)
    .then(() => getWatchlist(userId()).then(resolve))
    .catch(reject);
});

const getFavorites = () => new Promise((resolve, reject) => {
  getWatchlist(userId())
    .then((movies) => {
      const favMovies = movies.filter((movie) => movie.favorite);
      resolve(favMovies);
    })
    .catch(reject);
});

export {
  getWatchlist,
  createWatchlist,
  deleteMovie,
  getMovie,
  updateMovie,
  getFavorites,
};
