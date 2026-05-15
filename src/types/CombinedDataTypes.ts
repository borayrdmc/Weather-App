import { CoordinateTypes } from "./CoordinateTypes";
import { WeatherDataTypes } from "./WeatherTypes";

export interface CombinedDataTypes{
    weather:WeatherDataTypes;
    location:CoordinateTypes;
}