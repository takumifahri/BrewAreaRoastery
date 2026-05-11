import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BrewMethod } from '@/types/brew';

interface BrewHeroProps {
  method: BrewMethod;
}

export function BrewHero({ method }: BrewHeroProps) {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Image 
        src={`/images/brew/${method.id}.png`}
        alt={method.title}
        fill
        className="object-cover scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute inset-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-12 md:py-20">
          <div>
            <Link 
              href="/#brew" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-2xl text-zinc-100 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 font-bold group shadow-2xl"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform duration-500" />
              <span className="text-sm md:text-base tracking-tight">Back to Guide</span>
            </Link>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary rounded-full" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary">
                Brewing Masterclass
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              {method.title}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl leading-relaxed font-medium">
              {method.short_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
