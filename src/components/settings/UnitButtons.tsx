import { TemperatureUnit } from "@/types/WeatherTypes";
import { ACTIVE_TEMPLATE, BASE_TEMPLATE, NOT_ACTIVE_TEMPLATE } from "./ButtonStyles";

interface UnitButtonsTypes{
    unit:TemperatureUnit;
    unitSetter:(unit:"C"|"K"|"F")=>void;
}

export function UnitButtons({unitSetter,unit}:UnitButtonsTypes){

    return(
        
        <div className="grid grid-cols-3 gap-3">

            <button className={`${BASE_TEMPLATE} ${unit === "C" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("C")}>Celcius</button>
            <button className={`${BASE_TEMPLATE} ${unit === "F" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("F")} >Fahrenheit</button>
            <button className={`${BASE_TEMPLATE} ${unit === "K" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>unitSetter("K")}>Kelvin</button>
        </div>
    )
}   