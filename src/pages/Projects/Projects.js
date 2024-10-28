import React from 'react';
import './Projects.css';
import bulkEmailTool from '../../../src/assets/projectImage/bulkEmailTool.png'
import foodRecipe from '../../../src/assets/projectImage/foodRecipeApp.png'
import financeTracker from '../../../src/assets/projectImage/financeTracker.png'
import ecommerce from '../../../src/assets/projectImage/ecommerceApplication.png'

import Spin from 'react-reveal/Spin';
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have developed several MERN stack applications, including a Bulk
          Emailer Tool for sending customizable bulk emails, a Recipe
          Application for creating and saving recipes, a Finance Tracker to
          manage expenses and savings, and an Ecommerce Application for browsing
          and placing orders. These projects focus on delivering user-friendly
          interfaces, efficient functionality, and seamless performance using
          ReactJS, NodeJS, ExpressJS, and MongoDB.
        </p>
        {/* card design */}
        <div className="row justify-content-center" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={bulkEmailTool} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">BULK EMAIL TOOL App</h6>
                  </div>
                  <div className="button-container">
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/capstone_bulk_email_tool_frontend"
                    >
                      Frontend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/capstone_bulk_email_tool_backend"
                    >
                      Backend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://shubhams-bulk-email-tool-frontend.netlify.app"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FULL STACK</span>
                  <img src={foodRecipe} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Reactjs</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Recipe App</h5>
                  </div>
                  <div className="button-container">
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Food-Recipe-Frontend"
                    >
                      Frontend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Food-Recipe-Backend"
                    >
                      Backend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://shubhams-food-recipe.netlify.app"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={financeTracker} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Reactjs</span>

                  <span className="card-detail-badge">Nodejs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Finance Tracker App</h5>
                  </div>
                  <div className="button-container">
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Finance-Tracker-Frontend"
                    >
                      Frontend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Finance-Tracker-Backend"
                    >
                      Backend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://shubhams-finance-tracker.netlify.app"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={ecommerce} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Nextjs</span>
                  <span className="card-detail-badge">Nodejs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce App</h5>
                  </div>
                  <div className="button-container">
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Finance-Tracker-Backend"
                    >
                      Frontend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://github.com/ShubhamPeddarpeth/Ecommerce-Backend"
                    >
                      Backend
                    </a>
                    <a
                      className="ad-btn"
                      href="https://shubhams-ecommerce.netlify.app"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
