import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { deleteMovie, updateMovie } from '../api/data/watchlistData';

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 3.5in;
  height: 4.2in;
  padding: 20px;
  border-radius: 1px;
  margin: 25px;

  position: relative;
  z-index: 0;

  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Together = styled.div`
  display: flex;
  flex-direction: row;
`;

const Star = styled.button`
  position: absolute;
  font-size: 27px;
  font-weight: bold;
  top: 0px;
  right: 0px;
  border: 0px;
  background: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px red;
`;

export default function WatchlistCard({ card, setWatchlist }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteMovie(card.firebaseKey).then(setWatchlist);
    } else if (method === 'update') {
      if (card.favorite) {
        updateMovie({ ...card, favorite: false }).then(setWatchlist);
      } else {
        updateMovie({ ...card, favorite: true }).then(setWatchlist);
      }
    }
  };
  const imageApi = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <MovieCard>
        <Together>
          <div className="title" style={{ color: 'Grey', fontSize: '20px' }}>
            {card.title}
          </div>
        </Together>
        <div className="card" style={{ width: '200px', position: 'relative' }}>
          <img
            className="card-img-top"
            src={imageApi + card.poster_path}
            aria-hidden
            alt={card.title}
          />
          <Star onClick={() => handleClick('update')} type="button">
            {card.favorite ? (
              <i className="fas fa-heart" style={{ color: 'red' }} />
            ) : (
              <i className="fas fa-heart" style={{ color: 'transparent' }} />
            )}
          </Star>
        </div>
        <Together>
          <Link to={`/details/${card.id}`} className="btn">
            <i
              className="fas fa-info-circle"
              type="button"
              style={{ color: 'yellow' }}
            />
          </Link>
          <button
            onClick={() => handleClick('delete')}
            className="btn"
            type="button"
          >
            <i className="fas fa-trash-alt" style={{ color: 'red' }} />
          </button>
          <button className="btn" type="button" style={{ color: 'grey' }}>
            {card.vote_average}
          </button>
        </Together>
      </MovieCard>
    </>
  );
}

WatchlistCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
    vote_average: PropTypes.string,
  }),
  setWatchlist: PropTypes.func.isRequired,
};

WatchlistCard.defaultProps = {
  card: {},
};
