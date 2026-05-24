import { useState } from "react";
import { CityNameNormalizer } from "@/utils/CityNameNormalizer";
import { cn } from "@/utils/TailwindMerge";
import toast from "react-hot-toast";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { CoordinateTypes } from "@/types/CoordinateTypes";
import { CombinedDataTypes } from "@/app/api/weather/route";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchBoxTypes{
    setWeatherOnSearch:(data: WeatherDataTypes)=> void; //Incoming function has to have a data parameter(which follows weather data types) and mustn't return => setWeather(data) for an example
    setLocationOnSearch:(data:CoordinateTypes)=>void; //Same as setWeatherOnSearch 
    classname?:string;
}

function SearchBox({setWeatherOnSearch,setLocationOnSearch,classname}: SearchBoxTypes){ //Searchbox takes a function as parameter and this function has to follow search box type rules

    const [cityNameInput,setCityNameInput]=useState("");
    const [isInputLoading,setIsInputLoading]=useState(false);
    const {languageDictionary,language} = useLanguage();

    const handleSearch= async (e: React.SyntheticEvent)=>{

        e.preventDefault();
        const input=cityNameInput;

        if(input.trim().length<4){
            toast.error("400 Bad Request : Search query must be longer than 3 characters.");
            return;
        }
        
        setCityNameInput(""); //Reset input 
        setIsInputLoading(true);

        try{

            const normalizedCityName = CityNameNormalizer(input);

            const response = await fetch(`/api/weather?city=${encodeURIComponent(normalizedCityName)}&lang=${language}`); //Send a fetch request to api/weather router and has a city parameter for geocoding
            
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
        <form onSubmit={handleSearch} className="flex items-center rounded-full px-4 transition-colors duration-300 backdrop-blur-md shadow-sm border border-slate-200/50 focus-within:border-slate-300/80 bg-white/70 dark:border-white/8 dark:focus-within:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70">
            <input 
                className={cn("text-center rounded-lg p-1 grow bg-transparent outline-none text-slate-900 dark:text-white",classname)}
                type="text" 
                disabled={isInputLoading} //Disable input while process
                placeholder={isInputLoading? languageDictionary.search.searching : languageDictionary.search.placeholder}
                value={cityNameInput} 
                onChange={(event)=>setCityNameInput(event.target.value)}>
            </input>
            <button type="submit" className="text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-white cursor-pointer" disabled={isInputLoading}>🔍︎</button>
        </form>
    );
}
export default SearchBox;