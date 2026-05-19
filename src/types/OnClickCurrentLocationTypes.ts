import { CoordinateTypes } from "./CoordinateTypes";
import { WeatherDataTypes } from "./WeatherTypes";

export interface OnClickCurrentLocationTypes{
    setWeatherData:(data: WeatherDataTypes)=> void;
    setLocationData:(data:CoordinateTypes)=>void;
}