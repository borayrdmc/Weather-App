import { CurrentWeatherTypes } from "@/types/WeatherTypes";
const BASE_URL = "https://openweathermap.org/img/wn"

export default function CurrentWeatherCard({currentWeatherData}:{currentWeatherData: CurrentWeatherTypes}){

    return(
        <>
            <div className="border-4px flex flex-row justify-between bg-gray-600"> {/*Main container*/}

                <div className="flex flex-row justfiy-center items-center"> {/*Left side */}
                    
                    <img src={`${BASE_URL}/${currentWeatherData.weather[0].icon}@2x.png`} alt="current weather image"></img>
                    <p>{Math.round(currentWeatherData.temp)}°C</p>
                    
                    <div className="flex flex-col justify-center items-center"> {/*Minor informations*/}
                        <p>UV Index: {currentWeatherData.uvi}</p>
                        <p>Wind Speed: {currentWeatherData.wind_speed} m/s</p>
                        <p>Humidity: {currentWeatherData.humidity}%</p>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center"> {/*Right side*/}
                    <p>Weather Forecast</p>
                    <p>Day</p>
                    <p>{currentWeatherData.weather[0].description}</p>
                </div>

            </div>
        </>
    );
}