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

    const isNextDisabled = startIndex+24>=hourlyWeatherData.length;
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

    const hourlyData=hourlyWeatherData.slice(startIndex,12+startIndex);

    const HourlyWeatherGridItems= hourlyData.map((data,index)=>{

        const date = new Date(data.dt * 1000);
        const formattedHour = date.toLocaleTimeString("tr-TR", {hour: "2-digit",minute: "2-digit", timeZone:timezone});

            return(
                <HourlyWeatherCard key={data.dt} hourlyWeatherData={data} hour={formattedHour} unit={unit}/>
            );
        }
    )

    return(

        <div className="w-full max-w-5xl flex flex-row justify-center items-center">

            <button className="h-fit text-2xl cursor-pointer text-gray-700 hover:text-gray-800 dark:hover:text-white dark:text-gray-400" onClick={prevSlide} disabled={isPrevDisabled}>
                <GoChevronLeft/>
            </button>

            <div className="flex-1 grid grid-cols-12 items-center">
                {HourlyWeatherGridItems}
            </div>

            <button className="h-fit text-2xl cursor-pointer text-gray-700 hover:text-gray-800 dark:hover:text-white dark:text-gray-400" onClick={nextSlide} disabled={isNextDisabled} >
                <GoChevronRight/>
            </button>

        </div>
    );
}