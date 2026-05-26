import { useLanguage } from "@/contexts/LanguageContext";
import { CurrentWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

interface CurrentWeatherCardTypes{
    currentWeatherData:CurrentWeatherTypes;
    onClickFunction:(bool:boolean)=>void;
    unit:TemperatureUnit;
}

export default function CurrentWeatherCard({currentWeatherData,onClickFunction,unit}:CurrentWeatherCardTypes){

    const iconPath = WeatherIconSwitcher(currentWeatherData.weather[0].icon, currentWeatherData.weather[0].id);
    const {languageDictionary,language} = useLanguage();

    const dayName = new Date().toLocaleDateString(language, { weekday: "long" });

    return(

        <div onClick={()=>onClickFunction(true)} className="w-full max-w-4xl flex flex-col gap-2 lg:flex-row justify-between p-5 rounded-2xl cursor-pointer transition-all duration-200 backdrop-blur-md shadow-sm border border-slate-200/50 hover:border-slate-300/80 bg-white/70 dark:border dark:border-white/8 dark:hover:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70">

            <p className="text-xl text-center lg:hidden">{dayName} {languageDictionary.currentweather.cardtitledaily}</p>
            
            <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-5">

                <div className="flex flex-row gap-10 lg:gap-5">
                    <img className="w-30 h-30 lg:w-40 lg:h-40 object-contain" src={iconPath} alt="current weather image"></img>

                    <div className="flex flex-row items-center justify-center">
                        <p className="text-7xl lg:text-7xl font-bold leading-none p-0">{UnitConverter(currentWeatherData.temp,unit)}</p>

                        <div className="flex flex-col">
                            {unit !== "K" && <p className="text-6xl lg:text-5xl font-bold leading-none">°</p>}
                            <p className="mx-2">{unit}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:justify-center text-slate-700 dark:text-slate-100">
                    <p className="text-lg">{languageDictionary.currentweather.uv_index}: {currentWeatherData.uvi}</p>
                    <p className="text-lg">{languageDictionary.currentweather.wind_speed}: {currentWeatherData.wind_speed} m/s</p>
                    <p className="text-lg">{languageDictionary.currentweather.humidity}: {currentWeatherData.humidity}%</p>
                    <p className="text-lg">{languageDictionary.currentweather.feels_like}: {UnitConverter(currentWeatherData.feels_like,unit)}°{unit}</p>
                </div>
            </div>

            <div className="hidden lg:flex flex-col text-right">
                <p className="font-bold text-2xl">{languageDictionary.currentweather.cardtitledaily}</p>
                <p className="text-lg">{dayName}</p>
                <p className="text-lg capitalize">{currentWeatherData.weather[0].description}</p>
            </div>
        </div>
    );
}