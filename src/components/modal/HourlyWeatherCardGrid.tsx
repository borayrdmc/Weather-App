import { HourlyWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import { HourlyWeatherCard } from "./HourlyWeatherCard";
import { useState } from "react";
import { GoChevronRight,GoChevronLeft } from "react-icons/go";

interface HourlyWeatherCardTypes{
    hourlyWeatherData:HourlyWeatherTypes[];
    timezone:string;
    unit:TemperatureUnit;
}

export function HourlyWeatherCardGrid({hourlyWeatherData,timezone,unit}:HourlyWeatherCardTypes){

    const [startIndex,setStartIndex] = useState(0);

    const isNextDisabled = startIndex===24;
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

    const hourlyData=hourlyWeatherData.slice(startIndex,startIndex+12);

    const HourlyWeatherGridItems= hourlyData.map((data,index)=>{

        const date = new Date(data.dt * 1000);
        const formattedHour = date.toLocaleTimeString("tr-TR", {hour: "2-digit",minute: "2-digit", timeZone:timezone});

            return(
                <HourlyWeatherCard key={data.dt} hourlyWeatherData={data} hour={formattedHour} unit={unit}/>
            );
        }
    )

    const mobileHourlyData=hourlyWeatherData.slice(startIndex,startIndex+6);

    const MobileHourlyWeatherGridItems= mobileHourlyData.map((data,index)=>{

        const date = new Date(data.dt * 1000);
        const formattedHour = date.toLocaleTimeString("tr-TR", {hour: "2-digit",minute: "2-digit", timeZone:timezone});

            return(
                <HourlyWeatherCard key={data.dt} hourlyWeatherData={data} hour={formattedHour} unit={unit}/>
            );
        }
    )

    return(

        <div className="w-full max-w-5xl">

            <div className="hidden sm:flex flex-row justify-center items-center">
                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={prevSlide} disabled={isPrevDisabled}>
                    <GoChevronLeft/>
                </button>

                <div className="grid grid-cols-12 items-center grow">
                    {HourlyWeatherGridItems}
                </div>

                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={nextSlide} disabled={isNextDisabled} >
                    <GoChevronRight/>
                </button>
            </div>

            <div className="flex flex-row justify-center items-center sm:hidden">
                
                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={prevSlide} disabled={isPrevDisabled}>
                    <GoChevronLeft/>
                </button>

                <div className="flex sm:grid grid-cols-6 gap-2 items-center grow">
                    {MobileHourlyWeatherGridItems}
                </div>

                <button className="h-fit text-2xl cursor-pointer text-slate-900 hover:text-slate-600 dark:hover:text-white dark:text-gray-400" onClick={nextSlide} disabled={isNextDisabled} >
                    <GoChevronRight/>
                </button>
            </div>

        </div>
    );
}