import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
//import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
//import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
//import { BsCart3 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from '../Asset/logo2.png';
import '../Style/Nav.css';
//import { BsCart3 } from "react-icons/bs";

const Navv = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Menu", icon: <CakeRoundedIcon/>, path: "/menu" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
  ];

  return (
    <div className='Navbar'>
      <div>
        <img src={Logo} className='logo' alt="Company Logo" />
      </div>
      <div className="navbar-link-container">
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/menu' className='navbtn'><button className='order-btn'>Order Now</button></Link>
      </div>
      <div className='menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250, bgcolor: '#85C1E9' }}
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text}>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default Navv;
