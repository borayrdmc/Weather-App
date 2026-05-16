import { CurrentWeatherTypes } from "./WeatherTypes";

export interface CurrentWeatherCardTypes{
    currentWeatherData:CurrentWeatherTypes;
    onClickFunction:(bool:boolean)=>void;
}