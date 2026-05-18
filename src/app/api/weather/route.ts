import { GeoCodingService } from "@/services/GeoCodingService";
import { WeatherDataService } from "@/services/WeatherDataService";
import { NextRequest } from "next/server";
import { CombinedDataTypes } from "@/types/CombinedDataTypes";
import { CoordinateTypes } from "@/types/CoordinateTypes";
import { ReverseGeoCodingService } from "@/services/ReverseGeoCodingService";

export async function GET(request:NextRequest){

    try{

        const {searchParams} = new URL(request.url);
        const cityName = searchParams.get("city");
        const lat=searchParams.get("lat"); //Search params returns strings!
        const lon=searchParams.get("lon");

        let geocodingData: (CoordinateTypes | null) = null;
        
        if(lat && lon){
            geocodingData=await ReverseGeoCodingService(Number(lat),Number(lon));
        }

        else if(cityName){
            geocodingData = await GeoCodingService(cityName);
        }
       
        else{
            return Response.json({error:"City or Coordinates are required"},{status:400});
        }
        
        if(!geocodingData){
            return Response.json({error: `City not found: ${cityName}`},{ status: 404 }); //If geocodingData came NULL from geocoding service. Turn into a response with error
        }

        const weatherData = await WeatherDataService(geocodingData.lat, geocodingData.lon); //Request to Weather Service - If success will return response if not go to catch
        
        const combinedData : CombinedDataTypes = {weather:weatherData,location:geocodingData};

        return Response.json(combinedData);
    }

    catch(error:any){ //Catch thrown errors from services

        console.error("Weather Route Error:", error.message);
        
        return Response.json({error: "Internal Server Error", message: error.message },{status: 500}); //Return internal server errors (API key undefined etc.)
    }
}