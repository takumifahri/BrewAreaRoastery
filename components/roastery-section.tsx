'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/language-context';

export function RoasterySection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('selecting'),
      description: t('selectingDesc'),
    },
    {
      number: '02',
      title: t('roasting'),
      description: t('roastingDesc'),
    },
    {
      number: '03',
      title: t('cooling'),
      description: t('coolingDesc'),
    },
    {
      number: '04',
      title: t('packaging'),
      description: t('packagingDesc'),
    },
  ];

  return (
    <section id="roastery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('ourStory')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('ourStoryDesc')}
            </p>
            <p className="text-lg font-bold text-primary italic">
              {t('ourProcess')}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden border border-border/40 shadow-xl">
            <Image
              src="/roastery-process.jpg"
              alt="Roastery process"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="border border-border rounded-lg p-8 hover:border-primary transition-colors">
              <div className="text-5xl font-bold text-primary/30 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
