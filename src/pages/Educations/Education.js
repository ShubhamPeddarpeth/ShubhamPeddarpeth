import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2017 - 2020"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.E</h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.L.D.E.A's V.P. Dr.P.G.Halakatti College of Engineering and
              Technology,  Vijayapura
            </h4>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
