import React , {useEffect} from 'react'
import Login from './components/Login';
import Rumba from './components/Rumba';
import { reducerCases } from './utils/constant';
import { useStateProvider } from './utils/StateProvider';

 export default function App() {
  const [{token}, dispatch] = useStateProvider ();

   useEffect( ()=>{
      const hash = window.location.hash;
      if(hash){
       const token = hash.substring(1).split("&")[0].split("=")[1];
       console.log(token);
       dispatch({ type: reducerCases.SET_TOKEN, token});
      }
   },[token, dispatch]);
   
  return   <div> {token ? <Rumba />  : <Login />} </div>; 
  
}

