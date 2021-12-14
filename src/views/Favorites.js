// import React, { useState, useEffect } from 'react';
// import { getFavorites } from '../api/data/watchlistData';
// import WatchlistCard from '../components/WatchlistCard';
// import userId from '../api/data/userId';

// export default function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     let isMounted = true;
//     getFavorites(userId()).then((favoritesArray) => {
//       if (isMounted) setFavorites(favoritesArray);
//     });
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return (
//     <div>
//       {favorites.map((card) => (
//         <WatchlistCard
//           key={card.firebaseKey}
//           card={card}
//           setFavorites={setFavorites}
//         />
//       ))}
//     </div>
//   );
// }
