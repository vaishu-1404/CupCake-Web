import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navv from './Components/Navv';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Navv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
