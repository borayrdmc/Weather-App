"use client";

import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import DailyWeatherCardGrid from "@/components/DailyWeatherCardGrid";
import SearchBox from "@/components/SearchBox";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { useState } from "react";

export default function page(){

    const [weatherData,setWeatherData] = useState<WeatherDataTypes|null>(null);

    return(

        <div className="w-full min-h-screen bg-[#131314] flex flex-col items-center justify-center gap-6 p-4">
            <SearchBox setWeatherOnSearch={setWeatherData}></SearchBox>
            {weatherData && <CurrentWeatherCard currentWeatherData={weatherData.current}/>}
            {weatherData && <DailyWeatherCardGrid dailyWeatherData={weatherData.daily}/>}
        </div>
    );
}