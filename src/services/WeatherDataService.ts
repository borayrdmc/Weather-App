import { WeatherDataTypes } from "@/types/WeatherTypes";

const API_KEY=process.env.OPENWEATHER_API_KEY;
const BASE_URL= "https://api.openweathermap.org/data/3.0";

export const WeatherDataService= async (lat:number,lon:number): Promise<WeatherDataTypes>=>{

    if(!API_KEY){
        throw new Error("API key undefined!"); //Throw error for route catch block
    }

    const response = await fetch(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`,{next:{revalidate:3600}}); //Cache for 1 hour

    if(!response.ok){
        const error: any = new Error(response.statusText);
        error.status = response.status; 
        throw error;
    }

   const weatherData = await response.json() as WeatherDataTypes; //Fetch succesfull create json according to weather data types

   return weatherData;
}