import { WeatherDataTypes } from "@/types/WeatherTypes";
import { CoordinateTypes } from "./CoordinateTypes";

export interface StartupPageTypes{
    setWeatherData:(data: WeatherDataTypes)=> void; //Incoming function has to have a data parameter(which follows weather data types) and mustn't return => setWeather(data) for an example
    setLocationData:(data:CoordinateTypes)=>void; //Same as setWeatherOnSearch 
}