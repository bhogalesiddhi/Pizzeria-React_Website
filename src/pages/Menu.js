import React from 'react'
import { MenuList } from "../Menu_List/menu_list.js"
import MenuItem from '../components/MenuItem.js';
import "../styles/Menu.css"
import menu_bg from "../assets/menu_bg.png";

function Menu() {
    return (
        <div className='menu' style={{ backgroundImage: `url(${menu_bg})` }}>
            <h1 className='menuTitle'>
                Our Menu
            </h1>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return (


                        <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} />

                    );
                })}
            </div>

        </div>
    )
}

export default Menu