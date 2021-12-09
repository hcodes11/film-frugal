import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createWatchlist, updateMovie } from '../api/data/watchlistData';

const initialState = {
  title: '',
  firebaseKey: '',
  id: '',
  poster_path: '',
  favorite: false,
};

export default function Watchlist({ movie }) {
  const [formInput, setFormInput] = useState(initialState);
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
      }).then(() => {
        resetForm();
        history.push('/watchlist');
        console.warn(formInput);
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
          Add to Watchlist
        </button>
      </form>
    </div>
  );
}

Watchlist.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

Watchlist.defaultProps = {
  movie: {},
};
