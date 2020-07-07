import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./App.css";

function App() {
  return (
    <Router basename="">
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
