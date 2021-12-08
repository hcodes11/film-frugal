import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import { getPopularMovies } from '../api/data/movieData';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getPopularMovies().then((popular) => {
      if (isMounted) setMovies(popular);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} taco={movie} />
      ))}
    </div>
  );
}
