import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Stream({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Alert color="light">
        <div className="card" style={{ width: '150px' }}>
          <img
            className="card-img-top"
            src={imageApi + taco.logo_path}
            aria-hidden
            alt={taco.provider_name}
          />
        </div>
        <button className="btn btn-light" type="button">
          {taco.provider_name}
        </button>
      </Alert>
    </>
  );
}

Stream.propTypes = {
  taco: PropTypes.shape({
    id: PropTypes.number,
    provider_name: PropTypes.string,
    logo_path: PropTypes.string,
  }),
};

Stream.defaultProps = {
  taco: {},
};
