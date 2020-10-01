import React from "react";
import { useLocation } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/Main";

const Router = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path="/" exact render={() => <MainPage />} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;