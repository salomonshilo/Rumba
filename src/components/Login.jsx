import React from 'react'
import styled from "styled-components"
export default function Login() {
    const handleClick = () => {
        const clientId = 'aef216cee1674edc82878c9becfe5f47';
        const redirectUrl = "http://localhost:3000/";
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
            )}&response_type=token&show_dialog=true`;
        
    };
  return <Container>
  
      <button onClick={handleClick}>Se connecter à Rumba</button>
     
  </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;
height: 635px;
background-image: url('https://thumbs.dreamstime.com/b/le-couple-danse-la-rumba-68963775.jpg');
background-repeat: no-repeat;
background-size: 35%;


align-items: center;
justify-content: center;



button{
    padding: 1rem 5rem ;
    border-radius: 5rem;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 50px;
    color: white;
    
    background-color:#77007f;
 
}

`;

 