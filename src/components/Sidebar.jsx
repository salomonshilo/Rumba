import React from 'react';
import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled,MdSearch} from  'react-icons/md';
import Playlist from './Playlist';
export default function Sidebar() {
  return <Container>
      <div className= 'links'>
         <div className='logo'>
           <img src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-1_0.png?itok=din8n_4y' alt='logo'/>

         </div>
         <ul>
             <li>
              <MdHomeFilled/>
                 <span>Home</span>
             </li>
             <li>
               <MdSearch/>
                 <span>Search</span>
             </li>
             <li>
             <IoLibrary/>
                 <span>Your Librairies </span>
             </li>
         </ul>

      </div>
      <Playlist/>
  </Container>
  
}

 const Container = styled.div`
 background-color: white;
 color:black;
 font-size: bold;
 display: flex;
 flex-direction: column;
 heigth: 100%;
 width: 100%;
 .links{
     display: flex;
     flex-direction: column;
     .logo{
         text-align: center;
         margin: 0px;

         img{
             max-inline-size: 100%;
             block-size: auto;
             height: 100px;
             
         }
     }
     ul{
         list-style-type: none;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         padding: 1rem;
      li{
          display: flex;
          gap: 1rem;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover{
          color:#f39d00;
        
      }
         }
     }
 }
 `;