import React, { FC } from 'react';

import './starRating.css';

interface IProps {
    rating : number,
    onChange?: (rating: number) => void
}

const StarRating: FC<IProps> = ({rating, onChange}) => {
    
    const getStarRating = () => {
        const starTypes: Array<Boolean> = [];
        for (let i: number = 1; i <= 5; i++) {
            starTypes[i] = i <= rating;
        }
        return (
            <>
                {starTypes.map((star: Boolean, index: number) => (
                    <i  key={index} 
                        onClick={() => {onChange && onChange(index)}} 
                        className={`${star ? 'fas' : 'far'} fa-star ${onChange && 'clickable'}`}>
                    </i>))}
            </>
        );
    }

    return (
      <div className="stars-filter flex-view">
          {getStarRating()}
      </div>
    )
}

export default StarRating;