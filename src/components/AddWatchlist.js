import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createWatchlist, updateMovie } from '../api/data/watchlistData';
import userId from '../api/data/userId';

const initialState = {
  title: '',
  firebaseKey: '',
  overview: '',
  vote_average: '',
  id: '',
  poster_path: '',
  favorite: false,
};

export default function AddWatchlist({ movie }) {
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
        overview: movie.overview,
        vote_average: movie.vote_average,
        favorite: false,
        uid: userId(),
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
        <button className="btn" type="submit" onChange={handleChange}>
          <i className="fas fa-plus" style={{ color: 'green' }} />
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
    overview: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
    vote_average: PropTypes.string,
  }),
};

AddWatchlist.defaultProps = {
  movie: {},
};
