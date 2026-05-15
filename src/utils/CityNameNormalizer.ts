export function CityNameNormalizer(cityName: string){

    const map: {[key: string]: string}={
        'İ': 'i', 'I': 'i', 'ı': 'i', 'ğ': 'g', 'Ğ': 'g',
        'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's', 
        'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'};

    return cityName.replace(/[İIığĞüÜşŞöÖçÇ]/g, (letter) => map[letter]).toLowerCase().trim();
};