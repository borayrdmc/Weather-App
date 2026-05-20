interface ThemeButtonsTypes{
    theme:string|undefined;
    themeSetter:(theme:string)=>void
}

export function ThemeButtons({theme,themeSetter}:ThemeButtonsTypes){

    const BASE_TEMPLATE="py-2 px-6 rounded-md cursor-pointer transition-all duration-200 text-center transition-colors duration-300 ease-in-out"
    const NOT_ACTIVE_TEMPLATE="dark:border dark:text-slate-200 dark:border-white/8 dark:hover:border-white/15 dark:shadow-gray-700/15 dark:bg-[#1E1F20]/70 shadow-sm border border-slate-200/50 hover:border-slate-300/80 bg-white/70" 
    const ACTIVE_TEMPLATE="bg-slate-200 text-slate-900 border-slate-300/80 shadow-md dark:bg-white/90 dark:text-slate-900"

    return(
        <div className="grid grid-cols-2 gap-3">
            <button className={`${BASE_TEMPLATE} ${theme === "dark" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("dark")}>Dark</button>
            <button className={`${BASE_TEMPLATE} ${theme === "light" ? ACTIVE_TEMPLATE : NOT_ACTIVE_TEMPLATE}`} onClick={()=>themeSetter("light")}>Light</button>
        </div>
    );
}   