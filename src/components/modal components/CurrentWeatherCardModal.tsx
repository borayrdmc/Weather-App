import { CurrentWeatherTypes } from "@/types/WeatherTypes";
import { WeatherIconSwitcher } from "@/utils/WeatherIconSwitcher";

export default function CurrentWeatherCardModal({currentWeatherData}:{currentWeatherData:CurrentWeatherTypes}){

    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

    const iconPath = WeatherIconSwitcher(currentWeatherData.weather[0].icon, currentWeatherData.weather[0].id);

    return(

        <div className="bg-[#1E1F20] w-full max-w-5xl flex flex-row justify-between p-5 text-white">

            <div className="flex flex-row items-center gap-5">

                <img className="w-30 h-30 object-contain" src={iconPath} alt="current weather image"></img>

                <div className="flex flex-row items-center">
                    <p className="text-6xl font-bold leading-none p-0">{Math.round(currentWeatherData.temp)}</p>

                    <div className="flex flex-col">
                        <p className="text-4xl font-bold leading-none">°</p>
                        <p className="mx-2">C</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-start">
                    <p className="text-lg">UV Index: {currentWeatherData.uvi}</p>
                    <p className="text-lg">Wind Speed: {currentWeatherData.wind_speed} m/s</p>
                    <p className="text-lg">Humidity: {currentWeatherData.humidity}%</p>
                    <p className="text-lg">Feels Like: {Math.round(currentWeatherData.feels_like)}°C</p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="font-bold text-2xl">Hourly Weather Forecast</p>
                <p className="text-lg">{dayName}</p>
                <p className="text-lg capitalize">{currentWeatherData.weather[0].description}</p>
            </div>
        </div>
    );
}