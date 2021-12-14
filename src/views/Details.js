import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stream from '../components/Stream';

export default function Details() {
  const [stream, setStream] = useState([]);
  const [buy, setBuy] = useState([]);
  const [rent, setRent] = useState([]);

  const { id } = useParams();
  const apiTMDB = process.env.REACT_APP_TMDB_API;
  const streamUrl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiTMDB}&locale=US`;

  useEffect(() => {
    fetch(streamUrl)
      .then((response) => response.json())
      .then((data) => {
        setStream(data.results.US.flatrate);
        setRent(data.results.US.rent);
        setBuy(data.results.US.buy);
      });
  }, []);

  return (
    <>
      {stream && <h5>Free Streaming options here</h5>}
      <div>
        {stream?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </div>

      {buy && <h5>Buying options here</h5>}
      <div>
        {buy?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </div>
      {rent && <h5>Renting options here</h5>}
      <div>
        {rent?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </div>
    </>
  );
}
