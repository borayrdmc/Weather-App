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

        <div className="grid grid-cols-4 gap-4 lg:gap-12 text-slate-900 dark:text-white border-amber-600 border-2 ">

            <a className="hover:text-blue-500 hover:underline" target="_blank" href="https://github.com/borayrdmc">{languageDictionary.footer.github}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" onClick={handleCopy} href="#">{languageDictionary.footer.mail}</a>
            <a className="hover:text-blue-500 hover:underline" target="_blank" href="https://linkedin.com/in/gokhanpercem">{languageDictionary.footer.linkedin}</a>
            <p>© Bora Yardımcı</p>
        </div>
    );
}