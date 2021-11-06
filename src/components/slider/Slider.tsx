import React, { FC } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

interface IProps {
    images: any
}

const SimpleSlider: FC<IProps> = ({ images }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <>
            <Slider {...settings}>
                {images.map((image: any, i: number) => (
                    <div key={i}>
                        <img src={image.url} alt="hotel" />
                    </div>
                ))}
            </Slider>
        </>
    );
}  

export default SimpleSlider;