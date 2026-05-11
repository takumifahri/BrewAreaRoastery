import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BrewRepository } from '@/services/brew-service';
import { BrewHero } from '@/components/features/brew/BrewHero';
import { BrewHistory } from '@/components/features/brew/BrewHistory';
import { BrewSidebar } from '@/components/features/brew/BrewSidebar';
import { BrewGuideCard } from '@/components/features/brew/BrewGuideCard';
import { Zap } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const method = BrewRepository.getMethodById(id);

  if (!method) return { title: 'Brew Guide Not Found' };

  return {
    title: `${method.name} Masterclass`,
    description: `Master the art of ${method.name} with our professional guide. Learn the perfect ratio, timing, and technique for ${method.method_type} brewing.`,
    openGraph: {
      title: `${method.name} Brewing Masterclass | BAR`,
      description: method.short_desc,
      images: [method.image],
    }
  };
}

export default async function BrewDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const method = BrewRepository.getMethodById(id);

  if (!method) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-20 pt-20">
      <BrewHero method={method} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-20">
          
          <BrewHistory history={method.history} />

          {/* Guides Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
              <Zap className="w-8 h-8 text-primary" />
              Brewing Guides
            </div>
            
            {method.guides.map((guide, idx) => (
              <BrewGuideCard key={idx} guide={guide} />
            ))}
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <BrewSidebar method={method} />
      </div>
    </div>
  );
}
