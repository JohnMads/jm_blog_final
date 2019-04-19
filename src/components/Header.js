import React, { Component } from 'react';
import logo from '../images/jmLogo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="home-image">
                <div className="header-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="header-words">A Better Way to Blog</div>
                <NavLink style={{ textDecoration: 'none'}} to={'/'}>
                    <div className="home-button">HOME</div>
                </NavLink>
            </header>
        )
    }
}

export default Header;