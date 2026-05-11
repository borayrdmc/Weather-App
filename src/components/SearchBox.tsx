"use client";
import { useState } from "react";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { SearchBoxTypes } from "@/types/SearchBoxTypes";

function SearchBox({setWeatherOnSearch}: SearchBoxTypes){ //Searchbox takes a function as parameter and this function has to follow search box type rules

    const [cityNameInput,setCityNameInput]=useState("");
    const [isInputLoading,setIsInputLoading]=useState(false);
    const [error,setError]=useState<string|null>(null);

    const handleSearch= async ()=>{
        
        if (!cityNameInput.trim()){
            setError("City name can't be blank."); //If entry is empty 
            return;
        } 

        setIsInputLoading(true);
        setError(null);

        try{

            const response = await fetch(`/api/weather?city=${cityNameInput}`); //Send a fetch request to api/weather router and has a city parameter for geocoding

            if(!response.ok){
                const err=await response.json(); //Error json coming from router
                setError(err.error); //Error type coming from Internal Server or Router (like "City not found: Atlantis" | "Internal Server Error" | "city parameter is required")
                return;
            }

            const data = await response.json() as WeatherDataTypes; //Fetch succesfull
            setWeatherOnSearch(data); //Use data on incoming function (which will be setWeather(data))
            setCityNameInput(""); //Reset input 
        }
        catch(error){
            console.log(error);
            setError("Network error occured."); //For failed fetch requests
        }
        finally{
            setIsInputLoading(false);
        }
    }

    return(
        <div className="flex items-center border rounded-full px-4 bg-[#303134] focus-within:bg-[#4d5156] transition-colors duration-300">
            <input 
                className="text-center rounded-lg p-1 grow bg-transparent outline-none text-white"
                type="text" 
                disabled={isInputLoading} //Disable input while process
                placeholder="Enter a city" 
                value={cityNameInput} 
                onChange={(event)=>setCityNameInput(event.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleSearch()}>
            </input>
            <button onClick={handleSearch} disabled={isInputLoading}>🔍</button>
        </div>
    );
}
export default SearchBox;