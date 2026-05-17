import { CurrentWeatherTypes, HourlyWeatherTypes } from "../WeatherTypes";

export interface CurrentWeatherModalTypes{
    currentWeatherData:CurrentWeatherTypes;
    hourlyWeatherData:HourlyWeatherTypes[];
    onClickFunction:(bool:boolean)=>void;
    timezone:string;
}