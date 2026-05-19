import { useEffect } from "react";
import { UnitButtons } from "./settings/UnitButtons";
import { TemperatureUnit } from "@/types/WeatherTypes";

interface SettingsTypes{
    onClickFunction:(bool:boolean)=>void;
    unitSetter:(unit:"C"|"K"|"F")=>void;
    unit:TemperatureUnit;
}

export function Settings({onClickFunction,unitSetter,unit}:SettingsTypes){

    useEffect(()=>{
            
        const handleKeyEvent= (e: KeyboardEvent)=>{
            if(e.key==="Escape"){
                onClickFunction(false);
            }
        };

        window.addEventListener("keydown",handleKeyEvent);

        return()=>{
            window.removeEventListener("keydown",handleKeyEvent);
        };

    },[onClickFunction]);



    return(

        <div className="fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center" onClick={()=>onClickFunction(false)}>
        
            <div className="relative w-full max-w-lg flex flex-col items-center p-4 bg-amber-100 dark:bg-[#131314]" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-2 right-4  cursor-pointer text-xl font-semibold transition-colors duration-200 text-gray-700 dark:text-gray-400 dark:hover:text-white" onClick={()=>onClickFunction(false)}>✕</button>
                <UnitButtons unitSetter={unitSetter} unit={unit}/>
            </div>
        </div>


    );
}