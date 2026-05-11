import { History } from 'lucide-react';
import { BrewingHistory } from '@/types/brew';

interface BrewHistoryProps {
  history: BrewingHistory;
}

export function BrewHistory({ history }: BrewHistoryProps) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
        <History className="w-8 h-8 text-primary" />
        History & Culture
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card p-8 rounded-[2.5rem] border border-border/40">
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Origin</div>
          <div className="text-2xl font-bold text-foreground">{history.origin_country} ({history.invented_year})</div>
          <p className="text-muted-foreground leading-relaxed">
            {history.background}
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Role in Specialty Coffee</div>
          <div className="relative p-6 bg-zinc-900/30 rounded-3xl border border-border/20">
            <p className="text-muted-foreground leading-relaxed italic relative z-10">
              "{history.specialty_coffee_role}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
