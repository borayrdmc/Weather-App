import { DailyWeatherTypes, WeatherDataTypes } from "@/types/WeatherTypes";
const BASE_URL = "https://openweathermap.org/img/wn"

export default function DailyWeatherCard({dailyWeatherData,day}:{dailyWeatherData:DailyWeatherTypes,day:string}){

    return(
        <>
            <div className="border-2 flex flex-col items-center justify-center">
                <p>{day}</p>
                <img src={`${BASE_URL}/${dailyWeatherData.weather[0].icon}@2x.png`} alt="weather-icon"/>
                <p>{Math.round(dailyWeatherData.temp.max)}° {Math.round(dailyWeatherData.temp.min)}°</p>
            </div>
        </>
    );
}