import { useLanguage } from "@/contexts/LanguageContext";
import { CurrentWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { UnitConverter } from "@/utils/UnitConverter";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

interface CurrentWeatherCardModalTypes{
    currentWeatherData:CurrentWeatherTypes;
    unit:TemperatureUnit;
}

export default function CurrentWeatherCardModal({currentWeatherData,unit}:CurrentWeatherCardModalTypes){

    const iconPath = WeatherIconSwitcher(currentWeatherData.weather[0].icon, currentWeatherData.weather[0].id);
    const {languageDictionary,language} = useLanguage();

    const dayName = new Date().toLocaleDateString(language, { weekday: "long" });
    
    return(

        <div className="w-full max-w-5xl flex flex-row flex-wrap justify-between p-5 bg-transparent text-slate-900 dark:text-slate-200">

            <div className="flex flex-row items-center gap-5">

                <img className="w-30 h-30 object-contain" src={iconPath} alt="current weather image"></img>

                <div className="flex flex-row items-center">
                    <p className="text-6xl font-bold leading-none p-0">{UnitConverter(Math.round(currentWeatherData.temp),unit)}</p>

                    <div className="flex flex-col">
                        <p className="text-4xl font-bold leading-none">°</p>
                        <p className="mx-2">{unit}</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-start text-slate-700 dark:text-slate-200">
                    <p className="text-lg">{languageDictionary.currentweather.uv_index}: {currentWeatherData.uvi}</p>
                    <p className="text-lg">{languageDictionary.currentweather.wind_speed}: {currentWeatherData.wind_speed} m/s</p>
                    <p className="text-lg">{languageDictionary.currentweather.humidity}: {currentWeatherData.humidity}%</p>
                    <p className="text-lg">{languageDictionary.currentweather.feels_like}: {UnitConverter(currentWeatherData.feels_like,unit)}°{unit}</p>
                </div>
            </div>

            <div className="flex flex-col items-end ml-auto">
                <p className="font-bold text-2xl">{languageDictionary.currentweather.cardtitlehourly}</p>
                <p className="text-lg">{dayName}</p>
                <p className="text-lg capitalize">{currentWeatherData.weather[0].description}</p>
            </div>
        </div>
    );
}