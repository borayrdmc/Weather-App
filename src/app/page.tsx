"use client";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import SearchBox from "@/components/SearchBox";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { useState } from "react";

export default function page(){

    const [weatherData,setWeatherData] = useState<WeatherDataTypes|null>(null);

    return(
        <>
            <SearchBox setWeatherOnSearch={setWeatherData}></SearchBox>
            {weatherData && <CurrentWeatherCard currentWeatherData={weatherData.current}/>}
        </>
    );
}