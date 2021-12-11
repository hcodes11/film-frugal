import React, { useState, useEffect } from 'react';
import { getWatchlist } from '../api/data/watchlistData';
import WatchlistCard from '../components/WatchlistCard';
import userId from '../api/data/userId';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getWatchlist(userId()).then((watchlistArray) => {
      if (isMounted) setWatchlist(watchlistArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return watchlist.map((card) => (
    <WatchlistCard
      key={card.firebaseKey}
      card={card}
      setWatchlist={setWatchlist}
    />
  ));
}
