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
   <h1>Ecouter de la musique en continue grace à Rumba c’est fun et c’est cool , Evadez vous!!</h1>
    

      <button onClick={handleClick}>Se connecter à Rumba</button>
     
  </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;


align-items: center;
justify-content: center;



button{
    padding: 1rem 5rem ;
    border-radius: 5rem;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 480px;
}
h1{
    color: white;
    margin: 20px 90px;
}


`;

 