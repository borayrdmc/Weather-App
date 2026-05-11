import { CurrentWeatherTypes } from "@/types/WeatherTypes";
const BASE_URL = "https://openweathermap.org/img/wn"

export default function CurrentWeatherCard({currentWeatherData}:{currentWeatherData: CurrentWeatherTypes}){

    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

    return(

        <div className="rounded-2xl bg-[#1E1F20] w-full max-w-4xl flex flex-row justify-between p-5 text-white">

            <div className="flex flex-row items-center gap-5">

                <img className="w-50 h-50 object-contain" src={`${BASE_URL}/${currentWeatherData.weather[0].icon}@2x.png`} alt="current weather image"></img>

                <div className="flex flex-row items-center">
                    <p className="text-7xl font-bold leading-none p-0">{Math.round(currentWeatherData.temp)}</p>

                    <div className="flex flex-col">
                        <p className="text-5xl font-bold leading-none">°</p>
                        <p className="p mx-2">C</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-start">
                    <p className="text-lg">UV Index: {currentWeatherData.uvi}</p>
                    <p className="text-lg">Wind Speed: {currentWeatherData.wind_speed} m/s</p>
                    <p className="text-lg">Humidity: {currentWeatherData.humidity}%</p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="font-bold text-2xl">Weather Forecast</p>
                <p className="text-lg">{dayName}</p>
                <p className="text-lg">{currentWeatherData.weather[0].description}</p>
            </div>
        </div>
    );
}