import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
import SearchMovie from '../components/SearchMovie';

const apiTMDB = process.env.REACT_APP_TMDB_API;
const trendUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiTMDB}`;

const HomeStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(trendUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <HomeStyle>
      <h5>Search Movies here</h5>
      <SearchMovie setMovies={setMovies} />
      <MovieContainer>
        {movies.map((movie) => (
          <Movie key={movie.id} taco={movie} setMovies={setMovies} />
        ))}
      </MovieContainer>
    </HomeStyle>
  );
}
