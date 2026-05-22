import { DailyWeatherTypes, TemperatureUnit } from "@/types/WeatherTypes";
import DailyWeatherCard from "./DailyWeatherCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface DailyWeatherGridTypes{
    dailyWeatherData:DailyWeatherTypes[];
    timezone:string;
    unit:TemperatureUnit;
}

export default function DailyWeatherCardGrid({dailyWeatherData,timezone,unit}:DailyWeatherGridTypes){

    const {language} = useLanguage();
    
    const dailyData = dailyWeatherData.slice(0,8);

    const DailyWeatherGridItems = dailyData.map((data,index) =>{

        const date = new Date(data.dt*1000);
        
        const dayName = date.toLocaleDateString(language, {weekday: "short", timeZone: timezone});

            return(
                <DailyWeatherCard key={data.dt} dailyWeatherData={data} day={dayName} unit={unit}/> 
            );
        }
    )
    
    return(

        <div className="w-full max-w-4xl">

            <div className="grid grid-cols-8 gap-2 items-center">
                {DailyWeatherGridItems}
            </div>
        </div>
    );
}