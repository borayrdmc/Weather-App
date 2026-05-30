import { useLanguage } from "@/contexts/LanguageContext";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

export function Footer(){

    const {languageDictionary} = useLanguage();

    const handleCopy = async(e:React.MouseEvent<HTMLAnchorElement>)=>{

        e.preventDefault();
        const emailAddress = "bborayrdmc@gmail.com";

        await navigator.clipboard.writeText(emailAddress);

        toast('Mail Copied!',{
            icon: <FaCopy />,
            duration: 2000}
        );
    }

    return(

        <div className="flex flex-row gap-4 text-slate-900 dark:text-slate-200">

            <a className="hover:text-blue-500 hover:underline" target="_blank" href="https://github.com/borayrdmc">{languageDictionary.footer.github}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" onClick={handleCopy} href="#">{languageDictionary.footer.mail}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" href="https://linkedin.com/in/gokhanpercem">{languageDictionary.footer.linkedin}</a>
            <p>© Bora Yardımcı</p>
        </div>  
    );
}