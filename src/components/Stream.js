import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Stream({ taco }) {
  return (
    <>
      <Alert color="light">
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
  }),
};

Stream.defaultProps = {
  taco: {},
};
