import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Rubi Kuo - About</title>
      </Helmet>
      <main className="About">
        <section className="About__section About__section-intro">
          <article data-aos="fade-right" className="About__article-intro">
            <h1 className="About__title About__title-name">Rubi Kuo</h1>
            <p className="About__para-intro">
              Hi! I am an ambitious front-end developer with 8 years of work
              experiences in international projects and 2.5 year experiences in
              web development and UX design. I come from Taiwan and for now I am
              based in Helsingborg Sweden.
              <br />
              <br />
              Besides coding, I have a keen interest in arts, and I am an
              excessive monopoly player!
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
