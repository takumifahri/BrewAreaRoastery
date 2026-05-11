'use client';

import { useLanguage } from '@/app/language-context';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('about')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('aboutDesc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-background rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">10+</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t('yearsExperience')}
              </h3>
              <p className="text-muted-foreground">
                {t('yearsExperience')}
              </p>
            </div>

            <div className="bg-background rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">50+</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t('countriesSourced')}
              </h3>
              <p className="text-muted-foreground">
                {t('countriesSourced')}
              </p>
            </div>

            <div className="bg-background rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t('customersSatisfied')}
              </h3>
              <p className="text-muted-foreground">
                {t('customersSatisfied')}
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 border border-primary/20 rounded-lg bg-primary/5">
            <p className="text-muted-foreground mb-6">
              Our mission is simple: deliver the finest specialty coffee while supporting sustainable farming practices and building meaningful connections with our community. Every cup tells a story of passion, craftsmanship, and respect for the origin of each bean.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re a coffee enthusiast seeking new origins or simply looking for your next favorite brew, we&apos;re here to guide you through the journey of specialty coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
