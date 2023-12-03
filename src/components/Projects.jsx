import React from 'react'
import '../css component/Projects.css'

const Projects = () => {
  return (
    <div id='projects'>

      <h1 id='projectsH1'>Projects</h1>

      <ul className='accordion'>

        <li>
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="" />
          <div className='content'>
            <span>
              <h2>Name</h2>
              <p>Work</p>
            </span>
          </div>
        </li>

        <li>
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="" />
          <div className='content'>
            <span>
              <h2>Name</h2>
              <p>Work</p>
            </span>
          </div>
        </li>

        <li>
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="" />
          <div className='content'>
            <span>
              <h2>Name</h2>
              <p>Work</p>
            </span>
          </div>
        </li>

      </ul>

    </div>
  )
}

export default Projects