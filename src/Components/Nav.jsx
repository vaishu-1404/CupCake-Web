import React from 'react'
import '../Style/Nav.css'; 
import Logo from '../Asset/logo2.png'
import { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
//import About from './About';
//import { Link } from 'react-router-dom';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

      const menuOption = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        { 
            text : "About",
            icon : <InfoIcon/>,
        },
        {
            text : "Feedback",
            icon : <CommentRoundedIcon/>,
        },
        {
            text : "Contact",
            icon : <PhoneRoundedIcon/>,
        },
        {
            text : "Cart",
            icon : <ShoppingCartRoundedIcon/>,
        },
      ];
      
  return (
    <div className='Navbar'>
        <div>
            <img src={Logo} className='logo' alt=""/>
        </div>
        <div className="navbar-link-container">
            <a href="/home">Home</a>
            <a href='/about'>About</a>
            <a href="">FeedBack</a>
            <a href="">Contact</a>
            <a href=""><BsCart3 className='cart-icon'/></a>
            <button className='order-btn'>Order Now</button>
        </div>
        <div className='menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
            <Box 
            sx={{width: 250, bgcolor: '#85C1E9'}}
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}>
                <list>
                    {menuOption.map((item) => (
                        <ListItem key={item.text}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </list>
                <Divider/>
            </Box>
        </Drawer>
    </div>
  )
}

export default Nav
