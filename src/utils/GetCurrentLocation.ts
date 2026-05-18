export function getCurrentLocation(onSuccess:(lat: number, lon: number)=>void){
    
    if (!navigator.geolocation){return;}

    navigator.geolocation.getCurrentPosition(
        
        function(position){

            const{latitude, longitude}=position.coords;
            onSuccess(latitude,longitude);
        }
    );
}