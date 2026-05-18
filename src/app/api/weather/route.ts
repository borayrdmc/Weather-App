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
            return Response.json({message:"Bad Request",statusCode:400},{status:400}); //No parameters given
        }
        
        if(!geocodingData){
            return Response.json({message:`City not found: ${cityName}`},{status:404}); //GeoCoding couldnt find anything
        }

        const weatherData = await WeatherDataService(geocodingData.lat, geocodingData.lon); //Request to Weather Service - If success will return response if not go to catch
        
        const combinedData : CombinedDataTypes = {weather:weatherData,location:geocodingData};

        return Response.json(combinedData);
    }

    catch(error:any){ //Catch thrown errors from services

        const status = error.status || 500;

        return Response.json({message: error.message,statusCode:status},{status:status}); //Error Details for user , Status for fetch function
    }
}