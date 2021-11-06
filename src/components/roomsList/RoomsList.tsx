import { FC, useContext, useEffect, useState } from 'react';

import ObmngService from '../../services/ObmngService';
import { FiltersContext } from '../filtersContext/FiltersContext'
import { IRoom } from '../../interfaces/IRooms';

import './roomsList.css'

interface IProps {
    id: number
}

const RoomsList: FC<IProps> = ({ id }) => {
    const [rooms, setRooms] = useState([]);

    const filters = useContext(FiltersContext);

    const obmngService = ObmngService();

    useEffect(() => {
        let isMounted: boolean = true; 
        obmngService.getRooms(id, filters)
            .then((result) => {
                if(isMounted) {
                    setRooms(result);
                }
            });
        
        return () => {
            isMounted = false; 
        }
            // eslint-disable-next-line
    }, [filters])

    return (
        <div className="section-content">
            {
                rooms.map((room: IRoom) => (
                    <div className="room flex-view" key={room.id}>
                        <div className="overview flex-view">
                            <h3>{room.roomType}</h3>
                            <span>Adults: {room.maxAdults}</span>
                            <span>Children: {room.maxChildren}</span>
                        </div>
                        <div className="description">
                            <p>{room.longDescription}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
        
    )
}

export default RoomsList;