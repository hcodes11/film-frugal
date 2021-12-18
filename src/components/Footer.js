import React from 'react';
import styled from 'styled-components';

const FontSize = styled.div`
  font-size: 8px;
`;

export default function Footer() {
  return (
    <FontSize>
      <footer className="bg-dark text-center text-white">
        <div className="text-center p-3">
          Application Powered by
          <img
            className="mh-50 mw-50"
            width="50"
            height="50"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            aria-hidden
            alt="TMDB"
          />
          <a className="text-dark" href="https://www.themoviedb.org/">
            TMDb
          </a>
          <p>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
          <p> © 2021 Copyrights Reserved : hcodes11</p>
        </div>
      </footer>
    </FontSize>
  );
}
