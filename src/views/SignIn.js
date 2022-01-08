import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';
import { signInUser } from '../api/auth';
import image from '../images/movie2.jpg';

const Background = styled.div`
  display: flex;
  background-image: url(${image});
  flex-wrap: wrap;
  position: absolute;
  padding: 20px;
  align-items: center;
  height: 100%;
  width: 100%;
  object-fit: fill;
  background-repeat: no-repeat;
`;

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <div className="text-center">
          <Spinner
            style={{ width: '10rem', height: '10rem' }}
            color="warning"
          />
        </div>
      ) : (
        <Background>
          <h1>Welcome to Film Frugal!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Sign In
          </button>
        </Background>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node.isRequired,
};
