import { useLanguage } from "@/contexts/LanguageContext";
import { ACTIVE_TEMPLATE, BASE_TEMPLATE, NOT_ACTIVE_TEMPLATE } from "./ButtonStyles";

export function LanguageButtons(){

    const {languageDictionary,setLanguage,language} = useLanguage();

    return(
        <div className="grid grid-cols-2 gap-3">
            <button className={`${BASE_TEMPLATE} ${language === "en" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={() => setLanguage("en")}>{languageDictionary.settings.english}</button>
            <button className={`${BASE_TEMPLATE} ${language === "tr" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={() => setLanguage("tr")}>{languageDictionary.settings.turkish}</button>
        </div>
    );
}   