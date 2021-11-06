import axios from "axios";
import { IFilters } from '../interfaces/IFilters'
import { IHotel } from "../interfaces/IHotels";
import { IResponse } from "../interfaces/IResponse";
import { IRoom } from "../interfaces/IRooms";
  
const ObmngService = () => {
    const apiBase = 'https://obmng.dbm.guestline.net/api/';

    const getResource = async (url: string) => {
        let res;

        try {
            res = await axios.get(`${apiBase}${url}`);
        } catch(error: any) {
            throw new Error(`Could not fetch ${url}, received ${error.status}`);
        }

        return res.data; 
    }

    const getHotels = async (filters: IFilters) => {
        let res;

        try {
            res = await getResource('hotels?collection-id=OBMNG');
            res = res.map(transformHotels)
                .filter((hotel: IHotel) => hotel.starRating >= filters.starRating)
        } catch(error: any) {
            throw new Error(`Could not get hotels list, received ${error.status}`)
        }
        
        return res;
    }

    const getRooms = async (roomNum: number, filters: IFilters) => {
        let res = await getResource(`roomRates/OBMNG/${roomNum}`);
        try {
            res = res.rooms.map(transformRooms)
            .filter((room: IRoom) => {
                
                if (room.maxAdults >= filters.maxAdults 
                    && room.maxChildren >= filters.maxChildren) {
                    return true
                } else {
                    return false 
                }
            })
        } catch(error: any) {
            throw new Error(`Could not get rooms list, received ${error.status}`)
        }
        
        return res;
    }

    const transformHotels = (hotel: IHotel) => {
        return {
            id: hotel.id,
            name: hotel.name,
            address1: hotel.address1,
            address2: hotel.address2,
            starRating: hotel.starRating,
            images: hotel.images
        };
    }

    const transformRooms = (room: IResponse) => {
        return {
            id: room.id,
            roomType: room.name,
            maxAdults: room.occupancy.maxAdults,
            maxChildren: room.occupancy.maxChildren,
            maxOverall: room.occupancy.maxOverall,
            longDescription: room.longDescription 
        }
    }

    return {getHotels, getRooms}

}

export default ObmngService; 