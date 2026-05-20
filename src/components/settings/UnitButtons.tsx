import { TemperatureUnit } from "@/types/WeatherTypes";

interface UnitButtonsTypes{
    unit:TemperatureUnit;
    unitSetter:(unit:"C"|"K"|"F")=>void;
}

export function UnitButtons({unitSetter,unit}:UnitButtonsTypes){

    const BASE_TEMPLATE="p-2 rounded-md cursor-pointer transition-all duration-200 text-center transition-colors duration-300 ease-in-out"
    const NOT_ACTIVE_TEMPLATE ="dark:border dark:text-slate-200 dark:border-white/8 dark:hover:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70 shadow-sm border border-slate-200/50 hover:border-slate-300/80 bg-white/70" 
    const ACTIVE_TEMPLATE="bg-slate-200 text-slate-900 border-slate-300/80 shadow-md dark:bg-white/90 dark:text-slate-900"

    return(
        
        <div className="grid grid-cols-3 gap-3">

            <button className={`${BASE_TEMPLATE} ${unit === "C" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("C")}>Celcius</button>
            <button className={`${BASE_TEMPLATE} ${unit === "F" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("F")} >Fahrenheit</button>
            <button className={`${BASE_TEMPLATE} ${unit === "K" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("K")}>Kelvin</button>
        </div>
    )
}   