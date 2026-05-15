import { DailyWeatherTypes, WeatherDataTypes } from "@/types/WeatherTypes";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

export default function DailyWeatherCard({dailyWeatherData,day}:{dailyWeatherData:DailyWeatherTypes,day:string}){

    const iconPath = WeatherIconSwitcher(dailyWeatherData.weather[0].icon, dailyWeatherData.weather[0].id);

    return(
        <>
            <div className="rounded-lg bg-[#1E1E20] flex flex-col items-center py-2 text-white">
                <p className="text-lg">{day}</p>
                <img className="w-15 h-15 object-contain" src={iconPath} alt="weather-icon"/>
                <p>{Math.round(dailyWeatherData.temp.max)}° {Math.round(dailyWeatherData.temp.min)}°</p>
            </div>
        </>
    );
}