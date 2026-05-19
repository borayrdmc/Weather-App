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
import { Settings } from "@/components/Settings";
import { IoSettingsOutline } from "react-icons/io5";

export default function page(){

    const [weatherData,setWeatherData] = useState<WeatherDataTypes|null>(null);
    const [locationData,setLocationData] = useState<CoordinateTypes|null>(null);

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isSettingsOpen,setIsSettingsOpen] = useState(false);
    
    const [unit,setUnit] = useState<"C"|"K"|"F">("C");

    if(!weatherData){
        return(
            <StartupPage setWeatherData={setWeatherData} setLocationData={setLocationData}/>
        );
    }

    return(

        <div className=" w-full min-h-screen flex flex-col items-center justify-between gap-6 p-4 overflow-x-hidden relative bg-white dark:bg-[#131314] ">

            <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="absolute top-3 right-6 cursor-pointer" onClick={()=>setIsSettingsOpen(true)}>⚙️</div>

            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-4 grow ">

                <div className="w-full max-w-4xl flex flex-row justify-between items-center">
                    {locationData && <div className="font-bold text-2xl ml-1 -mb-1 text-black dark:text-white">Location: {locationData.name}, {locationData.country}</div>}
                    <div className="flex items-center gap-2"><SearchBox setWeatherOnSearch={setWeatherData} setLocationOnSearch={setLocationData}></SearchBox><FaMapMarkerAlt onClick={()=>OnClickCurrentLocation({setWeatherData,setLocationData})} className="cursor-pointer text-xl text-black dark:text-white"/></div>
                </div>
                
                {weatherData && <CurrentWeatherCard currentWeatherData={weatherData.current} onClickFunction={setIsModalOpen} unit={unit}/>}

                {weatherData && isModalOpen && <CurrentWeatherModal weatherData={weatherData} onClickFunction={setIsModalOpen}  unit={unit}/>}
                {isSettingsOpen && <Settings onClickFunction={setIsSettingsOpen} unitSetter={setUnit} unit={unit}/>}

                {weatherData && <DailyWeatherCardGrid dailyWeatherData={weatherData.daily} timezone={weatherData.timezone} unit={unit}/>}
            </div>

            <Footer/>
        </div>
    );
}