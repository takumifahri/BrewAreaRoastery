'use client';

import { useEffect, useState } from 'react';

import Lottie from 'lottie-react';
import coffeeAnimation from '@/public/coffe.json';

export function SplashScreen() {
  const [stage, setStage] = useState<'typing' | 'pouring' | 'fading' | 'done'>('typing');
  const [text, setText] = useState('');
  const fullText = 'Brew Area Roastery';
  const typingSpeed = 80;

  // Typewriter effect
  useEffect(() => {
    if (stage !== 'typing') return;

    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
        setTimeout(() => setStage('pouring'), 800);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [stage]);

  // Transition to fading
  useEffect(() => {
    if (stage === 'pouring') {
      const timer = setTimeout(() => {
        setStage('fading');
      }, 3500); // Show pouring for 3.5s (to ensure it loads)
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Transition to done
  useEffect(() => {
    if (stage === 'fading') {
      const timer = setTimeout(() => {
        setStage('done');
      }, 1000); // Fade duration
      return () => clearTimeout(timer);
    }
  }, [stage]);

  if (stage === 'done') return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${stage === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {stage === 'typing' && (
          <div className="flex flex-col items-center animate-in fade-in duration-700">
            <h1 className="text-2xl md:text-5xl font-black tracking-[0.3em] text-foreground uppercase text-center flex items-center gap-1">
              {text}
              <span className="w-1 h-8 md:h-12 bg-primary animate-pulse" />
            </h1>
            <div className="mt-4 flex items-center gap-4 justify-center">
                <div className="w-12 h-px bg-primary/30" />
                <span className="text-[10px] font-black tracking-[0.5em] text-primary/60 uppercase">Est. 2024</span>
                <div className="w-12 h-px bg-primary/30" />
            </div>
          </div>
        )}

        {stage === 'pouring' && (
          <div className="w-64 h-64 md:w-96 md:h-96 animate-in zoom-in fade-in duration-1000 flex flex-col items-center justify-center">
            <Lottie 
              animationData={coffeeAnimation}
              loop={true}
              style={{ height: '100%' }}
            />
            <p className="text-center text-[10px] font-black tracking-[0.5em] text-primary/60 uppercase mt-4 animate-pulse">
              Brewing Excellence...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
