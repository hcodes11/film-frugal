import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../api/data/watchlistData';

export default function WatchlistCard({ card, setWatchlist }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteMovie(card.firebaseKey).then(setWatchlist);
    }
  };
  const imageApi = 'https://image.tmdb.org/t/p/w1280';
  return (
    <>
      <Alert color="light">
        <button className="btn btn-light" type="button">
          {card.title}
        </button>
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
        <button className="btn btn-success" type="button">
          Favorite
        </button>
      </Alert>
    </>
  );
}

WatchlistCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  setWatchlist: PropTypes.func.isRequired,
};

WatchlistCard.defaultProps = {
  card: {},
};
