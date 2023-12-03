import React from 'react'
import '../css component/Resume.css'
import NikhilResume from '../Nikhil_Resume_01-12-2023.pdf'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div id='resume' className='resumeDiv'>
      <div><p className='resumeP'>Click the below button to download the Resume</p></div>
      <div>
        <a href={NikhilResume}>
        <button class='glowing-btn'><span class='glowing-txt'>RE<span class='faulty-letter'>SU</span>ME</span></button>
        </a>
      </div>
    </div>
  )
}

export default Resume