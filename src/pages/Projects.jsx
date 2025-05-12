import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

import PixelCard from "../components/PixelCard";
import GradientText from "../components/GradientText";
import BounceCards from "../components/BounceCards"

const Projects = () => {

  const images = [
    // "https://picsum.photos/400/400?grayscale",
    "../../images/hiteshGym.png",
    "../../images/ayushiPetGrooming.png",
    "../../images/roshiPortfolio.png",
    "../../images/divyaBoutique.png"
  ];

  const transformStyles = [
    // "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <>
      <div id="projectsMain">


        <div id="projects">
          <h1>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Projects and Achievements!
            </GradientText>
          </h1>
          <div id="allProjectCards">
            <div className="projectCard">
              <Link to={""} target="_blank">
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>Nikxy Code Reviewer</h2>
                    <p style={{ fontStyle: "italic" }}>Developed using MERN Stack with Gemini Flash 2.0 API</p>
                  </div>
                </PixelCard>
              </Link>
            </div>
            <div className="projectCard">
              <Link to={"https://nikhil-ems.netlify.app/"} target="_blank">
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>EMPLOYEE MANAGEMENT SYSTEM</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Developed using React, ensuring seamless functionality
                    </p>
                    <p style={{ fontStyle: "italic" }}>Admin: admin@admin.com/123</p>
                    <p style={{ fontStyle: "italic" }}>Employee: name@name.com/123</p>
                  </div>
                </PixelCard>
              </Link>

            </div>
            <div className="projectCard">
              <Link
                to={"https://nikhil-sephora-clone.netlify.app/"}
                target="_blank"
              >
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>SEPHORA.COM CLONE</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Developed full-stack web application for Sephora website
                      clone using MERN stack, ensuring seamless functionality
                    </p>
                  </div>
                </PixelCard>
              </Link>
            </div>
            <div className="projectCard">
              <Link
                to={"https://nikhil-gaming-website.netlify.app/"}
                target="_blank"
              >
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>GAMING WEBSITE</h2>
                    <p style={{ fontStyle: "italic" }}>Developed using HTML, CSS & JS</p>
                    <p style={{ fontStyle: "italic" }}>
                      Integrated animations and dynamic features to create a
                      visually appealing and interactive gaming environment
                    </p>
                  </div>
                </PixelCard>
              </Link>
            </div>
            <div className="projectCard">
              <Link
                to={"https://nikhil-sample-homepage.netlify.app/"}
                target="_blank"
              >
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>SAMPLE HOME PAGE</h2>
                    <p style={{ fontStyle: "italic" }}>
                      Developed the Sample Home Page using React, aligning with
                      project requirements for a functional and scalable web
                      application
                    </p>
                  </div>
                </PixelCard>
              </Link>
            </div>
            <div className="projectCard">
              <Link
                to={"https://nikxy-apple-vision-pro-clone.netlify.app/"}
                target="_blank"
              >
                <PixelCard variant="white">
                  <div
                    style={{
                      position: "absolute",
                      margin: " 1vh 2vh",
                      color: "white",
                    }}
                  >
                    <h2>APPLE VISION PRO CLONE</h2>
                    <p style={{ fontStyle: "italic" }}>Developed using HTML, CSS & JS</p>
                    <p style={{ fontStyle: "italic" }}>
                      Constructed and optimized user interfaces for enhanced
                      user engagement and experience
                    </p>
                  </div>
                </PixelCard>
              </Link>
            </div>
          </div>
        </div>

        <div id="testimonialsMain">
          <div>
            <h1>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Testimonials
              </GradientText>
            </h1>
          </div>
          <div id="testimonials">
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={800}
              containerHeight={350}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
