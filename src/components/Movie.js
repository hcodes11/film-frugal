import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Movie({ taco }) {
  return (
    <>
      <Alert color="light">
        <button className="btn btn-light" type="button">
          {taco.title}
        </button>
        <button className="btn btn-warning" type="button">
          Details
        </button>
        <button className="btn btn-success" type="button">
          Add to Watchlist
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
