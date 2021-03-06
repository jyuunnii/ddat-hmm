import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContext from "../context";

interface RouterProps {
  location?: any;
}

const IntroPage = lazy(()=> import("./pages/Intro"));
const MainPage = lazy(() => import("./pages/Main"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const UserSearchPage = lazy(() => import("./pages/UserSearch"));
const ProfilePage = lazy(()=> import ("./pages/Profile"));

const Router = (props: RouterProps) => {
  return (
    <LoginContext.Consumer>
      {token=>{
        return(
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch location={props.location}>
              <Route path="/" exact render={() => <IntroPage/>}/>
              <Route path="/user/:id" exact render={() => <MainPage userToken={token.userToken} />} />
              <Route path="/signin" exact render={()=> <SignInPage/>}/>
              <Route path="/signup" exact render={()=> <SignUpPage/>}/>
              <Route path="/search" exact render={() => <UserSearchPage userToken={token.userToken} />}/>
              <Route pathe="/profile" exact render={()=> <ProfilePage userToken={token.userToken} />}/>
              <Redirect to="/" />
            </Switch>
          </React.Suspense>
        )}
      }
    </LoginContext.Consumer>
    
  );
};


export default Router;