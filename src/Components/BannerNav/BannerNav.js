import React from 'react';
// import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
import './BannerNav.css';
import SearchIcon from '@material-ui/icons/Search';

const BannerNav = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src={logo} className='' alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" name="" placeholder='input'/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__options">
                    <p>News</p>
                </div>
                <div className="header__options">
                    <p>Destination</p>
                </div>
                <div className="header__options">
                    <p>Blog</p>
                </div>
                <div className="header__options">
                    <p>Contact</p>
                </div>
                {/* <div className=" primar__btn">
                    <p>Login</p>
                </div> */}
                <button className='primar__btn'>Login</button>
            </div>
        </div>
    );
};

export default BannerNav;