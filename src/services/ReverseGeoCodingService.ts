import { CoordinateTypes } from "@/types/CoordinateTypes";

const API_KEY=process.env.OPENWEATHER_API_KEY;
const BASE_URL="https://api.openweathermap.org/geo/1.0";

export const ReverseGeoCodingService = async (lat:number,lon:number): Promise<CoordinateTypes | null>=>{

    if(!API_KEY){
        throw new Error("API key undefined!");
    }

    const response = await fetch(`${BASE_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
    
    if(!response.ok){
        const error: any = new Error(response.statusText);
        error.status = response.status; 
        throw error;
    }

    const reverseGeoCodingData = await response.json() as CoordinateTypes[];

    if(reverseGeoCodingData.length===0){
        return null;
    }

    return reverseGeoCodingData[0];
};