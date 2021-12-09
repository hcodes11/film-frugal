import React, { useEffect, useState } from 'react';
import Stream from '../components/Stream';

export default function Details() {
  const [stream, setStream] = useState([]);

  useEffect(() => {
    const apiTMDB = process.env.REACT_APP_TMDB_API;
    const streamUrl = `https://api.themoviedb.org/3/movie/673/watch/providers?api_key=${apiTMDB}&locale=US`;
    fetch(streamUrl)
      .then((response) => response.json())
      .then((data) => {
        setStream(data.results.US.flatrate);
      });
  }, []);

  return (
    <>
      <h5>Free Streaming options here</h5>
      <div>
        {stream.map((provider) => (
          <Stream key={provider.id} taco={provider} setStream={setStream} />
        ))}
      </div>
    </>
  );
}
