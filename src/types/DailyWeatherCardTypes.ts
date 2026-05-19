import { DailyWeatherTypes, TemperatureUnit } from "./WeatherTypes";

export interface DailyWeatherCardTypes{
    dailyWeatherData:DailyWeatherTypes;
    day:string;
    unit:TemperatureUnit;
}