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
  box-shadow: 10px 10px 10px 0px;

  position: relative;
  z-index: 0;

  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 20px 0px;
  }
`;

export default function Movie({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <MovieCard>
        <div className="title">{taco.title}</div>
        <div className="card" style={{ width: '150px' }}>
          <img
            className="card-img-top"
            src={imageApi + taco.poster_path}
            aria-hidden
            alt={taco.title}
          />
        </div>
        <button className="btn" type="button">
          <Link to={`/details/${taco.id}`} className="btn btn-warning">
            Details
          </Link>
        </button>
        <AddWatchlist movie={taco} />
      </MovieCard>
    </>
  );
}

Movie.propTypes = {
  taco: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

Movie.defaultProps = {
  taco: {},
};
