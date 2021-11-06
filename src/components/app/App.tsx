import React, { FC, useEffect, useState } from 'react';

import HeaderFilter from '../headerFilter/HeaderFilter';
import OutputComponent from '../outputComponent/OutputComponent';
import ObmngService from '../../services/ObmngService';

import { FiltersContext } from '../filtersContext/FiltersContext';
import { IFilters } from '../../interfaces/IFilters';

import './app.css';

const App: FC = () => {
  const obmngService = ObmngService();

  const [hotels, setHotels] = useState([]);

  const [filters, setFilters] = useState<IFilters>({
      starRating: 4,
      maxAdults: 2,
      maxChildren: 0
  });

  useEffect(() => {
    if (filters) {
      obmngService.getHotels(filters)
        .then((result) => {setHotels(result)})
    }
  // eslint-disable-next-line 
  },[filters])

  const changeFilters = (filters: IFilters) => {
    setFilters(filters);
  }

  return (
    <>
      <HeaderFilter changeFilters={changeFilters} filters={filters}/>
      <FiltersContext.Provider value={filters}>
        <OutputComponent hotelsList={hotels}/>  
      </FiltersContext.Provider>
    </>
  )
}

export default App;
