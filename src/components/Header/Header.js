import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt=""/>
            <nav className='navMenu'>
                <div className='logo'>
                <img src={logo} alt=""/>
                </div>
               <div className='link'>
               <ul>
                   <li> <Link to="/home">Home</Link></li>
                   <li> <Link to="/destination">Destination</Link></li>
               </ul>
               </div>
            </nav>
        </div>
    );
};

export default Header;