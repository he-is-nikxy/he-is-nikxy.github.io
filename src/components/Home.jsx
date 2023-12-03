import React, { useEffect } from 'react'
import '../css component/Home.css'
import bg from '../Polish_20231201_001034957.png'
import { gsap } from 'gsap'

const Home = () => {


  useEffect( () => {
      
      gsap.from("#intro p", {
        y: "100%",
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        ease: 'power1.out',
        stagger: 0.2,
      })
  
      gsap.from("#gifs span", {
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.4,
      })

  }, [] )


  useEffect( () => {

    setInterval(() => {
      
      gsap.from("#intro p", {
        y: "100%",
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        ease: 'power1.out',
        stagger: 0.2,
      })
  
      gsap.from("#gifs span", {
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.4,
      })
    }, 10000);

  } )




  return (
    <div id='home' className='homeDiv'>
      <div className='container'>
        <div id='intro' className='box'>
          <p className='hello'>Hello,</p>
          <p className='myName'>I'm Nikhil Khemani</p>
          <p className='para1'>Front-End Developer</p>
          <p className='para2'>React.js Developer</p>
          <div id='gifs' className='imgGifs'>
            <span style={{color:"darkorange", fontSize:"40px", margin:"5px"}}><i class="ri-html5-fill"></i></span>
            <span style={{color:"blue", fontSize:"40px", margin:"5px"}}><i class="ri-css3-line"></i></span>
            <span style={{color:"yellow", fontSize:"40px", margin:"5px"}}><i class="ri-javascript-fill"></i></span>
            <span style={{color:"teal", fontSize:"40px", margin:"5px"}}><i class="ri-reactjs-fill"></i></span>
            <span style={{fontSize:"40px", margin:"5px"}}><i class="ri-github-fill"></i></span>
            <span style={{color:"rgb(251, 104, 129)", fontSize:"40px", margin:"5px"}}><i class="ri-npmjs-line"></i></span>
          </div>
        </div>
        {/* <div className='imgDiv'> */}
          {/* <img src={bg} alt="Nikhil Khemani" /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Home