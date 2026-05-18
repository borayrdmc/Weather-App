import { FaMapMarkerAlt } from "react-icons/fa";

export function CurrentLocationButton({onClickFunction}:{onClickFunction:()=>void}){
    
    return(
        
        <button 
            onClick={onClickFunction} 
            className="flex flex-row items-center gap-2 px-6 py-3 bg-[#1E1F20] hover:bg-[#252729] text-white rounded-full transition-all active:scale-95 cursor-pointer">

            <FaMapMarkerAlt className="text-blue-500"/><span className="text-sm">Use current location</span>
        </button>
    )
}