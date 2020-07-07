import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./App.css";
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";

function App() {
  return (
    <Router basename="">
      <div id="App" className="dark-theme">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/posts" component={Posts}></Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
