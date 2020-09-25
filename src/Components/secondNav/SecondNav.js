import React from 'react';
import logo from '../images/lg.png';
import './secondNav.css';

const SecondNav = () => {
    return (
        <div className='header'>
        <div className="header__left">
            <img src={logo} className='' alt=""/>
        </div>
        <div className="header__right">
            <div className="header__option">
                <p>News</p>
            </div>
            <div className="header__option">
                <p>Destination</p>
            </div>
            <div className="header__option">
                <p>Blog</p>
            </div>
            <div className="header__option">
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

export default SecondNav;