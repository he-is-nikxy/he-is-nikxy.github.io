import React from 'react'
import './About.css'

import TiltedCard from '../components/TiltedCard'
import TextPressure from '../components/TextPressure'
import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity'
import ScrollVelocity from '../components/ScrollVelocity'
import GlitchText from '../components/GlitchText'
import ScrollFloat from '../components/ScrollFloat'
import AnimatedContent from '../components/AnimatedContent'


const About = () => {

  const containerRef = useRef(null);

  return (
    <>
      <div id='aboutMain'>

        <div id='resumeDiv'>
          <a href="../../resume/NikhilResumeMernDev.pdf" target='_blank'>
            <button className='button-86' role="button">Resume  <i class="ri-download-2-fill"></i></button>
          </a>
        </div>

        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div>
            <div id='titleCardMain'>
              <span>
                <TiltedCard
                  imageSrc="../images/NikhilKhemani.webp"
                  altText="Kendrick Lamar - GNX Album Cover"
                  captionText="Nikhil Khemani"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      Nikhil Khemani
                    </p>
                  }
                />
              </span>
              <span>
                <div id='textPressureNikhil' style={{ position: 'relative' }}>
                  <TextPressure
                    text="NIKHIL   KHEMANI"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={false}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={20}
                  />
                </div>
              </span>
            </div>
          </div>
        </AnimatedContent>

        <div id='aboutSection'>
          <div
            id='variableProximityMain'
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={'Seasoned developer proficient in React.js for dynamic UIs, Node.js and Express.js for server-side excellence, and MongoDB for efficient data handling. Specialized in crafting end-to-end applications that leverage the strengths of each technology stack for optimal performance and scalability.'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>
        </div>

        <div id='scrollVelocityDiv'>
          <ScrollVelocity
            texts={['REACT ~ JAVASCRIPT ~ HTML ~ CSS ~ ', 'NODE.JS ~ EXPRESS.JS ~ MONGODB ~ MONGOOSE ~ ']}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>


        <div>
          <div id='resumeMain'>
            <div>
              <GlitchText
                speed={1}
                enableShadows={true}
                enableOnHover={false}
                className='custom-class'
              >
                resume
              </GlitchText>
            </div>

            <div id='workExperience'>
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
              >
                Work Experience
              </ScrollFloat>
            </div>

            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div>
                <div id='resume'>
                  <div className='resumeContent'>
                    <h1>Senior Technical Support Specialist | JMSC POS Pvt. Ltd.</h1>
                    <h2> August 2022 - Present</h2>
                    <h3>As a Senior Software Support Executive, I specialized in diagnosing and resolving complex software issues, optimizing database performance, and delivering comprehensive technical support. My efforts consistently contributed to enhanced system stability, improved user experience, and operational efficiency for critical business applications.</h3>
                    <h2>Key Responsibilities & Achievements :</h2>
                    <ul>
                      <li>
                        Diagnosed and resolved high-level software and hardware issues to ensure continuous system functionality.
                      </li>
                      <li>
                        Delivered prompt end-to-end technical support, reducing downtime and improving customer satisfaction.
                      </li>
                      <li>
                        Managed MySQL databases, ensuring optimal performance, data integrity, and security.
                      </li>
                      <li>
                        Collaborated with cross-functional teams to identify recurring issues and implement long-term solutions.
                      </li>
                      <li>
                        Conducted root cause analysis and provided actionable insights to prevent issue recurrence.
                      </li>
                      <li>
                        Documented technical procedures and created troubleshooting guides to support team knowledge-sharing.
                      </li>
                      <li>
                        Trained junior support staff and provided guidance on handling complex support scenarios.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            <div id='workExperience'>
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
              >
                Education
              </ScrollFloat>
            </div>

            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div>

                <div id='resume'>
                  <div className='resumeContent'>
                    <h1>Bachelors in Computer Application | Dr. Babasaheb Ambedkar Open University</h1>
                    <h2>2022 – 2025</h2>
                    <h2>Ahmedabad, Gujarat</h2>
                  </div>
                  <div className='resumeContent'>
                    <h1>Aircraft Maintenance Engineering | Thakur Institute of Aviation Technology</h1>
                    <h2>2012 – 2015</h2>
                    <h2>Mumbai, Maharashtra </h2>
                  </div>
                  <div className='resumeContent'>
                    <h1>Full-stack Web Development with Gen AI | Masai School</h1>
                    <h2>2023 – Present</h2>
                  </div>
                </div>
              </div>
            </AnimatedContent>

          </div>
        </div>



      </div>


    </>
  )
}

export default About