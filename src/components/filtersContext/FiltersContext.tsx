import {createContext} from 'react';

export const filters = {
    starRating: 5,
    maxAdults: 2,
    maxChildren: 0
}

export const FiltersContext = createContext(filters);