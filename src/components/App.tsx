import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
import LoginContext from '../context';
import { initialUser, UserPublic } from '../utils';
import { getUserPublicById } from './api';
import DesktopFallback from './DesktopFallback';
import PageTemplate from './PageTemplate';

const App = () => {
  const initialState = {id: 0, token: ""};
  const [loginUser, setLoginUser] = useState(initialState);
  const [userData, setUserData] = useState<UserPublic>(initialUser);

  useEffect(()=>{
    async function fetchData(){
      await getUserPublicById(loginUser.id, loginUser.token).then(data => setUserData(data));
    }
    if(loginUser.id > 0){
      fetchData();
    }
  },[loginUser])

  return(
    <>
      {isBrowser && <DesktopFallback />}
      {isMobile && (
        <BrowserRouter>
          <LoginContext.Provider value={{
            user: loginUser,
            loginAccess: (user:{id: number, token: string})=>setLoginUser(user)}}>
            <PageTemplate user={userData}/>
          </LoginContext.Provider>
        </BrowserRouter>
      )}
    </>
  )
};

export default App;
