import { HourlyWeatherTypes } from "@/types/WeatherTypes";
import { HourlyWeatherCard } from "./HourlyWeatherCard";
import { useState } from "react";
import { GoChevronRight,GoChevronLeft } from "react-icons/go";

export function HourlyWeatherCardGrid({hourlyWeatherData}:{hourlyWeatherData:HourlyWeatherTypes[]}){

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
        const formattedHour = date.toLocaleTimeString("tr-TR", {hour: "2-digit",minute: "2-digit",});

            return(
                <HourlyWeatherCard key={data.dt} hourlyWeatherData={data} hour={formattedHour}/>
            );
        }
    )

    return(

        <div className="w-full max-w-5xl flex flex-row justify-center items-center">

            <button className="h-fit text-gray-400 text-2xl cursor-pointer hover:text-white" onClick={prevSlide} disabled={isPrevDisabled}>
                <GoChevronLeft/>
            </button>

            <div className="flex-1 grid grid-cols-12 items-center">
                {HourlyWeatherGridItems}
            </div>

            <button className="h-fit text-gray-400 text-2xl cursor-pointer hover:text-white" onClick={nextSlide} disabled={isNextDisabled} >
                <GoChevronRight/>
            </button>

        </div>
    );
}