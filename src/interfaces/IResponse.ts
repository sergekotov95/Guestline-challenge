import { IOccupancy } from "./IOccupancy";

export interface IResponse {
    id: number,
    name: string, 
    occupancy: IOccupancy,
    longDescription: string

}