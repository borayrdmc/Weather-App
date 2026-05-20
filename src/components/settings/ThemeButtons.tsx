import { ACTIVE_TEMPLATE, BASE_TEMPLATE, NOT_ACTIVE_TEMPLATE } from "./ButtonStyles";

interface ThemeButtonsTypes{
    theme:string|undefined;
    themeSetter:(theme:string)=>void
}

export function ThemeButtons({theme,themeSetter}:ThemeButtonsTypes){

    return(
        <div className="grid grid-cols-2 gap-3">
            <button className={`${BASE_TEMPLATE} ${theme === "dark" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("dark")}>Dark</button>
            <button className={`${BASE_TEMPLATE} ${theme === "light" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("light")}>Light</button>
        </div>
    );
}   