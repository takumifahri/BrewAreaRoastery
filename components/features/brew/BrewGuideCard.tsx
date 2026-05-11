import { 
  Scale, 
  Thermometer, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Lightbulb, 
  AlertTriangle 
} from 'lucide-react';
import { BrewingGuide } from '@/types/brew';

interface BrewGuideCardProps {
  guide: BrewingGuide;
}

export function BrewGuideCard({ guide }: BrewGuideCardProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold text-foreground">{guide.name}</h3>
        <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
          {guide.difficulty}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Scale, label: 'Dose', value: `${guide.coffee_dose_grams}g` },
          { icon: Thermometer, label: 'Temp', value: `${guide.water_temperature_celsius}°C` },
          { icon: Clock, label: 'Ratio', value: guide.brew_ratio },
          { icon: Zap, label: 'Grind', value: guide.grind_size },
        ].map((item, i) => (
          <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 text-center group hover:border-primary/30 transition-colors">
            <item.icon className="w-5 h-5 mx-auto mb-3 text-primary/60 group-hover:text-primary transition-colors" />
            <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-black mb-1">{item.label}</div>
            <div className="font-bold text-zinc-100">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 border border-zinc-800 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              The Process
            </h4>
            <ol className="space-y-6">
              {guide.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex gap-4 group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center font-bold transition-colors">
                    {sIdx + 1}
                  </span>
                  <p className="text-zinc-400 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-zinc-100 flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Pro Tips
              </h4>
              <ul className="space-y-4">
                {guide.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 text-zinc-400 text-sm italic">
                    "{tip}"
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-zinc-100 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Common Mistakes
              </h4>
              <ul className="space-y-4">
                {guide.common_mistakes.map((mistake, mIdx) => (
                  <li key={mIdx} className="text-zinc-500 text-sm flex gap-3">
                    <span className="text-red-500/50">•</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
