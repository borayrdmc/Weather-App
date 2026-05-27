import { DailyWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import DailyWeatherCard from "./DailyWeatherCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";

interface DailyWeatherGridTypes{
    dailyWeatherData:DailyWeatherTypes[];
    timezone:string;
    unit:TemperatureUnit;
}

export default function DailyWeatherCardGrid({dailyWeatherData,timezone,unit}:DailyWeatherGridTypes){

    const {language} = useLanguage();
    
    const [startIndex,setStartIndex] = useState(0);
    const isNextDisabled = startIndex===4;
    const isPrevDisabled = startIndex===0;

    const nextSlide= ()=>{
        if (!isNextDisabled){
            setStartIndex((prev)=>prev+1);
        }
    }

    const prevSlide= ()=>{
        if (!isPrevDisabled){
            setStartIndex((prev)=>prev-1);
        }
    }
    
    const dailyData = dailyWeatherData.slice(startIndex,startIndex+8);

    const DailyWeatherGridItems = dailyData.map((data,index) =>{

        const date = new Date(data.dt*1000);
        
        const dayName = date.toLocaleDateString(language, {weekday: "short", timeZone: timezone});

            return(
                <DailyWeatherCard key={data.dt} dailyWeatherData={data} day={dayName} unit={unit}/> 
            );
        }
    )

    const mobileDailyData = dailyWeatherData.slice(startIndex,startIndex+4);

    const MobileDailyWeatherGridItems = mobileDailyData.map((data,index) =>{

        const date = new Date(data.dt*1000);
        
        const dayName = date.toLocaleDateString(language, {weekday: "short", timeZone: timezone});

            return(
                <DailyWeatherCard key={data.dt} dailyWeatherData={data} day={dayName} unit={unit}/> 
            );
        }
    )
    
    return(

        <div className="w-full max-w-4xl">

            <div className="flex sm:hidden flex-row justify-between items-center">
                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={prevSlide} disabled={isPrevDisabled}>
                    <GoChevronLeft/>
                </button>

                <div className="grid grid-cols-4 items-center gap-2 grow">
                    {MobileDailyWeatherGridItems}
                </div>

                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={nextSlide} disabled={isNextDisabled}>
                    <GoChevronRight/>
                </button>
            </div>
            
            <div className="hidden sm:grid grid-cols-8 gap-2 items-center">
                {DailyWeatherGridItems}
            </div>
        </div>
    );
}