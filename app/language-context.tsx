'use client';

import React, { createContext, useContext, useState } from 'react';

export const translations = {
  en: {
    // Navbar
    home: 'Home',
    shop: 'Shop',
    about: 'About',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Craft Excellence',
    heroSubtitle: 'Roasted to Perfection',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    heroDesc: 'Experience the art of artisanal roasting. From misty highlands to your morning cup, we bring you the finest specialty coffee with uncompromising precision.',

    // Featured Beans
    featuredBeans: 'Featured Beans',
    featuredBeansDesc: 'Explore our curated selection of artisanal beans, roasted to bring out the distinct flavors of their origin.',
    featured: 'Featured',

    // Product Cards
    roastLevel: 'Roast Level',
    flavorProfile: 'Flavor Profile',
    price: 'Price',

    // Beans Catalog
    ethiopian: 'Ethiopian Yirgacheffe',
    ethiopianDesc: 'Bright, floral notes with hints of blueberry and citrus',
    colombian: 'Colombian Geisha',
    colombianDesc: 'Smooth, balanced blend with chocolate and caramel undertones',
    brazilian: 'Brazilian Santos',
    brazilianDesc: 'Rich, full-bodied with notes of chocolate and hazelnut',

    // Roastery Section
    ourStory: 'Our Story',
    ourStoryDesc: 'Our journey does not begin at the roaster, but in the damp soil and crisp mountain air of the world’s most renowned coffee regions. We believe that every bean carries the secrets of its origin—the rains that nourished it and the sun that gave it life. At BAR, our mission is to act as the curators of these secrets. With precision born from thousands of hours of experimentation, we roast in small, intentional batches to honor the hard work of our farmers and reveal the true character of every harvest. From deep chocolate undertones to vibrant, fruity notes, every cup is a celebration of craftsmanship, heritage, and our unwavering dedication to bringing the soul of the world into your hands.',
    ourProcess: 'From Soil to Soul',
    selecting: 'Selecting',
    selectingDesc: 'Hand-picked beans from sustainable farms',
    roasting: 'Roasting',
    roastingDesc: 'Small-batch roasting for optimal flavor',
    cooling: 'Cooling',
    coolingDesc: 'Precise cooling to lock in flavors',
    packaging: 'Packaging',
    packagingDesc: 'Fresh to your door within 48 hours',

    // Brew Guide
    brewGuide: 'How to Brew',
    pourOver: 'Pour Over',
    pourOverDesc: 'Classic method for balanced extraction',
    pourOverTime: '3-4 minutes',
    pourOverRatio: '1:16 ratio',
    frenchPress: 'French Press',
    frenchPressDesc: 'Rich, full-bodied brew',
    frenchPressTime: '4 minutes',
    frenchPressRatio: '1:15 ratio',
    espresso: 'Espresso',
    espressoDesc: 'Bold, concentrated shot',
    espressoTime: '25-30 seconds',
    espressoRatio: '1:2 ratio',
    aeroPress: 'AeroPress',
    aeroPressDesc: 'Smooth, clean cup',
    aeroPressTime: '1-2 minutes',
    aeroPressRatio: '1:15 ratio',
    viewDetail: 'View Detail',
    close: 'Close',
    coldBrew: 'Cold Brew',
    coldBrewRatio: '1:10 ratio',
    coldBrewTime: '12-18 hours',
    coldBrewDesc: 'Smooth and refreshing low-acidity brew',
    pourOverDetail: 'Manual Brew (V60): Use 15g medium-fine coffee to 250g water. Bloom for 30s, then pour steadily. Japanese Style (Iced): Use 15g coffee, 150g hot water for brewing, and 100g ice in the carafe for instant cooling.',
    frenchPressDetail: 'Coarse grind. Steep for 4 minutes with boiling water, then plunge slowly. Perfect for a heavy, oily, and rich cup.',
    espressoDetail: 'Espresso Machine: Use 18-20g fine grind. Aim for 36-40g liquid out in 25-30s. Ensure consistent tamping and fresh roast.',
    aeroPressDetail: 'Versatile method. Try the Inverted Method: 15g coffee to 225g water, steep for 2 minutes, flip and press steadily for a clean, strong cup.',

    // About Section
    aboutTitle: 'About BAR',
    aboutDesc: 'Craft coffee roasted with passion. Every bean tells a story of passion and dedication.',
    yearsExperience: 'Years Experience',
    countriesSourced: 'Countries Sourced',
    customersSatisfied: 'Customers Satisfied',

    // CTA Section
    readyToBrew: 'Ready to Brew Something Great?',
    discoverCoffee: 'Discover our full collection and become part of the coffee revolution.',
    orderNow: 'Order Now',

    // Footer
    company: 'Company',
    support: 'Support',
    legal: 'Legal',
    newsletter: 'Newsletter',
    subscribeNewsletter: 'Subscribe to our newsletter for coffee tips and exclusive offers',
    email: 'Email',
    subscribe: 'Subscribe',
    barBrewAndRoastery: 'BAR - Brew Area Roastery',
    followUs: 'Follow Us',
  },
  id: {
    // Navbar
    home: 'Beranda',
    shop: 'Toko',
    about: 'Tentang',
    contact: 'Kontak',

    // Hero Section
    heroTitle: 'Keunggulan Craft',
    heroSubtitle: 'Dipanggang Sempurna',
    shopNow: 'Belanja Sekarang',
    learnMore: 'Pelajari Lebih Lanjut',
    heroDesc: 'Rasakan seni roasting artisanal. Dari pegunungan yang berkabut hingga ke cangkir Anda, kami menghadirkan kopi spesialti terbaik dengan presisi tanpa kompromi.',

    // Featured Beans
    featuredBeans: 'Biji Pilihan',
    featuredBeansDesc: 'Jelajahi pilihan biji kopi artisanal kami, dipanggang untuk menghadirkan cita rasa khas dari tempat asalnya.',
    featured: 'Pilihan',

    // Product Cards
    roastLevel: 'Tingkat Roast',
    flavorProfile: 'Profil Rasa',
    price: 'Harga',

    // Beans Catalog
    ethiopian: 'Ethiopian Yirgacheffe',
    ethiopianDesc: 'Catatan cerah dan floral dengan sentuhan blueberry dan citrus',
    colombian: 'Colombian Geisha',
    colombianDesc: 'Perpaduan halus dan seimbang dengan nada cokelat dan karamel',
    brazilian: 'Brazilian Santos',
    brazilianDesc: 'Tubuh penuh dan kaya dengan nada cokelat dan hazelnut',

    // Roastery Section
    ourStory: 'Kisah Kami',
    ourStoryDesc: 'Perjalanan kami tidak dimulai di mesin panggangan, melainkan di tanah yang lembap dan udara pegunungan yang dingin di wilayah penghasil kopi terbaik dunia. Kami percaya bahwa setiap biji membawa rahasia asalnya—hujan yang menyejukannya dan matahari yang memberinya kehidupan. Di BAR, misi kami adalah menjadi kurator dari rahasia-rahasia ini. Dengan presisi yang lahir dari ribuan jam eksperimen, kami memanggang dalam batch kecil untuk menghormati kerja keras para petani dan mengungkap karakter sejati dari setiap panen. Dari nada cokelat yang dalam hingga aroma buah yang cerah, setiap cangkir adalah perayaan keahlian, warisan, dan dedikasi kami yang tak tergoyahkan untuk membawa jiwa dunia ke tangan Anda.',
    ourProcess: 'Dari Tanah ke Jiwa',
    selecting: 'Pemilihan',
    selectingDesc: 'Biji yang dipilih dengan tangan dari perkebunan berkelanjutan',
    roasting: 'Roasting',
    roastingDesc: 'Roasting batch kecil untuk rasa optimal',
    cooling: 'Pendinginan',
    coolingDesc: 'Pendinginan presisi untuk mengunci rasa',
    packaging: 'Pengemasan',
    packagingDesc: 'Segar hingga pintu Anda dalam 48 jam',

    // Brew Guide
    brewGuide: 'Cara Menyeduh',
    pourOver: 'Pour Over',
    pourOverDesc: 'Metode klasik untuk ekstraksi seimbang',
    pourOverTime: '3-4 menit',
    pourOverRatio: 'Rasio 1:16',
    frenchPress: 'French Press',
    frenchPressDesc: 'Kopi tubuh penuh dan kaya',
    frenchPressTime: '4 menit',
    frenchPressRatio: 'Rasio 1:15',
    espresso: 'Espresso',
    espressoDesc: 'Pukulan tebal dan terkonsentrasi',
    espressoTime: '25-30 detik',
    espressoRatio: 'Rasio 1:2',
    aeroPress: 'AeroPress',
    aeroPressDesc: 'Cangkir bersih dan halus',
    aeroPressTime: '1-2 menit',
    aeroPressRatio: 'Rasio 1:15',
    viewDetail: 'Lihat Detail',
    close: 'Tutup',
    coldBrew: 'Cold Brew',
    coldBrewRatio: 'Rasio 1:10',
    coldBrewTime: '12-18 jam',
    coldBrewDesc: 'Kopi seduh dingin rendah asam yang segar',
    pourOverDetail: 'Manual Brew (V60): Gunakan 15g kopi medium-fine ke 250g air. Bloom selama 30 detik, lalu tuang perlahan. Japanese Style (Iced): Gunakan 15g kopi, 150g air panas untuk menyeduh, dan 100g es di wadah untuk pendinginan instan.',
    frenchPressDetail: 'Gilingan kasar. Diamkan selama 4 menit dengan air mendidih, lalu tekan perlahan. Sempurna untuk kopi yang berat dan kaya rasa.',
    espressoDetail: 'Mesin Espresso: Gunakan 18-20g gilingan halus. Targetkan 36-40g cairan keluar dalam 25-30 detik. Pastikan tamping konsisten dan biji segar.',
    aeroPressDetail: 'Metode serbaguna. Coba Metode Inverted: 15g kopi ke 225g air, diamkan 2 menit, balik dan tekan secara stabil untuk hasil yang bersih.',

    // About Section
    aboutTitle: 'Tentang BAR',
    aboutDesc: 'Kopi craft yang dipanggang dengan passion. Setiap biji bercerita tentang passion dan dedikasi.',
    yearsExperience: 'Tahun Pengalaman',
    countriesSourced: 'Negara Sumber',
    customersSatisfied: 'Pelanggan Puas',

    // CTA Section
    readyToBrew: 'Siap Menyeduh Sesuatu yang Luar Biasa?',
    discoverCoffee: 'Temukan koleksi lengkap kami dan jadilah bagian dari revolusi kopi.',
    orderNow: 'Pesan Sekarang',

    // Footer
    company: 'Perusahaan',
    support: 'Dukungan',
    legal: 'Hukum',
    newsletter: 'Newsletter',
    subscribeNewsletter: 'Berlangganan newsletter kami untuk tips kopi dan penawaran eksklusif',
    email: 'Email',
    subscribe: 'Berlangganan',
    barBrewAndRoastery: 'BAR - Brew Area Roastery',
    followUs: 'Ikuti Kami',
  }
};

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
