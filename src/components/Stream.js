import React from 'react';
import PropTypes from 'prop-types';

export default function Stream({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <img
        className="card-img-top"
        style={{ width: '50px' }}
        src={imageApi + taco.logo_path}
        aria-hidden
        alt={taco.provider_name}
        data-toggle="tooltip"
        data-placement="bottom"
        title={taco.provider_name}
      />
    </div>
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
