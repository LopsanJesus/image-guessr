import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import TopBar from "./components/TopBar";
import MainMenu from "./components/MainMenu";
import Level from "./components/Level";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RouteChangeTracker from "./components/Analytics/ReactChangeTracker";
import ShareButtons from "./components/ShareButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <RouteChangeTracker />
        <div className="router">
          <TopBar />
          <div className="content">
            <Switch>
              <Route exact path="/play">
                <MainMenu />
              </Route>

              <Route exact path="/play/level/:level">
                <Level />
              </Route>

              <Route exact path="/share">
                <ShareButtons />
              </Route>

              {/* <Route exact path="/about">
              <About />
            </Route> */}

              {/* <Route path="/login/:redirect?">
              <LoginForm />
            </Route> */}

              <Route exact path="/">
                <Home />
              </Route>

              <NotFound />

              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
