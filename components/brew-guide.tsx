'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/language-context';
import { ArrowRight, Timer, Beaker, Zap } from 'lucide-react';
import { BrewRepository } from '@/services/brew-service';


export function BrewGuide() {
  const { t } = useLanguage();
  const allMethods = BrewRepository.getAllMethods();

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'pour-over': return <Beaker className="w-5 h-5" />;
      case 'espresso': return <Zap className="w-5 h-5" />;
      case 'french-press':
      case 'cold-brew': return <Timer className="w-5 h-5" />;
      default: return <Beaker className="w-5 h-5" />;
    }
  };

  const getMethodTag = (id: string) => {
    switch (id) {
      case 'pour-over': return 'Manual';
      case 'french-press': return 'Immersion';
      case 'espresso': return 'Pressure';
      case 'cold-brew': return 'Slow';
      default: return 'Method';
    }
  };

  const toCamelCase = (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  const methods = allMethods.map(m => {
    const baseKey = toCamelCase(m.id);
    return {
      ...m,
      name: t(baseKey as any) || m.title,
      icon: getMethodIcon(m.id),
      tag: getMethodTag(m.id),
      ratio: t(`${baseKey}Ratio` as any) || m.guides[0].brew_ratio,
      time: t(`${baseKey}Time` as any) || m.guides[0].brew_time_minutes || m.guides[0].extraction_time_seconds,
      profile: t(`${baseKey}Desc` as any) || m.short_description,
      description: t(`${baseKey}Desc` as any) || m.short_description,
    };
  });

  return (
    <section id="brew" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t('brewGuide')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Precision tools for the perfect extraction.
          </p>
        </div>

        {/* Brewing Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl border border-border/40 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col h-full"
            >
              {/* Method Header Section */}
              <div className="p-8 lg:p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary mb-4">
                    {method.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-secondary text-muted-foreground px-3 py-1.5 rounded-lg border border-border/50">
                    {method.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors duration-300">
                  {method.name}
                </h3>
                
                {/* Stats Row - Fixed widths/wrapping */}
                <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border/30">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Ratio</p>
                    <p className="text-foreground font-bold truncate">{method.ratio}</p>
                  </div>
                  <div className="min-w-0 border-x border-border/30 px-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Time</p>
                    <p className="text-foreground font-bold truncate">{method.time}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Profile</p>
                    <p className="text-primary font-bold truncate" title={method.profile}>{method.profile}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-8">
                    {method.description}
                  </p>
                </div>

                {/* Link to detail page */}
                <Link 
                  href={`/brew/${method.id}`}
                  className="w-full py-4 px-8 bg-zinc-900 border border-zinc-800 hover:border-primary/50 text-zinc-100 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover/btn:bg-primary/5 transition-colors duration-300" />
                  <span className="relative z-10">{t('viewDetail')}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-24">
          <div className="relative bg-zinc-950 text-zinc-50 rounded-[2.5rem] p-10 md:p-16 border border-zinc-800 shadow-3xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Beaker className="w-32 h-32" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary tracking-tight">Roaster's Masterclass</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Water Quality", text: "Optimal extraction happens between 90-96°C using freshly filtered water." },
                { title: "Grind Consistency", text: "Uniform particles ensure even extraction and prevent bitterness." },
                { title: "Bloom Time", text: "Always allow 30-45 seconds for the coffee to degas before full immersion." },
                { title: "Agitation", text: "Subtle stirring helps saturate all grounds for a balanced flavor profile." }
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-zinc-100">{tip.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
