'use client'

import { useLanguage } from './LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {t('expertise_title')}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('expertise_text')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 group">
              <Mail size={20} />
              {t('cta_primary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:border-purple-400 hover:shadow-md transition-all">
              {t('cta_secondary')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
