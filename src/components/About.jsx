import React, { useEffect, useState } from "react";
import "../css component/About.css";
import "../css component/Home.css"
import bg from "../Polish_20231201_001034957.png";
import { gsap } from "gsap";
import { Power3 } from "gsap";


const About = () => {


  useEffect( () => {

    gsap.from("#abtGifs span", {
      y:100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    })

  },[] )
  
  
  useEffect( () => {

    setInterval(() => {
      
      gsap.from("#abtGifs span", {
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.4,
      })

    }, 5000);

  } )


  const [state, setState] = useState(false)


  let handleTools1 = () => {
    gsap.to("#toolsCircle1", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleTools2 = () => {
    gsap.to("#toolsCircle2", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleTools3 = () => {
    gsap.to("#toolsCircle3", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleTools4 = () => {
    gsap.to("#toolsCircle4", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleTools5 = () => {
    gsap.to("#toolsCircle5", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleTools6 = () => {
    gsap.to("#toolsCircle6", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  
  let handleShrinkTools1 = () => {
    gsap.to("#toolsCircle1", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkTools2 = () => {
    gsap.to("#toolsCircle2", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkTools3 = () => {
    gsap.to("#toolsCircle3", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkTools4 = () => {
    gsap.to("#toolsCircle4", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkTools5 = () => {
    gsap.to("#toolsCircle5", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkTools6 = () => {
    gsap.to("#toolsCircle6", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  
  
  let handleSkills1 = () => {
    gsap.to("#skillsCircle1", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleSkills2 = () => {
    gsap.to("#skillsCircle2", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleSkills3 = () => {
    gsap.to("#skillsCircle3", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleSkills4 = () => {
    gsap.to("#skillsCircle4", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleSkills5 = () => {
    gsap.to("#skillsCircle5", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleSkills6 = () => {
    gsap.to("#skillsCircle6", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  
  let handleShrinkSkills1 = () => {
    gsap.to("#skillsCircle1", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkSkills2 = () => {
    gsap.to("#skillsCircle2", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkSkills3 = () => {
    gsap.to("#skillsCircle3", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkSkills4 = () => {
    gsap.to("#skillsCircle4", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkSkills5 = () => {
    gsap.to("#skillsCircle5", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkSkills6 = () => {
    gsap.to("#skillsCircle6", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  
  
  let handleMindsets1 = () => {
    gsap.to("#mindsetsCircle1", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleMindsets2 = () => {
    gsap.to("#mindsetsCircle2", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleMindsets3 = () => {
    gsap.to("#mindsetsCircle3", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  let handleMindsets4 = () => {
    gsap.to("#mindsetsCircle4", {width: 120, height: 120, ease: Power3.easeOut})
    setState(true)
  }
  
  let handleShrinkMindsets1 = () => {
    gsap.to("#mindsetsCircle1", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkMindsets2 = () => {
    gsap.to("#mindsetsCircle2", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkMindsets3 = () => {
    gsap.to("#mindsetsCircle3", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }
  let handleShrinkMindsets4 = () => {
    gsap.to("#mindsetsCircle4", {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }


  


  return (
    <div id="about" className="aboutDiv">
      <div>
        <h1 id="rct">
          As a <span style={{color:"aqua"}}>React</span> Developer,
        </h1>
      </div>
      {/* <div className='nikImg'>
        <img src={bg} alt="" />
      </div> */}
      <div className="containerImg">
        <div className="boxImg">
          <div className="spin-containerImg">
            <div className="shapeImg">
              <div className="bdImg">
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="content">
          I bring a dedicated focus to crafting <span style={{color: "rgb(251, 104, 129)"}}>dynamic</span> and <span style={{color: "rgb(251, 104, 129)"}}>user-friendly</span> interfaces. While currently gaining experience in the field, I'm enthusiastic about contributing my skills to create impactful <span style={{color: "yellow"}}>web applications</span>. Eager for new opportunities and growth in the ever-evolving landscape of <span style={{color: "aqua"}}>React development</span>!🚀🌐
        </h2>
      </div>
      <div id="abtGifs" className='imgGifs'>
        <span style={{color:"darkorange", fontSize:"40px", margin:"5px"}}><i class="ri-html5-fill"></i></span>
        <span style={{color:"blue", fontSize:"40px", margin:"5px"}}><i class="ri-css3-line"></i></span>
        <span style={{color:"yellow", fontSize:"40px", margin:"5px"}}><i class="ri-javascript-fill"></i></span>
        <span style={{color:"teal", fontSize:"40px", margin:"5px"}}><i class="ri-reactjs-fill"></i></span>
        <span style={{fontSize:"40px", margin:"5px"}}><i class="ri-github-fill"></i></span>
        <span style={{color:"rgb(251, 104, 129)", fontSize:"40px", margin:"5px"}}><i class="ri-npmjs-line"></i></span>
      </div>



      <div id="main">

        <div id="tools">
          <div id="toolsHeadingDiv">
            <h2 id="toolsHeading">TOOLS</h2>
          </div>
          <div id="toolsContentDiv">
            <div id="toolsCircle1" onClick={state !== true ? handleTools1 : handleShrinkTools1} className="toolsCircle"></div>
            <div id="toolsCircle2" onClick={state !== true ? handleTools2 : handleShrinkTools2} className="toolsCircle"></div>
            <div id="toolsCircle3" onClick={state !== true ? handleTools3 : handleShrinkTools3} className="toolsCircle"></div>
            <div id="toolsCircle4" onClick={state !== true ? handleTools4 : handleShrinkTools4} className="toolsCircle"></div>
            <div id="toolsCircle5" onClick={state !== true ? handleTools5 : handleShrinkTools5} className="toolsCircle"></div>
            <div id="toolsCircle6" onClick={state !== true ? handleTools6 : handleShrinkTools6} className="toolsCircle"></div>
          </div>
        </div>

        <div id="skills">
          <div id="skillsHeadingDiv">
            <h2 id="skillsHeading">EXPERTISE</h2>
          </div>
          <div id="skillsContentDiv">
            <div id="skillsCircle1" onClick={state !== true ? handleSkills1 : handleShrinkSkills1} className="skillsCircle"></div>
            <div id="skillsCircle2" onClick={state !== true ? handleSkills2 : handleShrinkSkills2} className="skillsCircle"></div>
            <div id="skillsCircle3" onClick={state !== true ? handleSkills3 : handleShrinkSkills3} className="skillsCircle"></div>
            <div id="skillsCircle4" onClick={state !== true ? handleSkills4 : handleShrinkSkills4} className="skillsCircle"></div>
            <div id="skillsCircle5" onClick={state !== true ? handleSkills5 : handleShrinkSkills5} className="skillsCircle"></div>
            <div id="skillsCircle6" onClick={state !== true ? handleSkills6 : handleShrinkSkills6} className="skillsCircle"></div>
          </div>
        </div>

        <div id="mindsets">
          <div id="mindsetsHeadingDiv">
            <h2 id="mindsetsHeading">MINDSETS</h2>
          </div>
          <div id="mindsetsContentDiv">
            <div id="mindsetsCircle1" onClick={state !== true ? handleMindsets1 : handleShrinkMindsets1} className="mindsetsCircle"></div>
            <div id="mindsetsCircle2" onClick={state !== true ? handleMindsets2 : handleShrinkMindsets2} className="mindsetsCircle"></div>
            <div id="mindsetsCircle3" onClick={state !== true ? handleMindsets3 : handleShrinkMindsets3} className="mindsetsCircle"></div>
            <div id="mindsetsCircle4" onClick={state !== true ? handleMindsets4 : handleShrinkMindsets4} className="mindsetsCircle"></div>
          </div>
        </div>

      </div>
      <p id="expand">CLICK ABOVE SKILLS TO <span className="expandSpan">EXPAND</span> AND <span className="shrinkSpan">SHRINK</span></p>

    </div>
  );
};

export default About;
