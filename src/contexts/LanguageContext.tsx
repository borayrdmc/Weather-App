"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../dicts/en.json";
import tr from "../dicts/tr.json";

type LanguageType = "tr"|"en";
type DictionaryType = typeof en;

interface LanguageContextType{
    language: LanguageType;
    setLanguage: (lang: LanguageType) => void;
    languageDictionary: DictionaryType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) =>{

    const [language,setLanguage]=useState<LanguageType>("tr");
        
    useEffect(() =>{ //Get saved language or browser language
        
        const savedLanguage = localStorage.getItem("app-lang") as LanguageType;

        if(savedLanguage && (savedLanguage==="tr"||savedLanguage==="en") ){
            setLanguage(savedLanguage);
        }
        else{
            const browserLang = navigator.language.startsWith("tr") ? "tr" : "en";
            setLanguage(browserLang);
        }

    }, []);

    const changeLanguage = (newLanguage: LanguageType) => { //From settings
        setLanguage(newLanguage);
        localStorage.setItem("app-lang",newLanguage);
    };

    const languageDictionary = language === "tr" ? tr : en;

    return(
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, languageDictionary }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = ()=>{

    const context = useContext(LanguageContext);
    if (!context){
        throw new Error("Language context error.");
    }
    return context;
};