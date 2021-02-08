import React from "react";
import "./Timeline.scss";
import { FaSchool, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline className="Timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#00000",
          padding: "15px",
          borderTop: "3px solid #db70b8",
        }}
        date="2020 - Present"
        dateClassName="Timeline__date"
        iconStyle={{
          background: "#db70b8",
          color: "#fff",
        }}
        icon={<FaBriefcase />}
      >
        <h1 className="vertical-timeline-element-title Timeline__title">
          Front End Developer
        </h1>
        <h4 className="vertical-timeline-element-subtitle Timeline__subtitle">
          HBG Works, Helsingborg
        </h4>
        <p className="Timeline__para">
          Developing a prototype app to provide a reusing and exchanging
          platform for used facilities in the Helsingborg Stad. The app is built
          with React TypeScript, AWS, GraphQL, and Scrum methodology.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#00000",
          padding: "15px",
          borderTop: "3px solid #0077b3",
        }}
        date="2019 - Present"
        dateClassName="Timeline__date"
        iconStyle={{ background: "#0077b3", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h1 className="vertical-timeline-element-title Timeline__title">
          Front End Developer
        </h1>
        <h4 className="vertical-timeline-element-subtitle Timeline__subtitle">
          EC Utbildning, Helsingborg
        </h4>
        <p className="Timeline__para">
          2 year education for enhancing skills in JavaScript, React.js,
          testing, UX design, backend developement and CMS.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#00000",
          padding: "15px",
          borderTop: "3px solid #668cff",
        }}
        date="2019 - 2020"
        dateClassName="Timeline__date"
        iconStyle={{ background: "#668cff", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h1 className="vertical-timeline-element-title Timeline__title">
          Front End Developer
        </h1>
        <h4 className="vertical-timeline-element-subtitle Timeline__subtitle">
          Komvux, Helsingborg
        </h4>
        <p className="Timeline__para">
          6 month intensive course in HTML, CSS, JavaScript, Bootstrap, jQuery,
          Angular, API, GitHub, CLI, Scrum and Firebase.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#00000",
          padding: "15px",
          borderTop: "3px solid #db70b8",
        }}
        date="2009 - 2017"
        dateClassName="Timeline__date"
        iconStyle={{
          background: "#db70b8",
          color: "#fff",
        }}
        icon={<FaBriefcase />}
      >
        <h1 className="vertical-timeline-element-title Timeline__title">
          Customer Relation Management (CRM)
        </h1>
        <h4 className="vertical-timeline-element-subtitle Timeline__subtitle">
          Taiwan
        </h4>
        <p className="Timeline__para">
          Worked as communicator and coordinator in various international sales
          projects within different scale of company sizes and different type of
          company sectors.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#00000",
          padding: "15px",
          borderTop: "3px solid #668cff",
        }}
        date="2005 - 2009"
        dateClassName="Timeline__date"
        iconStyle={{ background: "#668cff", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h1 className="vertical-timeline-element-title Timeline__title">
          B.A. Radio, Television and Film
        </h1>
        <h4 className="vertical-timeline-element-subtitle Timeline__subtitle">
          Shih Hsin Univerisity, Taiwan
        </h4>
        <p className="Timeline__para">
          4 year eduction in visual design, TV and film production. Joined
          school TV studio team for producing campus news. GPA 3.9 (av 4).
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
