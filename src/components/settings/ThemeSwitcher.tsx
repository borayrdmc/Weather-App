"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// İkonlar için projedeki kütüphaneni kullanabilirsin (örn: lucide-react, react-icons vb.)
import { Sun, Moon } from "lucide-react"; 

interface ThemeSwitcherTypes{
    theme: string | undefined;
    setTheme: (theme: string) => void;
}

export function ThemeSwitcher({theme,setTheme}:ThemeSwitcherTypes) {
  // İşte aradığın gizli güç: State'i ve LocalStorage ameleliğini bu hook tek başına çözüyor
 
  const [mounted, setMounted] = useState(false);

  // Sayfa sunucudan tarayıcıya inene kadar (hydration fix) bekliyoruz
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex flex-col gap-2 w-full">

      {/* Dış Kutu */}
      <div className="relative flex items-center p-1 w-full max-w-60 h-11 bg-slate-200/80 dark:bg-[#1a1a1b] rounded-xl select-none">
        
        {/* Arkada Kayan Sürgülü Kutu */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-[#2d2d2f] rounded-lg shadow-sm transition-all duration-300 ease-out ${
            isDark ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
          }`}
        />

        {/* Light Modu Tetikleyen Buton */}
        <button
          type="button"
          onClick={() => setTheme("light")} // Kütüphaneye "Açık moda geç" emri veriyoruz
          className={`relative z-10 flex items-center justify-center gap-2 w-1/2 h-full text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
            !isDark ? "text-slate-900" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <Sun size={16} />
          <span>Light</span>
        </button>

        {/* Dark Modu Tetikleyen Buton */}
        <button
          type="button"
          onClick={() => setTheme("dark")} // Kütüphaneye "Karanlık moda geç" emri veriyoruz
          className={`relative z-10 flex items-center justify-center gap-2 w-1/2 h-full text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
            isDark ? "text-white" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Moon size={16} />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
}