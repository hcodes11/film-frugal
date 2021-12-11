import React from 'react';
import { signInUser } from '../api/auth';

export default function SignInButton() {
  return (
    <button type="button" className="btn-outline-dark btn" onClick={signInUser}>
      <i className="fas fa-sign-in-alt" />
    </button>
  );
}
