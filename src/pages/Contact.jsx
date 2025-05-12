import React, { useEffect, useState } from 'react'
import './Contact.css'
import MapComponent from '../components/MapComponent'
import { Link } from 'react-router-dom'




const Contact = () => {






  return (
    <>
      <div id="page13">
        <div className="contact-container">

          <div className="contact-me">

            <div id='contactLinks'>
              <Link to="mailto:heisnikxy@gmail.com"><i className="ri-mail-send-fill"></i> heisnikxy@gmail.com</Link>

              <Link to="https://github.com/he-is-nikxy" target="_blank"><i className="ri-github-fill"></i> Github:
                @he-is-nikxy
                <i className="ri-link"></i></Link>
              <Link to="https://www.linkedin.com/in/nikhil-khemani/" target="_blank"><i
                className="ri-linkedin-box-fill"></i> LinkedIN: Nikhil Khemani
                <i className="ri-link"></i></Link>
              <Link to="https://www.instagram.com/he_is_nikxy/?next=%2F&hl=en" target="_blank"><i
                className="ri-instagram-line"></i>
                Instagram: @he_is_nikxy
                <i className="ri-link"></i></Link>
            </div>

            <div id='contactMap'>
              <div>
                <h3><i className="ri-phone-fill"></i> Contact No.: +91-9130214794</h3>
                <h3><i className="ri-map-pin-line"></i> Ahmedabad, India</h3>
              </div>
              <MapComponent />
            </div>

          </div>

          <div className="form-div">
            <form action="https://formspree.io/f/xeqygybr" method="POST" data-scroll data-scroll-speed="-3">
              <h1>Let's work together</h1>
              <br />
              <input type="text" name="firstName" id="firstName" placeholder="First Name*" autocomplete="off"
                required />
              <input type="text" name="lastName" id="lastName" placeholder="Last Name" autocomplete="off" />
              <br />
              <input type="email" name="email" id="email" placeholder="Email*" autocomplete="off" required />
              <input type="text" name="mobile" id="mobile" placeholder="Mobile" autocomplete="off" />
              <br />
              <div>
                {/* <!-- <h4>Type Your Message Here...</h4> --> */}
                <textarea placeholder="Type Your Message Here..." name="message" autocomplete="off"
                  required></textarea> <br /> <br />
                {/* <!-- <input type="submit" value="Send" id="button"> --> */}
                <button type="submit" id="button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact