import { TemperatureUnit } from "@/types/WeatherTypes";

interface UnitButtonsTypes{
    unit:TemperatureUnit;
    unitSetter:(unit:"C"|"K"|"F")=>void;
}

export function UnitButtons({unitSetter,unit}:UnitButtonsTypes){

    const BASE_TEMPLATE="p-2 rounded-md cursor-pointer transition-all duration-200 text-center"
    const NOT_ACTIVE_TEMPLATE ="bg-[#1E1F20] text-white hover:bg-[#252729]"
    const ACTIVE_TEMPLATE="bg-white"

    return(
        
        <div className="grid grid-cols-3 gap-3">

            <button className={`${BASE_TEMPLATE} ${unit === "C" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("C")}>Celcius</button>
            <button className={`${BASE_TEMPLATE} ${unit === "F" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("F")} >Fahrenheit</button>
            <button className={`${BASE_TEMPLATE} ${unit === "K" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("K")}>Kelvin</button>
        </div>
    )
}   