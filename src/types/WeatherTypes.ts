export interface WeatherDescriptionTypes{
    id:number;
    main:string;
    description:string;
    icon:string;
}
export interface CurrentWeatherTypes{
    dt:number;
    temp:number;
    feels_like:number;
    humidity:number;
    wind_speed:number;
    uvi:number;
    weather:WeatherDescriptionTypes[];
}
export interface HourlyWeatherTypes{
    dt:number;
    temp:number;
    feels_like:number;
    uvi:number;
    humidity:number;
    wind_speed:number;    
    weather:WeatherDescriptionTypes[];
}
export interface DailyWeatherTypes{
    dt:number;
    summary?:string;
    temp:{day:number,min:number,max:number}
    weather:WeatherDescriptionTypes[];
    uvi:number;
    pop:number;
}
export interface WeatherDataTypes{
    lat:number;
    lon:number;
    timezone_offset:number;
    timezone:string;
    current:CurrentWeatherTypes;
    hourly:HourlyWeatherTypes[];
    daily:DailyWeatherTypes[]; 
}
export type TemperatureUnit = "C" | "K" | "F";