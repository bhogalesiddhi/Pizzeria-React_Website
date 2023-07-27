import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setLinks] = useState(true)

    const toggle = () => {
        return setLinks(!openLinks);
    }
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}><img src={Logo} />
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contact</Link>
                <button onClick={toggle}>
                    <ReorderIcon />
                </button>

            </div>
        </div>
    )
}

export default Navbar