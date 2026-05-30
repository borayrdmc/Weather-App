import { useEffect } from "react";
import { UnitButtons } from "./UnitButtons";
import { TemperatureUnit } from "@/types/WeatherTypes";
import { ThemeButtons } from "./ThemeButtons";
import { LanguageButtons } from "./LanguageButtons";
import { useLanguage } from "@/contexts/LanguageContext";

interface SettingsTypes{
    onClickFunction:(bool:boolean)=>void;
    unitSetter:(unit:"C"|"K"|"F")=>void;
    unit:TemperatureUnit;
    theme:string|undefined;
    setTheme:(theme: string)=>void;
}


export function SettingsPage({onClickFunction,unitSetter,unit,theme,setTheme}:SettingsTypes){

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

    const {languageDictionary,language} = useLanguage();

    return(

        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md bg-slate-500/10 dark:bg-black/50 " onClick={()=>onClickFunction(false)}>
        
            <div className="relative flex flex-col gap-4 p-5 items-center rounded-lg border bg-slate-100 shadow-sm border-slate-200/50 dark:border dark:bg-[#131314] dark:shadow-gray-700/15 dark:border-white/8" onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-2 right-4  cursor-pointer text-xl font-semibold transition-colors duration-200 text-gray-700 hover:text-slate-500 dark:text-gray-400 dark:hover:text-white" onClick={()=>onClickFunction(false)}>✕</button>

                <p className="font-medium text-xl">{languageDictionary.settings.settings}</p>
                <UnitButtons unitSetter={unitSetter} unit={unit}/>
                <ThemeButtons theme={theme} themeSetter={setTheme}/>
                <LanguageButtons/>
                
            </div>
        </div>
    );
}