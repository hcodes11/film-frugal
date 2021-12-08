import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Watchlist from './Watchlist';

export default function Movie({ taco }) {
  return (
    <>
      <Alert color="light">
        <button className="btn btn-light" type="button">
          {taco.title}
        </button>
        <button className="btn" type="button">
          <Link to={`/details/${taco.id}`} className="btn btn-warning">
            Details
          </Link>
        </button>
        <button className="btn" type="button">
          <Watchlist movie={taco} />
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
  }),
};

Movie.defaultProps = {
  taco: {},
};
