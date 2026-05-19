export function UnitConverter(celsiusTemp: number, unit: "C" | "F" | "K"){

    switch(unit){
        case "F":
            return Math.round((celsiusTemp*9)/5+32);
        case "K":
            return Math.round(celsiusTemp+273.15);
        default:
            return Math.round(celsiusTemp);
    }
};