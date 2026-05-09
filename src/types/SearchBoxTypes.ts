import { WeatherDataTypes } from "@/types/WeatherTypes";

export interface SearchBoxTypes{
    setWeatherOnSearch:(data: WeatherDataTypes)=> void; //Incoming function has to have a data parameter(which follows weather data types) and mustn't return => setWeather(data) for an example
}