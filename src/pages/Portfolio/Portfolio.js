import { useEffect, useState } from "react";
import Options from "../../components/Options/Options.js";
import "./Portfolio.scss";

import { Helmet } from "react-helmet-async";
import Projects from "../../components/Projects/Projects";
import { projectTypes } from "../../utility/projects";

const Portfolio = () => {
  const [type, setType] = useState("All");
  const [classes, setClasses] = useState("Projects__project");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const controlContent = (_type) => {
    setType(_type);
    if (type === _type) return null;
    if (type === "All") {
      setClasses("Projects__project Projects__project--all");
    } else if (type !== _type) {
      setClasses("Projects__project Projects__project--anime");
    }
  };
  return (
    <>
      <Helmet>
        <title>Rubi Kuo - Portfolio</title>
      </Helmet>
      <main className="Portfolio">
        <section id="develop" className="Portfolio__section-develop">
          <Options
            projectTypes={projectTypes}
            controlContent={controlContent}
            type={type}
          />
          <Projects
            type={type}
            setType={setType}
            classes={classes}
            setClasses={setClasses}
          />
        </section>
        <section id="design" className="Portfolio__section-design"></section>
      </main>
    </>
  );
};

export default Portfolio;
