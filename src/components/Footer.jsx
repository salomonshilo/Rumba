import {useEffect} from 'react';
import { useStateProvider } from '../utils/StateProvider';
import SpotifyPlayer from 'react-spotify-web-playback';
import styled from 'styled-components'
import { reducerCases } from '../utils/constant';

export default function Footer() {
  const [{ token,contextUri}, dispatch]= useStateProvider();
  useEffect(() => {
    dispatch({
      type: reducerCases.SET_CONTEXT_URI,
      contextUri,
    });
    console.log(contextUri)
  }, [token, contextUri, dispatch]);

  return (
    <Container>
     <SpotifyPlayer 
      token={token}
      uris={[`${contextUri}`]}
/>;
  </Container>
  );
  
}

 const Container = styled.div`

 `;