"use client";

import { useState } from "react";
import { SearchBoxTypes } from "@/types/SearchBoxTypes";
import { CityNameNormalizer } from "@/utils/CityNameNormalizer";
import { CombinedDataTypes } from "@/types/CombinedDataTypes";
import { cn } from "@/utils/TailwindMerge";
import toast from "react-hot-toast";

function SearchBox({setWeatherOnSearch,setLocationOnSearch,classname}: SearchBoxTypes){ //Searchbox takes a function as parameter and this function has to follow search box type rules

    const [cityNameInput,setCityNameInput]=useState("");
    const [isInputLoading,setIsInputLoading]=useState(false);

    const handleSearch= async ()=>{

        const input=cityNameInput;
        setCityNameInput(""); //Reset input 
        setIsInputLoading(true);

        try{

            const normalizedCityName = CityNameNormalizer(input);

            const response = await fetch(`/api/weather?city=${encodeURIComponent(normalizedCityName)}`); //Send a fetch request to api/weather router and has a city parameter for geocoding
            
            if(!response.ok){
                const errorData = await response.json();
                const error = new Error(errorData.message,errorData.statusCode) as any;
                error.statusCode = errorData.statusCode;
                throw error;
            }

            const data = await response.json() as CombinedDataTypes; //Fetch succesfull // Değiştir
            setWeatherOnSearch(data.weather); //Use data on incoming function (which will be setWeather(data))
            setLocationOnSearch(data.location);
        }
        catch(error:any){
            toast.error(`${error.statusCode} ${error.message}`)
        }
        finally{
            setIsInputLoading(false);
        }
    }

    return(
        <div className="flex items-center rounded-full px-4 bg-[#1E1F20] focus-within:bg-[#252729] transition-colors duration-300">
            <input 
                className={cn("text-center rounded-lg p-1 grow bg-transparent outline-none text-white",classname)}
                type="text" 
                disabled={isInputLoading} //Disable input while process
                placeholder={isInputLoading?"Searching..." : "Enter a location"}
                value={cityNameInput} 
                onChange={(event)=>setCityNameInput(event.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleSearch()}>
            </input>
            <button className="text-white cursor-pointer" onClick={handleSearch} disabled={isInputLoading}>🔍︎</button>
        </div>
    );
}
export default SearchBox;