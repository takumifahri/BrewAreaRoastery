import Image from 'next/image';

interface ProductCardProps {
  image: string;
  name: string;
  origin: string;
  roastLevel: string;
  notes: string;
  price: string;
}

export function ProductCard({
  image,
  name,
  origin,
  roastLevel,
  notes,
  price,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border/40 hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{origin}</p>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 whitespace-nowrap">
            {roastLevel}
          </span>
        </div>

        {/* Flavor Notes */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2 italic">
          {notes}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/40">
          <span className="text-2xl font-black text-primary tracking-tight">{price}</span>
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl hover:opacity-90 transition-all font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
