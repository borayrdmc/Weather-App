import { DailyWeatherTypes, WeatherDataTypes } from "@/types/WeatherTypes";
const BASE_URL = "https://openweathermap.org/img/wn"

export default function DailyWeatherCard({dailyWeatherData,day}:{dailyWeatherData:DailyWeatherTypes,day:string}){

    return(
        <>
            <div className="rounded-lg bg-[#1E1E20] flex flex-col items-center py-2 text-white">
                <p className="text-lg">{day}</p>
                <img className="w-20 h-20 object-contain" src={`${BASE_URL}/${dailyWeatherData.weather[0].icon}@2x.png`} alt="weather-icon"/>
                <p>{Math.round(dailyWeatherData.temp.max)}° {Math.round(dailyWeatherData.temp.min)}°</p>
            </div>
        </>
    );
}