"use client";

import { useLanguage } from "./LanguageContext";
import { ArrowRight } from "lucide-react";

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          
          <ul className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <li>{t("expertise_li_1")}</li>
            <li>{t("expertise_li_2")}</li>
            <li>{t("expertise_li_3")}</li>
            <li>{t("expertise_li_4")}</li>
            <li>{t("expertise_li_5")}</li>
            <li>{t("expertise_li_6")}</li>
          </ul>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("expertise_text")}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 group">
              {t("cta_primary")}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:border-purple-400 hover:shadow-md transition-all">
              {t("cta_secondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
