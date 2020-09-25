import React from 'react';
import './BannerSlide.css';
import { useHistory } from 'react-router-dom';
const BannerSlide = (props) => {
    console.log(props);
    const {name,img} = props.slide;

    const history = useHistory();
    const handelClick = (destinationName) =>{
       history.push(`/destination/${destinationName}`);
    }
    return (
        <div>
        <div className="slider">
            <div onClick={() => handelClick(name)} className="slider__item">
                <img src={img} alt=""/>
                <div className='slider__title'>{name}</div>
            </div>
        </div>
        </div>
    );
};

export default BannerSlide;