import { CurrentWeatherModalTypes } from "@/types/CurrentWeatherModalTypes";
import CurrentWeatherCardModal from "./CurrentWeatherCardModal";
import { HourlyWeatherCardGrid } from "./HourlyWeatherCardGrid";

export function CurrentWeatherModal({currentWeatherData,hourlyWeatherData,onClickFunction}:CurrentWeatherModalTypes){

    return(
        
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-2" onClick={()=>onClickFunction(false)}>

            <div className="relative w-full max-w-6xl bg-gray-400 flex flex-col items-center justify-center" onClick={(e)=>e.stopPropagation()}>

                <div className="cursor-pointer top-2 right-2 p-2 text-white">
                    <button onClick={()=>onClickFunction(false)}>✕</button>
                </div>

                <CurrentWeatherCardModal currentWeatherData={currentWeatherData}/>
                <HourlyWeatherCardGrid hourlyWeatherData={hourlyWeatherData} />
            </div>
        </div>
    );
}   