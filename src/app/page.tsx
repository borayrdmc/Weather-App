"use client";

import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import { CurrentWeatherModal } from "@/components/modal components/WeatherModal";
import DailyWeatherCardGrid from "@/components/DailyWeatherCardGrid";
import SearchBox from "@/components/SearchBox";
import { CoordinateTypes } from "@/types/CoordinateTypes";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { useState } from "react";
import { Footer } from "@/components/Footer";


export default function page(){

    const [weatherData,setWeatherData] = useState<WeatherDataTypes|null>(null);
    const [locationData,setLocationData] = useState<CoordinateTypes|null>(null);
    const [modalState,setModalState] = useState(false);

    return(

        <div className="w-full min-h-screen bg-[#131314] flex flex-col items-center justify-between gap-6 p-4">

            <div className="w-full max-w-4xl flex flex-col items-center gap-6 grow justify-center">

                <div className="w-full max-w-4xl flex flex-row justify-between items-center">
                    {locationData && <span className="font-bold text-2xl text-white ml-1">Location: {locationData.name}, {locationData.country}</span>}
                    <SearchBox setWeatherOnSearch={setWeatherData} setLocationOnSearch={setLocationData}></SearchBox>
                </div>
                
                {weatherData && <CurrentWeatherCard onClickFunction={setModalState} currentWeatherData={weatherData.current}/>}
                {weatherData && modalState && <CurrentWeatherModal onClickFunction={setModalState} weatherData={weatherData}/>}
                {weatherData && <DailyWeatherCardGrid dailyWeatherData={weatherData.daily} timezone={weatherData.timezone}/>}
            </div>

            <Footer/>
        </div>
    );
}