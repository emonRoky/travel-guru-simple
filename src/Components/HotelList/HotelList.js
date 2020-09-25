import React from 'react';

const HotelList = (props) => {
    const{img,name} = props.hotel;
    return (
            <div className="hotel__list">
                <div className="single__hotel">
                    <div className="hotel__img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="hotel_content">
                        <h3 className>{name}</h3>
                        <p className="hotel_dec">ekljgeirjgperjgpwrgpwr</p>
                    </div>
                </div>
            </div>
            
    );
};

export default HotelList;