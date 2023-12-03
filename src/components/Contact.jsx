import React, { useEffect, useState } from 'react'
import '../css component/Contact.css'
import { Link } from 'react-scroll'
import { gsap } from 'gsap'

const Contact = () => {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [contact, setContact] = useState("")
  let [message, setMessage] = useState("")

  let [submit, setSubmit] = useState([])

  let handleClick = () => {

    let newArr = {
      name: name, email: email, contact: contact, message: message
    }

    setSubmit([...submit, newArr])

    setName("")
    setEmail("")
    setContact("")
    setMessage("")
  }


  return (
    <div id='contact' className="contactDiv">
      <div className='contactPart1'>
        <h1>GET IN TOUCH</h1>
        <p><span style={{color:'white'}}><i class="ri-mail-send-line"></i></span> Email: heisnikxy@gmail.com</p>
        <p><span style={{color:'white'}}><i class="ri-phone-fill"></i></span> Contact No.: +91-9130214794</p>
        <p><span style={{color:'white'}}><i class="ri-map-pin-user-fill"></i></span> Ahmedabad, Gujarat, India</p>

        <p>
        <a id='githubNik' href="https://github.com/he-is-nikxy" style={{textDecoration:"none", color:"white"}}>
        <span style={{color:'white'}}><i class="ri-github-fill"></i></span> GitHub: @he-is-nikxy
        </a>
        </p>
        
        <p>
        <a id='linkedInNik' href="https://www.linkedin.com/in/nikhil-khemani-462761236/" style={{textDecoration:"none", color:"rgb(0, 145, 255)"}}>
        <span style={{color:'rgb(0, 145, 255)'}}><i class="ri-linkedin-box-fill"></i></span> LinkedIn: Nikhil Khemani
        </a>
        </p>

        <p>
        <a id='instaNik' href="https://www.instagram.com/he_is_nikxy" style={{textDecoration:"none", color:"rgb(255, 0, 106)"}}>
        <span style={{color:'rgb(255, 0, 106)'}}><i class="ri-instagram-line"></i></span> Instagram: @he_is_nikxy
        </a>
        </p>
        
        
      </div>
      <div className='contactPart2'>
        <h1>CONTACT ME</h1>
        <p>Name:</p>
        <input type="text" name='name' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
        <p>Email:</p>
        <input type="email" name='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Contact No.:</p>
        <input type="number" name='contact' placeholder='Enter Your Contact No.' value={contact} onChange={(e) => setContact(e.target.value)} />
        <p>Message: </p>
        <textarea cols="30" rows="5" name='message' placeholder='Enter Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <br />
        <button className='submitContact' onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Contact