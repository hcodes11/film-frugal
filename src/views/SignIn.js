import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';
import { signInUser } from '../api/auth';
import image from '../images/im.jpg';

const Background = styled.div`
  display: flex;
  background-image: url(${image});
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  up: 0px !important;
  left: 0px !important;
  height: 100%;
  width: 100%;
  object-fit: fill;
  background-repeat: no-repeat;
`;

export default function SignIn({ user }) {
  return (
    <Background>
      {user === null ? (
        <div className="text-center">
          <Spinner
            style={{ width: '10rem', height: '10rem' }}
            color="warning"
          />
        </div>
      ) : (
        <>
          <h1>Welcome to Film Frugal!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Sign In
          </button>
        </>
      )}
    </Background>
  );
}

SignIn.propTypes = {
  user: PropTypes.node.isRequired,
};
