import { FaMapMarkerAlt } from "react-icons/fa";

export function CurrentLocationButton({onClickFunction}:{onClickFunction:()=>void}){
    
    return(
        
        <button 
            onClick={onClickFunction} 
            className="flex flex-row items-center gap-2 px-6 py-3 rounded-full transition-all active:scale-95 cursor-pointer bg-slate-400 text-black dark:bg-[#1E1F20] dark:hover:bg-[#252729] dark:text-white">

            <FaMapMarkerAlt className="text-blue-500"/><span className="text-sm">Use current location</span>
        </button>
    )
}