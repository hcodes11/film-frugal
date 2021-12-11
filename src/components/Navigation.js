import React from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  return (
    <div className="text-center mb-3">
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
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Logout
        </button>
      </>
    </div>
  );
}
