import SearchBox from "../components/SearchBox";
import { Footer } from "../components/Footer";
import { CurrentLocationButton } from "../components/CurrentLocationButton";
import { OnClickCurrentLocation } from "@/utils/OnClickCurrentLocation";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { CoordinateTypes } from "@/types/CoordinateTypes";
import { Settings } from "lucide-react";
import { SettingsPage } from "@/components/settings/SettingsPage";

interface StartupPageTypes{
    setWeatherData:(data: WeatherDataTypes)=> void; //Incoming function has to have a data parameter(which follows weather data types) and mustn't return => setWeather(data) for an example
    setLocationData:(data:CoordinateTypes)=>void; //Same as setWeatherOnSearch 
    setIsSettingsOpen:(state:boolean)=>void;
    setUnit:(unit:"C"|"F"|"K")=>void;
    setTheme:(theme: string)=>void;
    unit:"C"|"K"|"F";
    isSettingsOpen:boolean;
    theme:string|undefined;
}

export function StartupPage({setWeatherData,setLocationData,setIsSettingsOpen,setUnit,setTheme,isSettingsOpen,unit,theme}: StartupPageTypes){

    return(

        <div className="w-full min-h-screen flex flex-col items-center justify-between p-8 relative overflow-hidden bg-slate-100 dark:bg-[#131314] transition-colors duration-300 ease-in-out">
            
            <div className="absolute -top-1/10 -left-1/10 w-3/10 h-3/10 dark:w-5/10 dark:h-5/10 rounded-full blur-[120px] bg-amber-400/15 dark:bg-blue-500/5" />
            <div className="absolute -top-1/10 -right-1/10 w-3/10 h-3/10 dark:w-5/10 dark:h-5/10 rounded-full blur-[120px] bg-sky-400/20 dark:bg-blue-500/5" />

            <div className="absolute top-3 right-6 cursor-pointer" onClick={()=>setIsSettingsOpen(true)}><Settings className="hover:text-slate-700 dark:hover:text-white"></Settings></div>
            {isSettingsOpen && <SettingsPage onClickFunction={setIsSettingsOpen} unitSetter={setUnit} unit={unit} theme={theme} setTheme={setTheme}/>}

            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
                
                <div className="text-center mb-12">
                    <h1 className="text-8xl md:text-9xl font-black text-slate-900 dark:text-slate-200 ">Weatherly</h1>
                </div>


                <div className="w-full max-w-3xl flex flex-col items-center gap-10">

                    <div className="flex flex-col gap-4 text-center">

                        <h2 className="text-3xl font-medium text-slate-900 dark:text-slate-200 ">Ready to explore the <span className="text-gray-400">skies?</span></h2>
                        <p className="text-lg max-w-xl mx-auto font-light text-gray-700 dark:text-gray-500">Detailed weather forecasts for<span className="text-slate-900 dark:text-slate-200 text-lg font-bold"> over 250.000</span> cities. Just type, search and discover weathers <span className="text-slate-900 dark:text-slate-200 text-lg font-bold">all around the world.</span> Try it yourself.</p>
                    </div>

                    <div className="w-full flex flex-col items-center gap-6">

                        <div className="w-full relative">
                            <SearchBox classname="py-2 px-1" setWeatherOnSearch={setWeatherData} setLocationOnSearch={setLocationData}/>
                        </div>

                        <CurrentLocationButton onClickFunction={()=>OnClickCurrentLocation({setWeatherData,setLocationData})}/>
                    </div>
                </div>


                <div className="mt-16 flex flex-col items-center opacity-60">
                    <p className="text-gray-700 dark:text-gray-400 text-xs">Trusted by <span className="font-bold text-black dark:text-white">2</span> users worldwide :)</p>
                </div>

            </div>

            <Footer/>
        </div>
    );
}