import { GeoCodingService } from "@/services/GeoCodingService";
import { WeatherDataService } from "@/services/WeatherDataService";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){

    try{

        const {searchParams} = new URL(request.url);
        const cityName = searchParams.get("city");

        if(!cityName){
            return Response.json({error: "City parameter is required" },{status: 400}); //API security (direct request to /api/weather?city=)
        }

        const coords = await GeoCodingService(cityName);
        
        if(!coords){
            return Response.json({error: `City not found: ${cityName}`},{ status: 404 }); //If coords came NULL from geocoding service. Turn into a response with error
        }

        const weatherData = await WeatherDataService(coords.lat, coords.lon); //Request to Weather Service - If success will return response if not go to catch
        
        return Response.json(weatherData);
    }

    catch(error:any){ //Catch thrown errors from services

        console.error("Weather Route Error:", error.message);
        
        return Response.json({error: "Internal Server Error", message: error.message },{status: 500}); //Return internal server errors (API key undefined etc.)
    }
}