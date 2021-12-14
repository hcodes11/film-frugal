import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Streaming = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 2in;
  height: 1.2in;
  padding: 2px;
  border-radius: 1px;
  margin: 25px;
`;

export default function Stream({ taco }) {
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <Streaming>
      <img
        className="card-img-top"
        style={{ width: '50px' }}
        src={imageApi + taco.logo_path}
        aria-hidden
        alt={taco.provider_name}
      />
      <div className="title">{taco.provider_name}</div>
    </Streaming>
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
