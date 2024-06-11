import React from 'react'
import '../Style/Home.css';
import bg from '../Asset/111.jpg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${bg})`}}>
      <div className='home-banner-container' >
      <div className="home-text-selection">
        <h1 className='home-h1'>Welcome to Cuppy Cakes!!!</h1>
        <p className='home-p'>Cupcakes are sweet, and even sweeter when shared...</p>
        <Link to="/menu" className='btn'><button className="secondary-buttonn">
            Order Now <FiArrowRight />
          </button></Link>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
