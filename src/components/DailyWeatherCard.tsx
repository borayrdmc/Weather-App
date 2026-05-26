import { DailyWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

interface DailyWeatherCardTypes{
    dailyWeatherData:DailyWeatherTypes;
    day:string;
    unit:TemperatureUnit;
}

export default function DailyWeatherCard({dailyWeatherData,day,unit}:DailyWeatherCardTypes){

    const iconPath = WeatherIconSwitcher(dailyWeatherData.weather[0].icon, dailyWeatherData.weather[0].id);

    return(
        <>
            <div className="rounded-lg flex flex-col items-center py-1 gap-1 backdrop-blur-md shadow-sm border border-slate-200/50 bg-white/70 dark:border-white/8 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70">
                <p className="text-lg">{day}</p>
                <img className="w-10 h-10 sm:w-15 sm:h-15 object-contain" src={iconPath} alt="weather-icon"/>
                <p>{UnitConverter(dailyWeatherData.temp.max,unit)}{unit!=="K" && <span>°</span>} <span className="text-gray-700 dark:text-gray-400">{UnitConverter(dailyWeatherData.temp.min,unit)}{unit!=="K" && <span>°</span>}</span></p>
            </div>
        </>
    );
}   