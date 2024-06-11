import React from 'react'
import menubg from '../Asset/cupcake/menuubg.jpg'
import '../Style/Menu.css'
import MenuItem from './Menuitem'
import { menuList } from './Menulist'
//import { Key } from '@mui/icons-material'

const Menu = () => {
  return (
    <div className='menu' style={{ backgroundImage: `url(${menubg})`}}>
      <div className='menuList'>
        {menuList.map((menuItem, key) => {
           return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}

      </div>
      
    </div>
  )
}

export default Menu
