import { DailyWeatherTypes, TemperatureUnit } from "./WeatherTypes";

export interface DailyWeatherGridTypes{
    dailyWeatherData:DailyWeatherTypes[];
    timezone:string;
    unit:TemperatureUnit;
}