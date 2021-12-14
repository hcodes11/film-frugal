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
  box-shadow: 10px 10px 10px 0px;

  position: relative;
  z-index: 0;

  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 20px 0px;
  }
`;

const Header = styled.div`
  display: flex;
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
        <Header>
          <div className="title">{card.title}</div>
          <button
            onClick={() => handleClick('update')}
            className="btn"
            type="button"
          >
            {card.favorite ? (
              <i className="fas fa-star" style={{ color: 'yellow' }} />
            ) : (
              <i className="fas fa-star" />
            )}
          </button>
        </Header>
        <div className="card" style={{ width: '150px' }}>
          <img
            className="card-img-top"
            src={imageApi + card.poster_path}
            aria-hidden
            alt={card.title}
          />
        </div>
        <button className="btn" type="button">
          <Link to={`/details/${card.id}`} className="btn btn-warning">
            Details
          </Link>
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
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
