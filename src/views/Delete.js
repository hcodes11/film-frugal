import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteMovie } from '../api/data/watchlistData';
import Watchlist from './Watchlist';

export default function Delete() {
  const { fireKey } = useParams();

  useEffect(() => {
    deleteMovie(fireKey).then();
  }, []);

  return (
    <div>
      <Watchlist />
    </div>
  );
}
