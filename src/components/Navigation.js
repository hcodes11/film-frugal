import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 2px dashed black;
`;

export default function Navigation() {
  return (
    <NavBar>
      <>
        <Link className="nav-link active" to="/home">
          Home
        </Link>
        <Link className="nav-link active" to="/popular">
          Popular
        </Link>
        <Link className="nav-link active" to="/watchlist">
          My Watchlist
        </Link>
        {/* <Link className="nav-link active" to="/favorites">
          My Favorites
        </Link> */}
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Logout
        </button>
      </>
    </NavBar>
  );
}
