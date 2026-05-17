import { CurrentWeatherTypes, HourlyWeatherTypes, WeatherDataTypes } from "../WeatherTypes";

export interface CurrentWeatherModalTypes{
    weatherData:WeatherDataTypes;
    onClickFunction:(bool:boolean)=>void;
}