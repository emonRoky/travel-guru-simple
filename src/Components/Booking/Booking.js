import { Link } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BannerNav from '../BannerNav/BannerNav';
import destination from '../Destination/Destination'
import './Booking.css';

const Booking = () => {
    const {destinationName} = useParams();
    const Destination = destination;
    const destnation = Destination.find(destination =>(destination.name === destinationName))
    const history = useHistory()
    const handleClick =()=>{
        history.push(`/Hotel/${destinationName}`);
    }
    
    return (
        <div className='banner-section'>
            <BannerNav></BannerNav>
            <div className="banner__area">
                <div className="banner__left">
                    <h1>{destnation.name}</h1>
                    <p>{destnation.dec}</p>
                </div>
                <div className="banner__right">
                    <div className="booking">
                        <div className="booking__input">
                            <p className='input__title'>Origine</p>
                            <input type="text" name=""placeholder='Dhaka'/>
                        </div>
                        <div className="booking__input">
                            <p className='input__title'>Destination</p>
                            <input type="text" value="" placeholder={destnation.name}/>
                        </div>
                        <div className="booking__date">
                            <div className="start__date">
                                <p className='input__title'>From</p>
                                <input type="date" name="" id=""/>
                            </div>
                            <div className="start__date">
                                <p className='input__title'>To</p>
                                <input type="date" name="" id=""/>
                            </div>
                        </div>
                        <button onClick={()=> handleClick()} className='secundery__btn'>Start Booking</button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Booking;