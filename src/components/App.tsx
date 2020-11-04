import React, { useState } from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import { BrowserRouter } from "react-router-dom";
import LoginContext from '../context';
import DesktopFallback from './DesktopFallback';
import PageTemplate from './PageTemplate';

const App = () => {
  const initialState = {id: 0, token: ""};
  const [loginUser, setLoginUser] = useState(initialState);
  return(
    <>
      {isBrowser && <DesktopFallback />}
      {isMobile && (
        <BrowserRouter>
          <LoginContext.Provider value={{
            user: loginUser,
            loginAccess: (user:{id: number, token: string})=>setLoginUser(user)}}>
            <PageTemplate/>
          </LoginContext.Provider>
        </BrowserRouter>
      )}
    </>
  )
};

export default App;
