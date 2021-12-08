import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchMovie({ setMovies }) {
  const apiTMDB = process.env.REACT_APP_TMDB_API;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&api_key=${apiTMDB}&query=`;
  const [search, setSearch] = useState('');

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(searchUrl + search)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="form-control form-control-lg me-1 search"
        type="search"
        placeholder="Which movie do you want to watch?"
        onChange={handleOnChange}
        value={search}
      />
    </form>
  );
}

SearchMovie.propTypes = {
  setMovies: PropTypes.func.isRequired,
};
