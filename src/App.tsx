import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";
import React from "react";

function App() {
  return (
    <Router basename="">
      <div id="App" className="dark-theme">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route path="/posts" component={Posts}></Route> */}
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
