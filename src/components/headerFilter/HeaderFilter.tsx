import { FC } from 'react';

import StarRating from '../starRating/StarRating';
import { IFilters } from '../../interfaces/IFilters';

import './headerFilter.css';

interface IProps {
    changeFilters: (filters: IFilters) => void,
    filters: IFilters
}

const HeaderFilter: FC<IProps> = ({ changeFilters, filters }) => {
    
    const changeStars = (rating: number) => {
        changeFilters({...filters, starRating: rating})
    }
    const increaseAdults = () => {
        changeFilters({...filters, maxAdults: filters.maxAdults + 1 })
    }
    const decreaseAdults = () => {
        if (filters.maxAdults !== 0) {
            changeFilters({...filters, maxAdults: filters.maxAdults - 1 });
        }
    }
    const increaseChildren = () => {
        changeFilters({...filters, maxChildren: filters.maxChildren + 1 })
    }
    const decreaseChildren = () => {
        if (filters.maxChildren !== 0) {
            changeFilters({...filters, maxChildren: filters.maxChildren - 1 });
        } 
    }

    return (
        <header>
            <div className="nav-container flex-view centered-items">
                <div className="nav-filter-bar ">
                    
                    <StarRating 
                        rating={filters.starRating} 
                        onChange={changeStars} />
                    
                    <div className="guests-filter">
                        <span>Adults 
                            <button onClick={increaseAdults}> + </button>
                            {filters.maxAdults}
                            <button onClick={decreaseAdults}> - </button>
                        </span>
                        <span>Children 
                            <button onClick={increaseChildren}> + </button>
                            {filters.maxChildren}
                            <button onClick={decreaseChildren}> - </button>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderFilter; 