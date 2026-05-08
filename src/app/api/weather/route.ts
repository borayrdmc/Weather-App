import { GeoCodingService } from "@/services/GeoCodingService";
import { WeatherDataService } from "@/services/WeatherDataService";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){

    try{

        const {searchParams} = new URL(request.url);
        const cityName = searchParams.get("city");

        if(!cityName){
            return Response.json({error: "city parameter is required" },{status: 400});
        }

        const coords = await GeoCodingService(cityName);

        if(!coords){
            return Response.json({error: `city not found: ${cityName}`},{ status: 404 });
        }

        const weatherData = await WeatherDataService(coords.lat, coords.lon);

        return Response.json(weatherData);
    }

    catch(error:any){

        console.error("Weather Route Error:", error.message);
        
        return Response.json({error: "Internal Server Error", message: error.message },{status: 500 });
    }
}