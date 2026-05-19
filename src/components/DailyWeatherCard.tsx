import { DailyWeatherCardTypes } from "@/types/DailyWeatherCardTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

export default function DailyWeatherCard({dailyWeatherData,day,unit}:DailyWeatherCardTypes){

    const iconPath = WeatherIconSwitcher(dailyWeatherData.weather[0].icon, dailyWeatherData.weather[0].id);

    return(
        <>
            <div className="rounded-lg bg-[#1E1E20] flex flex-col items-center py-2 text-white">
                <p className="text-lg">{day}</p>
                <img className="w-15 h-15 object-contain" src={iconPath} alt="weather-icon"/>
                <p>{UnitConverter(dailyWeatherData.temp.max,unit)} {unit!=="K" && <span>°</span>} <span className="text-gray-400">{UnitConverter(dailyWeatherData.temp.min,unit)} {unit!=="K" && <span>°</span>}</span></p>
            </div>
        </>
    );
}