import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';

export default function Navigation({ user }) {
  return (
    <>
      {user ? (
        <>
          <Link className="nav-link active" to="/home">
            Home
          </Link>
          <Link className="nav-link active" to="/popular">
            Popular
          </Link>
          <Link className="nav-link active" to="/watchlist">
            My Watch List
          </Link>
          <Link className="nav-link active" to="/details">
            Details
          </Link>
          <SignOutButton />
        </>
      ) : (
        <>
          <div />
          <SignInButton />
        </>
      )}
    </>
  );
}

Navigation.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

Navigation.defaultProps = {
  user: null,
};
