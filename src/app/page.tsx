"use client";

import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import { CurrentWeatherModal } from "@/components/modal/WeatherModal";
import DailyWeatherCardGrid from "@/components/DailyWeatherCardGrid";
import SearchBox from "@/components/SearchBox";
import { CoordinateTypes } from "@/types/CoordinateTypes";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { StartupPage } from "./StartupPage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { OnClickCurrentLocation } from "@/utils/OnClickCurrentLocation";


export default function page(){

    const [weatherData,setWeatherData] = useState<WeatherDataTypes|null>(null);
    const [locationData,setLocationData] = useState<CoordinateTypes|null>(null);
    const [modalState,setModalState] = useState(false);
    const [unit,setUnit] = useState<"C"|"K"|"F">("C");

    if(!weatherData){
        return(
            <StartupPage setWeatherData={setWeatherData} setLocationData={setLocationData}/>
        );
    }

    return(

        <div className="w-full min-h-screen bg-[#131314] flex flex-col items-center justify-between gap-6 p-4 overflow-x-hidden">

            <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="w-full max-w-4xl flex flex-col items-center gap-4 grow justify-center">

                <div className="w-full max-w-4xl flex flex-row justify-between items-center">
                    {locationData && <div className="font-bold text-2xl text-white ml-1 -mb-1">Location: {locationData.name}, {locationData.country}</div>}
                    <div className="flex items-center gap-2"><SearchBox setWeatherOnSearch={setWeatherData} setLocationOnSearch={setLocationData}></SearchBox><FaMapMarkerAlt onClick={()=>OnClickCurrentLocation({setWeatherData,setLocationData})} className="text-blue-500 cursor-pointer text-xl"/></div>
                </div>
                
                {weatherData && <CurrentWeatherCard onClickFunction={setModalState} currentWeatherData={weatherData.current} unit={unit}/>}
                {weatherData && modalState && <CurrentWeatherModal onClickFunction={setModalState} weatherData={weatherData}/>}
                {weatherData && <DailyWeatherCardGrid dailyWeatherData={weatherData.daily} timezone={weatherData.timezone}/>}
            </div>

            <Footer/>
        </div>
    );
}