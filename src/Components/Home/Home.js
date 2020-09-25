import React, { useState } from 'react';
import BannerNav from '../BannerNav/BannerNav';
import './Home.css';
import destination from '../Destination/Destination'
import BannerSlide from '../Slider/BannerSlider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
                                                                                                            
const Home = () => {
    const Destination = destination;
    const [Slider, setSlider] = useState(Destination);
    return (
        <div className='banner-section'>
            <BannerNav></BannerNav>
            <div className="banner__area">
                <div className="banner__left">
                    <h1>Cox's bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                </div>
                <div className="banner__right">
                    <div className="slider">                                                 
                        {
                            Slider.map(slider => <BannerSlide slide={slider}></BannerSlide>)
                        }  
                   </div>
                    <div className="slider__nav">
                        <button className='sldr__btn'><ArrowBackIosIcon style={{padding:'5px'}} /></button>
                        <button className='sldr__btn'><ArrowForwardIosIcon style={{padding:'5px'}}/></button>
                    </div>
                </div>
            </div>  
        </div>
    );
};
export default Home;