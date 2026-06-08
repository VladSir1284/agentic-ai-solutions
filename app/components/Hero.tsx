"use client";

import { useLanguage } from "./LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="py-12" style={{ width: '75%'}}>
          <p className="text-muted-foreground leading-relaxed m-0 text-3xl font-bold">
            {t("hero_block_title_1")}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6 text-3xl font-bold">
            {t("hero_block_title_2")}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6 text-3xl font-bold">
            {t("hero_block_title_3")}
          </p>

          <button
            className="text-left mt-12 cursor-pointer py-4 px-8 rounded-md"
            style={{ backgroundColor: "#8b5cf6" }}
          >
            <h2 style={{ color: "#ffffff" }} className="font-semibold">{t("hero_block_feature")}</h2>
          </button>
        </div>
      </div>
    </section>
  );
}
