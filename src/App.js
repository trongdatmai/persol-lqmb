import React, { Component, useReducer, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import RootContext, { initializeContext } from "./contextAPI";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/homepage');
}

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

const checkAuth = () => {
  const account = JSON.parse(localStorage.getItem("account") || "{}");
  return JSON.stringify(account) !== "{}";
};

const App = () => {
  const [state, setState] = useState(initializeContext);

  const changeStatusProgress = s => {
    setState(prev => ({ ...prev, progress: s }));
  };

  const changeState = (ns) => {
    setState(prev => ({ ...prev, ...ns }));
    localStorage.setItem("account", JSON.stringify(ns));
  };

  return (
    <FirebaseDatabaseProvider>
      <RootContext.Provider value={{ stateAPI: state, changeStatusProgress, changeState }}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={props => <Login {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={props => <Register {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={props => <Page404 {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={props => <Page500 {...props} />}
              />
              <Route
                path="/"
                name="Home"
                render={props => {
                  return checkAuth() ? (
                    <DefaultLayout {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login"
                      }}
                    />
                  );
                }}
              />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </RootContext.Provider>
    </FirebaseDatabaseProvider>
  );
};

export default App;
