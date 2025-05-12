import React from 'react';
import './Skills.css';


import FallingText from '../components/FallingText';
import GradientText from "../components/GradientText";

const Skills = () => {






  return (
    <>
      <div id="skillsMain">

        <div id='fallingTextMain'>
          <div id="skillsTitle">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Technical Skills!
            </GradientText>
          </div>
          <div id="fallingText">
            <FallingText
              text={`HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Mongoose, Data Structures and Algorithms, Generative AI, System Design, and Networking.`}
              highlightWords={["React", "Generative", "AI", "JavaScript", "Data", "Structures", "Mongoose", "Networking"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="3vh"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default Skills