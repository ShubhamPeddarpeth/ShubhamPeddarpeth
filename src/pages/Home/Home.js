import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import './Home.css';
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    'FullStack Developer!',
                    'Mern Stack Developer!',
                    'React native developer!',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=919620561614"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href="https://drive.google.com/file/d/1MIMGmTkfGBQ9JDsqoDKunaCt5I1N0kra/view?usp=sharing"
                download="Shubham_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
