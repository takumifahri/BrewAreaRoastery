'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            {t('readyToBrew')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('discoverCoffee')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="#beans"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-primary-foreground bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <span className="relative z-10">{t('orderNow')}</span>
            </Link>
            
            <Link
              href="#newsletter"
              className="inline-flex items-center justify-center px-10 py-4 font-bold text-foreground border-2 border-zinc-800 rounded-full hover:bg-zinc-900 transition-all duration-300 active:scale-95"
            >
              {t('subscribe')}
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
            <p>{t('shippingInfo')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
