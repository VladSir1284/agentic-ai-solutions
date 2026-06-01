'use client'

import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { PackageOpen, Scale, FileCheck, ShieldCheck } from 'lucide-react';

export function KPISection() {
  const { t } = useLanguage();

  const kpis = [
    { icon: PackageOpen, label: t('kpi_1'), color: '#8b5cf6' },
    { icon: Scale, label: t('kpi_2'), color: '#a78bfa' },
    { icon: FileCheck, label: t('kpi_3'), color: '#c4b5fd' },
    { icon: ShieldCheck, label: t('kpi_4'), color: '#8b5cf6' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${kpi.color}20` }}
                >
                  <Icon size={24} style={{ color: kpi.color }} />
                </div>
                <div className="text-base leading-snug" style={{ color: kpi.color }}>
                  {kpi.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
