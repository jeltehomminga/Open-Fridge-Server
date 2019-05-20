import React, { useState, useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Profile from "./components/auth/Profile";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import { createBrowserHistory } from "history";
import OfferFood from "./components/auth/OfferFood";
import RequestFood from "./components/auth/RequestFood";
import FoodOffers from "./components/auth/FoodOffers";
import FoodRequests from "./components/auth/FoodRequests";
import About from "./components/About";

const history = createBrowserHistory();

const App = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const logIn = loginState => {
    const { user, loggedIn } = loginState;
    setLoggedIn(loggedIn);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  };
  const logOut = logoutState => {
    const { user, loggedIn } = logoutState;
    setLoggedIn(loggedIn);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);
  return (
    <div className='App'>
      <section className='hero is-primary is-medium is-bold is-fullheight'>
          <Navbar
            {...props}
            loggedIn={loggedIn}
            user={user}
            logOut={logOut}
            history={history}
          />
        <div className='hero-body is-bold is-paddingless is-fullheight'>
          <div className='container has-text-centered'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Home {...props} loggedIn={loggedIn} logIn={logIn} />
                )}
              />
              <Route
                exact
                path='/about'
                render={props => (
                  <About {...props} loggedIn={loggedIn} user={user} />
                )}
              />
              <Route
                path='/signup'
                render={props => <Signup {...props} logIn={logIn} />}
              />
              <Route
                path='/login'
                render={props => <Login {...props} logIn={logIn} />}
              />
              <PrivateRoute
                path='/profile'
                user={user}
                component={Profile}
                loggedIn={loggedIn}
                logIn={logIn}
              />
              <PrivateRoute
                path='/offerfood'
                user={user}
                component={OfferFood}
                loggedIn={loggedIn}
                logIn={logIn}
              />
              <PrivateRoute
                path='/requestfood'
                user={user}
                component={RequestFood}
                loggedIn={loggedIn}
                logIn={logIn}
              />
              <PrivateRoute
                path='/foodoffers'
                user={user}
                component={FoodOffers}
                loggedIn={loggedIn}
                logIn={logIn}
              />
              <PrivateRoute
                path='/foodrequests'
                user={user}
                component={FoodRequests}
                loggedIn={loggedIn}
                logIn={logIn}
              />
            </Switch>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
