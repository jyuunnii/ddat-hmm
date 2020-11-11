import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
import LoginContext from '../context';
import { initialToken, initialUser, UserPublic } from '../utils';
import { getUserPublicById } from './api';
import DesktopFallback from './DesktopFallback';
import PageTemplate from './PageTemplate';

const App = () => {
  const [userToken, setUserToken] = useState(initialToken);
  const [userData, setUserData] = useState<UserPublic>(initialUser);

  useEffect(()=>{
    async function fetchData(){
      await getUserPublicById(userToken.id, userToken.token).then(data => setUserData(data));
    }
    if(userToken.id > 0){
      fetchData();
    }
  },[userToken.id, userToken.token])

  return(
    <>
      {isBrowser && <DesktopFallback />}
      {isMobile && (
        <BrowserRouter>
          <LoginContext.Provider value={{
            userToken: userToken,
            loginAccess: (data:{id: number, token: string})=>setUserToken(data)}}>
            <PageTemplate userToken={userToken} user={userData}/>
          </LoginContext.Provider>
        </BrowserRouter>
      )}
    </>
  )
};

export default App;
