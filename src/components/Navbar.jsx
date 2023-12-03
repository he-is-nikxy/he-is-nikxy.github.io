import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../css component/Navbar.css'

const Navbar = () => {


  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <div className='nav'>
        <div className='nav-part1'>
          <Link style={{textDecoration: 'none', color: "#00b3ff"}} to='https://www.linkedin.com/in/nikhil-khemani-462761236/'>
          <i class="ri-linkedin-box-fill"></i>
          </Link>
        </div>
        <div className='nav-part2'>
            <div className='home'>
            <ScrollLink style={{textDecoration: 'none', color: 'white'}} to='home' smooth={true} duration={500}>HOME</ScrollLink>
            </div>
            <div className='about'>
            <ScrollLink style={{textDecoration: 'none', color: 'white'}} to='about' smooth={true} duration={500}>ABOUT</ScrollLink>
            </div>
            <div className='services'>
            <ScrollLink style={{textDecoration: 'none', color: 'white'}} to='projects' smooth={true} duration={500}>PROJECTS</ScrollLink>
            </div>
            <div className='contact'>
            <ScrollLink style={{textDecoration: 'none', color: 'white'}} to='contact' smooth={true} duration={500}>CONTACT</ScrollLink>
            </div>
            <div className='resume'>
            <ScrollLink style={{textDecoration: 'none', color: 'white'}} to='resume' smooth={true} duration={500}>RESUME</ScrollLink>
            </div>
            
        </div>
        <div className='nav-part3'>
          <ScrollLink to="resume" smooth={true} duration={500}>
            <button className="hireMe">Hire Me</button>
          </ScrollLink>
        </div>
    </div>
  )
}

export default Navbar