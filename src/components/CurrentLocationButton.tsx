import { useLanguage } from "@/contexts/LanguageContext";
import { FaMapMarkerAlt } from "react-icons/fa";

export function CurrentLocationButton({onClickFunction}:{onClickFunction:()=>void}){
    
    const { languageDictionary } = useLanguage();
    
    return(
        
        <button 
            onClick={onClickFunction} 
            className="flex flex-row items-center gap-2 px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer border shadow-sm border-slate-200/50 hover:border-slate-300/80 bg-white/70 text-slate-900 dark:text-slate-200 dark:border-white/8 dark:hover:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70">

            <FaMapMarkerAlt className="text-slate-900 dark:text-slate-200"/><span className="text-sm">{languageDictionary.search.currentlocationbutton}</span>
        </button>
    )
}