import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1e1e2c' }}
              contentArrowStyle={{
                borderRight: '7px solid  white',
              }}
              date="2022 - 2023"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Reactjs Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                63 Moons Technology, Mumbai
              </h4>
              <p>
                Experienced ReactJS Developer with a strong background in
                building dynamic, responsive web applications using React,
                Redux, JavaScript, and collaborating with cross-functional teams
                for optimized UI/UX.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: '#1e1e2c' }}
              contentArrowStyle={{
                borderRight: '7px solid  white',
              }}
              date="2023 - 2024"
              iconStyle={{ background: '#1e1e2c', color: '#fff' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Guvi Mern Stack Developer Course
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Guvi, Chennai
              </h4>
              <p>
                A comprehensive MERN Stack Developer course from GUVI, focused
                on building full-stack applications using MongoDB, Express,
                React, and Node.js, with practical, industry-relevant skills.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
