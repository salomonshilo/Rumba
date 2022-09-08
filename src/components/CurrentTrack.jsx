import styled from 'styled-components';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constant';

export default function CurrentTrack() {

  const [{ token, currentPlaying  }, dispatch ]= useStateProvider();
  
  useEffect (()=> {
    const getCurrentTrack = async () =>{
        const response = await axios.get(
          'https://api.spotify.com/v1/me/player/currently-playing', 
          {
            headers: {
                Authorization:"Bearer "+token,
                "Content-Type": "application/json",
            },
        }
    );
        if(response.data !== ""){
          const {item} = response.data 
          const currentPlaying = {
            id: item.id,
            name: item.name,
            artists: item.artists.map((artists)=>artists.name),
            image: item.album.images[2].url,

          }
        }
         dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
         
    };
    getCurrentTrack();
}, [token, dispatch])
  return <Container>
     {
       currentPlaying && (
         <div className='track'>
           <div className='track_image'>
             <img src ={currentPlaying.image} />
           </div>
           <div className='track_info'>
             <h4>{currentPlaying.name} </h4>
             <h5>{currentPlaying.artists.join(", ")} </h5>
           </div>
         </div>
       )
     }
  </Container>;
  
}
const Container = styled.div``;