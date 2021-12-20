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
  font-size: 25px;
  top: 0px;
  right: 0px;
  border: 0px;
  background: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px yellow;
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
          <div className="title">{card.title}</div>
        </Together>
        <div className="card" style={{ width: '150px', position: 'relative' }}>
          <img
            className="card-img-top"
            src={imageApi + card.poster_path}
            aria-hidden
            alt={card.title}
          />
          <Star onClick={() => handleClick('update')} type="button">
            {card.favorite ? (
              <i className="fas fa-star" style={{ color: 'yellow' }} />
            ) : (
              <i className="fas fa-star" style={{ color: 'transparent' }} />
            )}
          </Star>
        </div>
        <Together>
          <button className="btn" type="button">
            <Link to={`/details/${card.id}`} className="btn btn-warning">
              Details
            </Link>
          </button>
          <button
            onClick={() => handleClick('delete')}
            className="btn"
            type="button"
          >
            <i className="fas fa-trash-alt" style={{ color: 'red' }} />
          </button>
        </Together>
      </MovieCard>
    </>
  );
}

WatchlistCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
  }),
  setWatchlist: PropTypes.func.isRequired,
};

WatchlistCard.defaultProps = {
  card: {},
};
