'use client';

import { ProductCard } from './product-card';
import { useLanguage } from '@/app/language-context';

export function BeansCatalog() {
  const { t } = useLanguage();

  const coffees = [
    {
      image: '/bean-1.jpg',
      name: t('ethiopian'),
      origin: t('ethiopian'),
      roastLevel: 'Medium',
      notes: t('ethiopianDesc'),
      price: '$18.99',
    },
    {
      image: '/bean-2.jpg',
      name: t('colombian'),
      origin: t('colombian'),
      roastLevel: 'Light',
      notes: t('colombianDesc'),
      price: '$22.99',
    },
    {
      image: '/bean-3.jpg',
      name: t('brazilian'),
      origin: t('brazilian'),
      roastLevel: 'Dark',
      notes: t('brazilianDesc'),
      price: '$16.99',
    },
  ];

  return (
    <section id="beans" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('featuredBeans')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('featuredBeansDesc')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <ProductCard key={index} {...coffee} />
          ))}
        </div>
      </div>
    </section>
  );
}
