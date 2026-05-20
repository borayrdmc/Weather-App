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
        
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-500/10 backdrop-blur-sm dark:bg-black/50 dark:backdrop-blur-sm" onClick={()=>onClickFunction(false)}>

            <div className="relative w-full max-w-5xl flex flex-col items-center p-4 rounded-2xl overflow-hidden backdrop-blur-md shadow-sm border border-slate-200/50 bg-white dark:shadow-lg dark:border-none dark:shadow-gray-500/15 dark:bg-[#1E1F20]" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-1 right-3 cursor-pointer text-xl font-semibold transition-colors duration-200 text-slate-900 hover:text-slate-600 dark:text-gray-400 dark:hover:text-white" onClick={() => onClickFunction(false)}>✕</button>
                <CurrentWeatherCardModal currentWeatherData={currentWeatherData} unit={unit}/>
                <WeatherGraph data={hourlyWeatherData}/>
                <HourlyWeatherCardGrid hourlyWeatherData={hourlyWeatherData} timezone={timezone} unit={unit} />
            </div>
        </div>
    );
}   