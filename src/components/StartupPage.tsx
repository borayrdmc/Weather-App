import { StartupPageTypes } from "@/types/StartupPageTypes";
import SearchBox from "./SearchBox";
import { Footer } from "./Footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getCurrentLocation } from "@/utils/GetCurrentLocation";
import { CurrentLocationButton } from "./CurrentLocationButton";
import toast from "react-hot-toast";

export function StartupPage({setWeatherData,setLocationData}: StartupPageTypes){

    function handleCLick(){

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

    return(

        <div className="w-full min-h-screen bg-[#131314] flex flex-col items-center justify-between p-8 relative overflow-hidden">
            
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />


            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
                
                <div className="text-center mb-12">
                    <h1 className="text-8xl md:text-9xl text-white font-black">Weatherly</h1>
                </div>


                <div className="w-full max-w-3xl flex flex-col items-center gap-10">

                    <div className="flex flex-col gap-4 text-center">

                        <h2 className="text-3xl text-white font-medium">Ready to explore the <span className="text-gray-400">skies?</span></h2>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">Detailed weather forecasts for<span className="text-white text-lg font-bold"> over 250.000</span> cities. Just type, search and discover <span className="text-white text-lg font-bold">all around the world.</span> Try it yourself.</p>
                    </div>

                    <div className="w-full flex flex-col items-center gap-6">

                        <div className="w-full relative">
                            <SearchBox classname="py-2 px-1" setWeatherOnSearch={setWeatherData} setLocationOnSearch={setLocationData}/>
                        </div>

                        <CurrentLocationButton onClickFunction={handleCLick}/>
                    </div>
                </div>


                <div className="mt-16 flex flex-col items-center opacity-60">
                    <p className="text-gray-400 text-xs">Trusted by <span className="text-white font-bold">2</span> users worldwide :)</p>
                </div>

            </div>

            <Footer/>
        </div>
    );
}