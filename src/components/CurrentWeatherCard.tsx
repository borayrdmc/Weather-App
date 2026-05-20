import { CurrentWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

interface CurrentWeatherCardTypes{
    currentWeatherData:CurrentWeatherTypes;
    onClickFunction:(bool:boolean)=>void;
    unit:TemperatureUnit;
}

export default function CurrentWeatherCard({currentWeatherData,onClickFunction,unit}:CurrentWeatherCardTypes){

    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

    const iconPath = WeatherIconSwitcher(currentWeatherData.weather[0].icon, currentWeatherData.weather[0].id);

    return(

        <div onClick={()=>onClickFunction(true)} className="w-full max-w-4xl flex flex-row flex-wrap justify-between rounded-2xl p-5 cursor-pointer transition-all duration-200 backdrop-blur-md shadow-sm border border-slate-200/50 hover:border-slate-300/80 bg-white/70 dark:border dark:border-white/8 dark:hover:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70">

            <div className="flex flex-row items-center gap-5">

                <img className="w-40 h-40 object-contain" src={iconPath} alt="current weather image"></img>

                <div className="flex flex-row items-center">
                    <p className="text-7xl font-bold leading-none p-0">{UnitConverter(currentWeatherData.temp,unit)}</p>

                    <div className="flex flex-col">
                        {unit !== "K" && <p className="text-5xl font-bold leading-none">°</p>}
                        <p className="mx-2">{unit}</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-start text-slate-700 dark:text-slate-100">
                    <p className="text-lg">UV Index: {currentWeatherData.uvi}</p>
                    <p className="text-lg">Wind Speed: {currentWeatherData.wind_speed} m/s</p>
                    <p className="text-lg">Humidity: {currentWeatherData.humidity}%</p>
                    <p className="text-lg">Feels Like: {UnitConverter(currentWeatherData.feels_like,unit)}°{unit}</p>
                </div>
            </div>

            <div className="flex flex-col text-right">
                <p className="font-bold text-2xl">Daily Weather Forecast</p>
                <p className="text-lg">{dayName}</p>
                <p className="text-lg capitalize">{currentWeatherData.weather[0].description}</p>
            </div>
        </div>
    );
}