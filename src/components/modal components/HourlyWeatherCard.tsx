import { HourlyWeatherCardTypes } from "@/types/modal types/HourlyWeatherCardTypes";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

export function HourlyWeatherCard({hourlyWeatherData,hour}:HourlyWeatherCardTypes){

    const iconPath=WeatherIconSwitcher(hourlyWeatherData.weather[0].icon,hourlyWeatherData.weather[0].id)

    return(
        
        <div className="bg-[#1E1E20] flex flex-col items-center py-2 text-white">
            <p className="text-lg">{hour}</p>
            <img className="w-10 h-10 object-contain" src={iconPath} alt="icon"></img>
            <p>{Math.round(hourlyWeatherData.temp)}°</p>
        </div>
    );
}