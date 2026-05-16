import { HourlyWeatherTypes } from "@/types/WeatherTypes";
import { HourlyWeatherCard } from "./HourlyWeatherCard";

export function HourlyWeatherCardGrid({hourlyWeatherData}:{hourlyWeatherData:HourlyWeatherTypes[]}){

    const hourlyData=hourlyWeatherData.slice(0,12);

    const HourlyWeatherGridItems= hourlyData.map((data,index)=>{

        const date = new Date(data.dt * 1000);
        const formattedHour = date.toLocaleTimeString("tr-TR", {hour: "2-digit",minute: "2-digit",});

            return(
                <HourlyWeatherCard key={data.dt} hourlyWeatherData={data} hour={formattedHour}/>
            );
        }
    )

    return(

        <div className="w-full max-w-5xl">
            <div className="grid grid-cols-12 items-center">
                {HourlyWeatherGridItems}
            </div>
        </div>
    );
}