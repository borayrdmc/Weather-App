import CurrentWeatherCardModal from "./CurrentWeatherCardModal";
import { HourlyWeatherCardGrid } from "./HourlyWeatherCardGrid";
import { WeatherGraph } from "./WeatherGraph";
import { useEffect } from "react";
import { TemperatureUnit, WeatherDataTypes } from "@/types/WeatherTypes";

interface CurrentWeatherModalTypes{
    weatherData:WeatherDataTypes;
    onClickFunction:(bool:boolean)=>void;
    unit:TemperatureUnit;
}

export function CurrentWeatherModal({weatherData,onClickFunction,unit}:CurrentWeatherModalTypes){

    const currentWeatherData= weatherData.current;
    const hourlyWeatherData= weatherData.hourly;
    const timezone=weatherData.timezone;

    useEffect(()=>{
        
        const handleKeyEvent= (e: KeyboardEvent)=>{
            if(e.key==="Escape"){
                onClickFunction(false);
            }
        };

        window.addEventListener("keydown",handleKeyEvent);

        return()=>{
            window.removeEventListener("keydown",handleKeyEvent);
        };

    },[onClickFunction]);

    return(
        
        <div className="fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center" onClick={()=>onClickFunction(false)}>

            <div className="relative w-full max-w-5xl bg-[#1E1F20] flex flex-col items-center p-6 rounded-2xl overflow-hidden shadow-lg shadow-gray-500/15 backdrop-blur-lg" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-2 right-4 text-gray-400 cursor-pointer hover:text-white text-xl font-semibold transition-colors duration-200" onClick={() => onClickFunction(false)}>✕</button>
                <CurrentWeatherCardModal currentWeatherData={currentWeatherData} unit={unit}/>
                <WeatherGraph data={hourlyWeatherData}/>
                <HourlyWeatherCardGrid hourlyWeatherData={hourlyWeatherData} timezone={timezone} unit={unit} />
            </div>
        </div>
    );
}   