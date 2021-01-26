import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import About from "./Page/About/About";
// import Portfolio from "./Page/Portfolio/Portfolio";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY);
    };
  }, [scrollY]);

  console.log(current);
  return (
    <HelmetProvider>
      <Router primary={false}>
        <Header scrollY={scrollY} current={current} setCurrent={setCurrent} />

        <Route exact path="/">
          <Home scrollY={scrollY} current={current} />
        </Route>
        {/* <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} /> */}
      </Router>
    </HelmetProvider>
  );
};

export default App;
