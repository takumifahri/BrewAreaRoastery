import { BrewMethod } from '@/types/brew';

interface BrewSidebarProps {
  method: BrewMethod;
}

export function BrewSidebar({ method }: BrewSidebarProps) {
  return (
    <div className="space-y-8">
      <div className="bg-card p-8 rounded-[2rem] border border-border/40 space-y-10 sticky top-28">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border/40 pb-4">Characteristics</h3>
          <div className="space-y-6">
            {Object.entries(method.characteristics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{key}</span>
                <span className="text-primary font-bold">{value === true ? 'Yes' : value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Recommended Roast</h4>
          <div className="flex flex-wrap gap-2">
            {method.recommended_roast.map(roast => (
              <span key={roast} className="px-4 py-2 bg-secondary/50 border border-border/40 rounded-xl text-[10px] font-black uppercase tracking-wider text-foreground">
                {roast}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Best Beans</h4>
          <div className="flex flex-wrap gap-2">
            {method.recommended_beans.map(bean => (
              <span key={bean} className="px-4 py-2 bg-primary/5 border border-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-wider">
                {bean}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Equipment Needed</h4>
          <div className="space-y-4">
            {method.equipment.map(item => (
              <div key={item} className="flex items-center gap-4 text-sm text-muted-foreground group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
