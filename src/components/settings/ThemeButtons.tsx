import { useLanguage } from "@/contexts/LanguageContext";
import { ACTIVE_TEMPLATE, BASE_TEMPLATE, NOT_ACTIVE_TEMPLATE } from "./ButtonStyles";

interface ThemeButtonsTypes{
    theme:string|undefined;
    themeSetter:(theme:string)=>void
}

export function ThemeButtons({theme,themeSetter}:ThemeButtonsTypes){

    const {languageDictionary} = useLanguage();

    return(
        <div className="grid grid-cols-2 gap-3">
            <button className={`${BASE_TEMPLATE} ${theme === "dark" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("dark")}>{languageDictionary.settings.dark_theme}</button>
            <button className={`${BASE_TEMPLATE} ${theme === "light" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("light")}>{languageDictionary.settings.light_theme}</button>
        </div>
    );
}   