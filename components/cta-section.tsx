'use client';

import { useLanguage } from '@/app/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('readyToBrew')}
          </h2>
          <p className="text-lg opacity-90 mb-10">
            {t('discoverCoffee')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              {t('orderNow')}
            </a>
            <a
              href="#subscribe"
              className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              {t('subscribe')}
            </a>
          </div>

          <p className="text-sm opacity-75 mt-8">
            Free shipping on orders over $50. Freshly roasted and shipped within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
