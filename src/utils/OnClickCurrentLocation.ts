import toast from "react-hot-toast";
import { getCurrentLocation } from "./GetCurrentLocation";
import { OnClickCurrentLocationTypes } from "@/types/OnClickCurrentLocationTypes";

export function OnClickCurrentLocation({setWeatherData,setLocationData}:OnClickCurrentLocationTypes){

    getCurrentLocation(
        
        async function(lat, lon){
            
            const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
            const data = await response.json();

            if(!response.ok){
                const errorData=data;
                toast.error(`${errorData.statusCode} ${errorData.message}`);
            }

            else if (data.weather && data.location){
                setWeatherData(data.weather);
                setLocationData(data.location);
            }
        }
    );
}