import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWatchlist = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/watchlist.json`)
    .then((response) => resolve(Object.values(response.data)))
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
          getWatchlist().then(resolve);
        });
    })
    .catch(reject);
});

const deleteMovie = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/watchlist/${firebaseKey}.json`)
    .then(() => getWatchlist().then(resolve))
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

const updateWatchlist = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/watchlist/${obj.firebaseKey}.json`, obj)
    .then(() => getWatchlist().then(resolve))
    .catch(reject);
});

export {
  getWatchlist,
  createWatchlist,
  deleteMovie,
  getMovie,
  updateWatchlist,
};
