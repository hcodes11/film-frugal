import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Stream from '../components/Stream';

const StreamOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

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
        setStream(data.results.US?.flatrate);
        setRent(data.results.US?.rent);
        setBuy(data.results.US?.buy);
      });
  }, []);

  return (
    <StreamOptions>
      {stream && <h5>Free Streaming</h5>}
      <Group>
        {stream?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </Group>

      {buy && <h5>Buy</h5>}
      <Group>
        {buy?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </Group>
      {rent && <h5>Rent</h5>}
      <Group>
        {rent?.map((provider) => (
          <Stream key={provider.provider_id} taco={provider} />
        ))}
      </Group>
    </StreamOptions>
  );
}
