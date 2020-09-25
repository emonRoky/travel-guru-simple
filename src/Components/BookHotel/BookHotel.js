import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import  destination from '../Destination/Destination';
import mapimg from '../images/image 1.png';
import SecondNav from '../secondNav/SecondNav';
import './BookHotel.css';
import hotelData from '../hotelListData/HotelListData';
import HotelList from '../HotelList/HotelList';

const BookHotel = () => {
    console.log(hotelData);
    const {destinationName} = useParams();
    const Destination = destination;
    const destnation = Destination.find(destination =>(destination.name === destinationName))

    const hotelFake= hotelData;
    const [hotel, setHotel] = useState(hotelFake);
    return (
        <div>
            <SecondNav></SecondNav>
            <h2>Stay in {destnation.name}</h2>
            <div className='hotel'>
            <div className="hotel__list">
                {
                    hotel.map(hotel => <HotelList hotel={hotel}></HotelList>)
                }
                
            </div>

            <div className="map__img">
                <img src={mapimg} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default BookHotel;