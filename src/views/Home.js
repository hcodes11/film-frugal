import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import SearchMovie from '../components/SearchMovie';

const apiTMDB = process.env.REACT_APP_TMDB_API;

const trendUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiTMDB}`;

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
    <>
      <h5>Search Movies here</h5>
      <SearchMovie setMovies={setMovies} />
      <div>
        {movies.map((movie) => (
          <Movie key={movie.id} taco={movie} />
        ))}
      </div>
    </>
  );
}
