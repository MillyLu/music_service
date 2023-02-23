/* eslint-disable react/jsx-no-constructed-context-values */

import { createGlobalStyle} from 'styled-components';
import { useEffect } from 'react';
import { AppRoutes } from "./routes";
import {useRefreshUserTokenMutation} from "./services/user";





import StratosSkyengWoff from './fonts/Stratos-Regular.woff';
import StratosSkyengWoff2 from './fonts/Stratos-Regular.woff2';



const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}

button,
._btn {
    cursor: pointer;
}

ul li {
    list-style: none;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url(${StratosSkyengWoff2}) format('woff2'),
        url(${StratosSkyengWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
}


html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
    background-color: #1C1C1C;

}
`;




function App() {
   
 const token = localStorage.getItem('token'); 
 
 const toki = localStorage.getItem('toki');
 console.log(toki);
  
 
 
 
 
   const [refreshT] = useRefreshUserTokenMutation();
 
 
 
   const handleRefreshAccess = () => {
     
     
        
           refreshT({ refresh: localStorage.getItem('toki')})
       }
 
   useEffect(() => {
     // handleRefreshAccess()
    // setRefresh(tokenString);
     const timer = setInterval(handleRefreshAccess, 30000)
     return () => clearInterval(timer)
   }, [])
 
 
 
 
 
 
 
 
 
 
 
 


  return(
      <>
      <GlobalStyle  /> 


      
      <AppRoutes user={token} />

      </>
      
  )
}

export default App;



