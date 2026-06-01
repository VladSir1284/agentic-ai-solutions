'use client'

import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-purple-50 to-white border-t border-purple-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm">AI</span>
          </div>
          <span className="text-lg">Agentic AI Solutions</span>
        </div>
        <p className="text-sm text-muted-foreground">{t('footer_text')}</p>
      </div>
    </footer>
  );
}
