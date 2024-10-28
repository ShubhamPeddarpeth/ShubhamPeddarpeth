import React from 'react';
import image from '../../assets/images/Photo.jpeg';
import './About.css';
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={image} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a passionate MERN stack developer with a solid foundation
                in building full-stack web applications. With expertise in
                MongoDB, ExpressJS, ReactJS, and NodeJS, I specialize in
                creating dynamic, scalable, and responsive web applications. I
                have hands-on experience developing interactive user interfaces,
                integrating APIs, and managing state using modern technologies
                like Redux and React Hooks.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
