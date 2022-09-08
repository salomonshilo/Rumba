import axios from 'axios';
import React, {useEffect} from 'react'
import styled from 'styled-components'
import { reducerCases } from '../utils/constant';
import { useStateProvider } from '../utils/StateProvider';
import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
export default function Rumba() {
    const [{ token }, dispatch ]= useStateProvider();
    useEffect(()=> {
      const getUserInfo = async ()=>{
          const {data} = await axios.get(" https://api.spotify.com/v1/me", {
              headers: {
            Authorization:"Bearer "+token,
            "Content-Type": "application/json",
        },
    });

const userInfo = {
    userId: data.id,
    userName: data.display_name,
};

dispatch({type:reducerCases.SET_USER,userInfo});
}; 
    getUserInfo();
      
    },[dispatch, token])
  return  <Container>
      <div className='rumba_body'>
         <Sidebar />
          <div className='body'>
           <Navbar/>
              <div className='body_content' >
                  <Body/>
              </div>
          </div>
      </div>
      <div className='rumba_footer'>
          <Footer/>
      </div>
  </Container>
}

const Container = styled.div `
max-width: 100vw;
max-height: 100vh;
overflow: hidden;
display: grid;
grid-template-rows:85vh 15vh ;
.rumba_body{
display: grid;
grid-template-columns: 15vw 85vw;
height: 100%;
width: 100%;

background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
background-color: #700086;
.body{
    height: 100%;
    width: 100%;
    overflow: auto;
   
}
}
`;