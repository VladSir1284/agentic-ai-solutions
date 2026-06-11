"use client";

import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";
import Link from "next/link";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-white">AI</span>
              </div>
              <span className="text-xl">Agentic AI</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/solutions"
              className="text-foreground hover:text-purple-600 transition-colors"
            >
              {t("menu_solutions")}
            </Link>
            <Link
              href="/strategy"
              className="text-foreground hover:text-purple-600 transition-colors"
            >
              {t("menu_strategy")}
            </Link>
            <Link
              href="/contacts"
              className="text-foreground hover:text-purple-600 transition-colors"
            >
              {t("contacts")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 bg-muted rounded-full p-1">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
              language === "en" ? "bg-white shadow-sm" : "hover:bg-white/50"
            }`}
          >
            <Globe size={16} />
            EN
          </button>
          <button
            onClick={() => setLanguage("ua")}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
              language === "ua" ? "bg-white shadow-sm" : "hover:bg-white/50"
            }`}
          >
            <Globe size={16} />
            UA
          </button>
        </div>
      </div>
    </header>
  );
}
