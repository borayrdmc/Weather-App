import { WeatherData } from "@/types/WeatherTypes";

const API_KEY=process.env.OPENWEATHER_API_KEY;
const BASE_URL= "https://api.openweathermap.org/data/3.0";

export const getWeatherData= async (lat:number,lon:number): Promise<WeatherData>=>{

    if(!API_KEY){
        throw new Error("API key undefined!");
    }

    const response = await fetch(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${API_KEY}`,{ next:{revalidate:3600}, cache:"force-cache" });

    if(!response.ok){
        throw new Error(`${response.status} Error: ${response.statusText}`);
    }

   return await response.json() as WeatherData;
}