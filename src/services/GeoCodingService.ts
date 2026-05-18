import { CoordinateTypes } from "@/types/CoordinateTypes";

const API_KEY=process.env.OPENWEATHER_API_KEY;
const BASE_URL="https://api.openweathermap.org/geo/1.0"

export const GeoCodingService =async (cityName:string): Promise<CoordinateTypes|null> =>{ //This function will return according to coordinate types

    if(!API_KEY){
        throw new Error("API key undefined!"); //Throw error for router-catch block
    }

    const response=await fetch(`${BASE_URL}/direct?q=${cityName}&limit=1&appid=${API_KEY}`,{next:{revalidate:false}}); //Never reset cache because coords cant change in time

    if(!response.ok){
        const error: any = new Error(response.statusText);
        error.status = response.status; 
        throw error;
    }

    const geoCodingData = await response.json() as CoordinateTypes[];

    if(geoCodingData.length===0){ //If city not found will return [] 
        return null; //If city not found return null for router error
    }

    return geoCodingData[0]; //If fetch successfull return first item for best accuracy according to coordinate types
}