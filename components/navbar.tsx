'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/app/language-context';
import Image from 'next/image';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo-bar.jpg" alt="BAR Logo" width={150} height={50} className="w-auto h-12 rounded-full object-cover" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#beans"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('shop')}
            </Link>
            <Link
              href="#roastery"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('ourStory')}
            </Link>
            <Link
              href="#brew"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('brewGuide')}
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('about')}
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-all ${language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 rounded transition-all ${language === 'id'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                  }`}
              >
                ID
              </button>
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium">
              {t('orderNow')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            title={isOpen ? "Close menu" : "Open menu"}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#beans"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('shop')}
            </Link>
            <Link
              href="#roastery"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('ourStory')}
            </Link>
            <Link
              href="#brew"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('brewGuide')}
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('about')}
            </Link>
            <div className="flex gap-2 px-4 py-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 px-3 py-1 rounded transition-all ${language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`flex-1 px-3 py-1 rounded transition-all ${language === 'id'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                  }`}
              >
                ID
              </button>
            </div>
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium mt-2">
              {t('orderNow')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
