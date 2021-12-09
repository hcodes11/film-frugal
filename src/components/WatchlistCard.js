import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteMovie, updateMovie } from '../api/data/watchlistData';

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
        <button
          onClick={() => handleClick('update')}
          className="btn btn-success"
          type="button"
        >
          {card.favorite ? 'You favorited this movie' : 'Add to favorites'}
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
    favorite: PropTypes.bool,
  }),
  setWatchlist: PropTypes.func.isRequired,
};

WatchlistCard.defaultProps = {
  card: {},
};
