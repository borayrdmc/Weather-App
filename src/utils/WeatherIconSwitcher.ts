export function WeatherIconSwitcher(weatherIconCode:string, weatherIconID:number ){

    //Extra Icons - Snowstorm and drizzle
    if(weatherIconID>=300 && weatherIconID<=321){
        return "/drizzle.png";
    }

    else if(weatherIconID===602 || weatherIconID===621 || weatherIconID===622){
        return "/snow_storm.png";
    }

    //Default Icons
    switch(weatherIconCode){

        case "01d": return "/clear.png";
        case "01n": return "/clear_night.png";
        case "02d": return "/few_clouds.png";
        case "02n": return "/few_clouds_night.png";
        case "03d": return "/cloudy.png";
        case "03n": return "/cloudy_night.png";
        case "04d": return "/overcast_clouds.png";
        case "04n": return "/overcast_clouds_night.png";
        case "09d": return "/heavy_rain.png";
        case "09n": return "/heavy_rain_night.png";
        case "10d": return "/rain.png";
        case "10n": return "/nightrain.png";
        case "11d": return "/thunderstorm.png";
        case "11n": return "/thunderstorm_night.png";
        case "13d": return "/snow.png";
        case "13n": return "/snow_night.png";
        
        default: return "/clear.png";
    }
}