import React, { FC } from 'react';

import { IHotel } from '../../interfaces/IHotels';
import RoomsList from '../roomsList/RoomsList';
import SimpleSlider from '../slider/Slider';
import StarRating from '../starRating/StarRating';

import './outputComponent.css';

interface IProps {
    hotelsList : Array<IHotel>
}

const OutputComponent: FC<IProps> = ({hotelsList}) => {

    return (
        <main>
            {hotelsList.map((hotel: IHotel, i: number) => (
                <section className="section" key={hotel.id}>
                    <div className="section-header">
                        <div className="img-slider">
                            <SimpleSlider images={hotel.images}/>
                        </div>
                        <div className="info-block">
                            <h2>{hotel.name}</h2>
                            <address>{hotel.address1}</address>
                            <address>{hotel.address2}</address>
                        </div>
                        <StarRating rating={hotel.starRating} />
                    </div>
                    <RoomsList id={hotel.id}/>
                    
                </section>
            ))}
        </main>
    )
}

export default OutputComponent;