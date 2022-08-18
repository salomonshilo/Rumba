import React from 'react'
import styled from "styled-components"
export default function Login() {
    const handleClick = () => {
        const clientId = 'aef216cee1674edc82878c9becfe5f47';
        const redirectUrl = "http://localhost:3001/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email",
            "user-read-private", 
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
            
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
            )}&response_type=token&show_daialog=true`;
        
    };
  return <Container>
   <h1>la musique ilimitée</h1>
    <img src='https://www.pngkey.com/png/detail/14-144659_download-png-image-report-transparent-background-music-png.png'/>

      <button onClick={handleClick}>Se connecter à Rumba</button>
     
  </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
    width:30%
}
button{
    padding: 1rem 5rem ;
    border-radius: 5rem;
    cursor: pointer;
    font-size: 1rem;
}


`;

 