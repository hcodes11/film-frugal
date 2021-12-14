import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px dashed black;
`;

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
    <SearchBar>
      <form onSubmit={handleOnSubmit}>
        <input
          className="form-control form-control-lg me-1 search"
          type="search"
          placeholder="Which movie do you want to watch?"
          onChange={handleOnChange}
          value={search}
        />
      </form>
    </SearchBar>
  );
}

SearchMovie.propTypes = {
  setMovies: PropTypes.func.isRequired,
};
