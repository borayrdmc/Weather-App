import { CurrentWeatherTypes, TemperatureUnit } from "./WeatherTypes";

export interface CurrentWeatherCardTypes{
    currentWeatherData:CurrentWeatherTypes;
    onClickFunction:(bool:boolean)=>void;
    unit:TemperatureUnit;
}