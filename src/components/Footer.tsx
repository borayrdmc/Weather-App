import { useLanguage } from "@/contexts/LanguageContext";

export function Footer(){
    const {languageDictionary} = useLanguage();

    return(

        <div className="flex flex-row items-center gap-10 text-slate-900 dark:text-white ">

            <a className="hover:text-blue-500 hover:underline" target="_blank" rel="noopener" href="https://github.com/borayrdmc">{languageDictionary.footer.github}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" rel="noopener" href="<mailto>:bborayrdmc@gmail.com">{languageDictionary.footer.mail}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" rel="noopener" href="https://linkedin.com/in/gokhanpercem">{languageDictionary.footer.mail}</a>
            <p>© Bora Yardımcı</p>
        </div>
    );
}