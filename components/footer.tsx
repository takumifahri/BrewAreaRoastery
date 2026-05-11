'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/language-context';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BAR</h3>
            <p className="opacity-75">
              {t('barBrewAndRoastery')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 opacity-75 text-sm">
              <li>
                <Link href="#beans" className="hover:text-secondary transition-colors">
                  {t('shop')}
                </Link>
              </li>
              <li>
                <Link href="#roastery" className="hover:text-secondary transition-colors">
                  {t('ourStory')}
                </Link>
              </li>
              <li>
                <Link href="#brew" className="hover:text-secondary transition-colors">
                  {t('brewGuide')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-secondary transition-colors">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t('support')}</h4>
            <ul className="space-y-2 opacity-75 text-sm">
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  {t('contact')}
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-secondary transition-colors">
                  {t('support')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">
                  {t('support')}
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-secondary transition-colors">
                  {t('legal')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t('newsletter')}</h4>
            <p className="text-sm opacity-75 mb-4">
              {t('subscribeNewsletter')}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('email')}
                className="flex-1 px-3 py-2 rounded bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 text-sm border border-primary-foreground/20 focus:outline-none focus:border-secondary"
              />
              <button className="px-4 py-2 rounded bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} BAR - Brew Area Roastery. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
