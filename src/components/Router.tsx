import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

interface RouterProps {
  location?: any;
}

const MainPage = lazy(() => import("./pages/Main"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const StoragePage = lazy(() => import("./pages/Storage"));
const UserSearchPage = lazy(() => import("./pages/UserSearch"));
const ProfilePage = lazy(()=> import ("./pages/Profile"));

const Router = (props: RouterProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch location={props.location}>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/signin" exact render={()=> <SignInPage/>}/>
        <Route path="/signup" exact render={()=> <SignUpPage/>}/>
        <Route path="/storage" exact render={()=> <StoragePage/>}/>
        <Route path="/search" exact render={() => <UserSearchPage/>}/>
        <Route pathe="/profile" exact render={()=> <ProfilePage/>}/>
        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
};


export default Router;