import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <Router primary={false}>
        <Header />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    </HelmetProvider>
  );
};

export default App;
