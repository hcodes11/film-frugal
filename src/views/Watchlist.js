import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getWatchlist } from '../api/data/watchlistData';
import WatchlistCard from '../components/WatchlistCard';
import userId from '../api/data/userId';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%
  justify-content: center;
`;

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

  return (
    <MovieContainer>
      {watchlist.map((card) => (
        <WatchlistCard
          key={card.firebaseKey}
          card={card}
          setWatchlist={setWatchlist}
        />
      ))}
    </MovieContainer>
  );
}
