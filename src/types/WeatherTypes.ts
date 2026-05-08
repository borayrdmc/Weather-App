export interface WeatherDescription{
    id:number;
    main:string;
    description:string;
    icon:string;
}
export interface CurrentWeather{
    dt:number;
    temp:number;
    feels_like:number;
    humidity:number;
    wind_speed:number;
    weather:WeatherDescription[];
}
export interface DailyWeather{
    dt:number;
    summary?:string;
    temp:{day:number,min:number,max:number}
    weather:WeatherDescription[];
    uvi:number;
    pop:number;
}
export interface WeatherData{
    lat:number;
    lon:number;
    timezone:string;
    current:CurrentWeather;
    daily:DailyWeather[]; 
}