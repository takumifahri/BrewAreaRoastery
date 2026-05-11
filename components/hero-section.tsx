'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-context';

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Coffee roastery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* BAR Branding */}
          {/* <div className="mb-8">
            <span className="text-primary text-lg font-bold tracking-widest uppercase">
              BAR
            </span>
            <p className="text-primary text-sm tracking-wide mt-2">
              Brew Area Roastery
            </p>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 leading-tight tracking-tight">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            {t('heroDesc')}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="#beans"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              {t('shopNow')}
            </Link>
            <Link
              href="#roastery"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
