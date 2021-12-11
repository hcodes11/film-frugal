import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createWatchlist, updateMovie } from '../api/data/watchlistData';
import userId from '../api/data/userId';

const initialState = {
  title: '',
  firebaseKey: '',
  id: '',
  poster_path: '',
  favorite: false,
};

export default function AddWatchlist({ movie }) {
  const userInfo = userId();
  const [formInput, setFormInput] = useState({
    ...initialState,
    uid: userInfo,
  });
  const history = useHistory();

  useEffect(() => {
    if (movie.firebaseKey) {
      setFormInput(movie);
    } else {
      setFormInput(initialState);
    }
  }, [movie]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.firebaseKey) {
      updateMovie(formInput).then(() => {
        history.push('/watchlist');
        resetForm();
      });
    } else {
      createWatchlist({
        ...formInput,
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        favorite: false,
        uid: userInfo.user,
      }).then(() => {
        resetForm();
        history.push('/watchlist');
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" id="id" name="id" value={formInput.id} />
        <button
          className="btn btn-success"
          type="submit"
          onChange={handleChange}
        >
          {movie.firebaseKey ? 'Update' : 'Add to Watchlist'}
        </button>
      </form>
    </div>
  );
}

AddWatchlist.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }),
};

AddWatchlist.defaultProps = {
  movie: {},
};
