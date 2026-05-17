import { DailyWeatherTypes } from "@/types/WeatherTypes";
import DailyWeatherCard from "./DailyWeatherCard";

export default function DailyWeatherCardGrid({dailyWeatherData,timezone}:{dailyWeatherData:DailyWeatherTypes[],timezone:string}){

    const dailyData = dailyWeatherData.slice(0,8);

    const DailyWeatherGridItems = dailyData.map((data,index) =>{

        const date = new Date(data.dt*1000);
        
        const dayName = date.toLocaleDateString("en-US", {weekday: "short", timeZone: timezone});

            return(
                <DailyWeatherCard key={data.dt} dailyWeatherData={data} day={dayName}/> 
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