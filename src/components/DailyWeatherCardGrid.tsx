import DailyWeatherCard from "./DailyWeatherCard";
import { DailyWeatherGridTypes } from "@/types/DailyWeatherGridTypes";

export default function DailyWeatherCardGrid({dailyWeatherData,timezone,unit}:DailyWeatherGridTypes){

    const dailyData = dailyWeatherData.slice(0,8);

    const DailyWeatherGridItems = dailyData.map((data,index) =>{

        const date = new Date(data.dt*1000);
        
        const dayName = date.toLocaleDateString("en-US", {weekday: "short", timeZone: timezone});

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