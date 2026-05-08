import { CoordinateTypes } from "@/types/CoordinateTypes";

const API_KEY=process.env.OPENWEATHER_API_KEY;
const BASE_URL="https://api.openweathermap.org/geo/1.0"

export const GeoCodingService =async (cityName:string): Promise<CoordinateTypes|null> =>{

    if(!API_KEY){
        throw new Error("API key undefined!");
    }

    const response=await fetch(`${BASE_URL}/direct?q=${cityName}&limit=1&appid=${API_KEY}`,{next:{revalidate:false}});

    if(!response.ok){
        throw new Error(`${response.status} Error: ${response.statusText}`);
    }

    const geoCodingData = await response.json() as CoordinateTypes[];

    if(geoCodingData.length===0){
        return null;
    }

    return geoCodingData[0];
}