import { HourlyWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

export interface HourlyWeatherCardTypes{
    hourlyWeatherData:HourlyWeatherTypes;
    hour:string; 
    unit:TemperatureUnit;
}

export function HourlyWeatherCard({hourlyWeatherData,hour,unit}:HourlyWeatherCardTypes){

    const iconPath=WeatherIconSwitcher(hourlyWeatherData.weather[0].icon,hourlyWeatherData.weather[0].id)

    return(
        
        <div className="flex flex-col items-center gap-1 bg-amber-100 text-black dark:text-white dark:bg-[#1E1E20] ">
            <p className="text-lg">{hour}</p>
            <img className="w-10 h-10 object-contain" src={iconPath} alt="icon"></img>
            <p>{UnitConverter(hourlyWeatherData.temp,unit)} {unit!=="K" && <span>°</span>}</p>
        </div>
    );
}