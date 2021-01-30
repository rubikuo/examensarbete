import React, { useEffect } from "react";

import "./Portfolio.scss";
// import Slick from "../../components/Slick/Slick";
import { Helmet } from "react-helmet-async";
import Projects from "../../components/Projects/Projects";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Rubi Kuo - Portfolio</title>
      </Helmet>
      <main className="Portfolio">
        <section id="develop" className="Portfolio__section-develop">
          <Projects />
          {/* <Slick /> */}
        </section>
        <section id="design" className="Portfolio__section-design">
          {/* <Gallery /> */}
        </section>
      </main>
    </>
  );
};

export default Portfolio;
