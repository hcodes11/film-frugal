import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddWatchlist from './AddWatchlist';

export default function Movie({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Alert color="light">
        <button className="btn btn-light" type="button">
          {taco.title}
        </button>
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
        <button className="btn" type="button">
          <AddWatchlist movie={taco} />
        </button>
      </Alert>
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
