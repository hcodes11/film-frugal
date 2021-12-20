import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
import getPopularMovies from '../api/data/movieData';
import Footer from '../components/Footer';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    <>
      <MovieContainer>
        {movies.map((movie) => (
          <Movie key={movie.id} taco={movie} />
        ))}
      </MovieContainer>
      <Footer />
    </>
  );
}
