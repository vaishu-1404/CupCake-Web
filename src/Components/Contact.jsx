import React from 'react'
import contactbg from '../Asset/contactbg.png'
import '../Style/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactbg' style={{ backgroundImage: `url(${contactbg})`}}>
      <h1 className='con-h1'>Contact Us</h1>
      <div className='container'>
      <h3 className='h3-name'>Name: </h3> 
      <input type='text' className="name" placeholder="Enter Your Name..."/>
      </div>
      <div className='container'> 
      <h3 className='h3-name'>Email: </h3> 
      <input type='text'className='email' placeholder="Enter Your Email..." />
      </div>
      <div className='container'> 
      <h3 className='h3-name'>Message: </h3> 
      <textarea rows='6' placeholder='Enter Message...' className='message' required></textarea>
      </div>
      <button className="secondary-button-con">
            Submit
          </button>
       </div>
    </div>
  )
}

export default Contact
