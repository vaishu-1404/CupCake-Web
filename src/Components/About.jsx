//import React, { useState } from 'react'
import '../Style/About.css'
import aboutbg from '../Asset/aboutbg.png'
//import abtbg from '../Asset/menubg.jpg'

const About = () => {

  return (
    <div className='abtbg'>
    <div className='about' style={{ backgroundImage: `url(${aboutbg})`}}>
    <div className='abt-banner-container' >
      <div className="abt-text-selection">
      <h1 className='abt-h1'>About Us</h1> 
       <p className='abt-p'>Welcome to Cuppy Cakes, your go-to destination for the most delicious and creatively crafted cupcakes! 
       Our passion for baking and our love for all things sweet inspire us to create cupcakes that are not only
       visually stunning but also irresistibly tasty.</p>
       <h2 className='abt-h2'>Our Story!!!</h2>
       <p className='abt-p'>Cuppy Cakes was born out of a simple love for baking. What started as a hobby in a small kitchen has grown
         into a thriving business dedicated to bringing joy and sweetness to our community. Each cupcake we 
         create is a testament to our commitment to quality, flavor, and creativity.</p>
         <h2 className='abt-h3'>Visit Us</h2>
<p className='abt-p'>We invite you to visit our cozy bakery, where you can watch our bakers in action, enjoy a cup of freshly brewed 
  coffee, and indulge in a cupcake (or two). Can't make it to the shop? No problem! We offer convenient delivery services 
  to bring our cupcakes straight to your door.Thank you for choosing Sweet Delights.
   We look forward to making your life a little sweeter, one cupcake at a time.</p>



       
      </div>
      </div>
    </div>
    </div>
  )
}

export default About;
