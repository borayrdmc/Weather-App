import { CurrentWeatherModalTypes } from "@/types/modal types/CurrentWeatherModalTypes";
import CurrentWeatherCardModal from "./CurrentWeatherCardModal";
import { HourlyWeatherCardGrid } from "./HourlyWeatherCardGrid";
import { WeatherGraph } from "./WeatherGraph";

export function CurrentWeatherModal({currentWeatherData,hourlyWeatherData,onClickFunction}:CurrentWeatherModalTypes){

    return(
        
        <div className="fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center" onClick={()=>onClickFunction(false)}>

            <div className="relative w-full max-w-5xl bg-[#1E1F20] flex flex-col items-center p-5 rounded-2xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-1 right-3 text-gray-400 cursor-pointer hover:text-white text-xl font-semibold transition-colors duration-200" onClick={() => onClickFunction(false)}>✕</button>
                <CurrentWeatherCardModal currentWeatherData={currentWeatherData}/>
                <WeatherGraph data={hourlyWeatherData}/>
                <HourlyWeatherCardGrid hourlyWeatherData={hourlyWeatherData} />
            </div>
        </div>
    );
}   