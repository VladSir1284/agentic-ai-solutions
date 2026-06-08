"use client";

import { useLanguage } from "./LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-semibold text-2xl">
            {t("cta_title")}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("cta_text")}
          </p>

          <ul className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <li>- {t("cta_li_1")}</li>
            <li>- {t("cta_li_2")}</li>
            <li>- {t("cta_li_3")}</li>
          </ul>

          <button
            className="cursor-pointer py-4 px-8 border-2 border-purple-200 rounded-md"
            style={{ backgroundColor: "#ffffff" }}
          >
            <h2 style={{ color: "#8b5cf6" }} className="font-semibold">
              {/* {t("hero_block_feature")} */}
              Discuss a Use Case
            </h2>
          </button>
        </div>
      </div>
    </section>
  );
}
