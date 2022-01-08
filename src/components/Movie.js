import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddWatchlist from './AddWatchlist';

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 3.5in;
  height: 4.2in;
  padding: 20px;
  border-radius: 1px;
  margin: 25px;

  position: relative;
  z-index: 0;

  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Together = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Movie({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  console.warn(taco);
  return (
    <>
      <MovieCard>
        <div className="title" style={{ color: 'Grey', fontSize: '20px' }}>
          {taco.title}
        </div>
        <div className="card" style={{ width: '200px' }}>
          <img
            className="card-img-top"
            src={imageApi + taco.poster_path}
            aria-hidden
            alt={taco.title}
          />
        </div>
        <Together>
          <Link to={`/details/${taco.id}`} className="btn">
            <i
              className="fas fa-info-circle"
              type="button"
              style={{ color: 'yellow' }}
            />
          </Link>
          <AddWatchlist movie={taco} />
          <button className="btn" type="button" style={{ color: 'grey' }}>
            {taco.vote_average}
          </button>
        </Together>
      </MovieCard>
    </>
  );
}

Movie.propTypes = {
  taco: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
    vote_average: PropTypes.string,
  }),
};

Movie.defaultProps = {
  taco: {},
};
