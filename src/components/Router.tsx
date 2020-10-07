import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

interface RouterProps {
  location?: any;
}

const MainPage = lazy(() => import("./pages/Main"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const SignUpPage = lazy(() => import("./pages/SignUp"));

const Router = (props: RouterProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch location={props.location}>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/signin" exact render={()=> <SignInPage/>}/>
        <Route path="/signup" exact render={()=> <SignUpPage/>}/>
        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
};


export default Router;