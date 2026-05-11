import { DailyWeatherTypes } from "@/types/WeatherTypes";
import DailyWeatherCard from "./DailyWeatherCard";

export default function DailyWeatherCardGrid({dailyWeatherData}:{dailyWeatherData:DailyWeatherTypes[]}){

    const dailyData = dailyWeatherData.slice(0,8);

    const DailyWeatherGridItems = dailyData.map((data,index) =>{

        const date = new Date(); //Get todays date
        date.setDate(date.getDate() + index); //Add index days to todays date and write it to date

        const dayName = new Intl.DateTimeFormat("en-US",{weekday: "short"}).format(date); //Get day name

            return(
                <DailyWeatherCard key={index} dailyWeatherData={data} day={dayName}/> 
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