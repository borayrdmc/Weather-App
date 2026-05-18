import { CurrentWeatherModalTypes } from "@/types/modal types/CurrentWeatherModalTypes";
import CurrentWeatherCardModal from "./CurrentWeatherCardModal";
import { HourlyWeatherCardGrid } from "./HourlyWeatherCardGrid";
import { WeatherGraph } from "./WeatherGraph";

export function CurrentWeatherModal({weatherData,onClickFunction}:CurrentWeatherModalTypes){

    const currentWeatherData= weatherData.current;
    const hourlyWeatherData= weatherData.hourly;
    const timezone=weatherData.timezone;

    return(
        
        <div className="fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center" onClick={()=>onClickFunction(false)}>

            <div className="relative w-full max-w-5xl bg-[#1E1F20] flex flex-col items-center p-6 rounded-2xl overflow-hidden shadow-lg shadow-gray-500/15 backdrop-blur-lg" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-1 right-4 text-gray-400 cursor-pointer hover:text-white text-xl font-semibold transition-colors duration-200" onClick={() => onClickFunction(false)}>✕</button>
                <CurrentWeatherCardModal currentWeatherData={currentWeatherData}/>
                <WeatherGraph data={hourlyWeatherData}/>
                <HourlyWeatherCardGrid hourlyWeatherData={hourlyWeatherData} timezone={timezone} />
            </div>
        </div>
    );
}   