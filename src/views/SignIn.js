import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { signInUser } from '../api/auth';

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
        <>
          <div>
            <h1>Welcome to Film Frugal!</h1>
          </div>
          <div>
            <h4>Developed by Harika</h4>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={signInUser}
            >
              Sign In to Search Movies!
            </button>
          </div>
        </>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node.isRequired,
};
