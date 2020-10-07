import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

interface RouterProps {
  location?: any;
}

const MainPage = lazy(() => import("./pages/Main"));
const SubPage = lazy(() => import("./pages/Sub"));

const Router = (props: RouterProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch location={props.location}>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/sub" exact render={()=> <SubPage/>}/>
        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
};


export default Router;