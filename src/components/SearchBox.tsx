"use client";
import { useState } from "react";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { SearchBoxTypes } from "@/types/SearchBoxTypes";

function SearchBox({setWeatherOnSearch}: SearchBoxTypes){

    const [cityNameInput,setCityNameInput]=useState("");
    const [isInputLoading,setIsInputLoading]=useState(false);
    const [error,setError]=useState<string|null>(null);

    const handleSearch= async ()=>{
        
        if (!cityNameInput.trim()){return;}

        setIsInputLoading(true);
        setError(null);

        try{

            const response = await fetch(`/api/weather?city=${cityNameInput}`);

            if(!response.ok){
                const err=await response.json();
                setError(err.error);
                return;
            }
            const data = await response.json() as WeatherDataTypes;
            setWeatherOnSearch(data);

        }
        catch{
            setError("Error occured.");
        }
        finally{
            setIsInputLoading(false);
        }
    }

    return(
        <>
            <input 
                type="text" 
                placeholder={isInputLoading ? "Searching..." : "Enter a city"} 
                value={cityNameInput} 
                onChange={(event)=>setCityNameInput(event.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleSearch()}>    
            </input>
            <button onClick={handleSearch} disabled={isInputLoading}>Search</button>
        </>
    );
}
export default SearchBox;