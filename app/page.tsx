import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { Footer } from '@/components/sections/Footer';
import StarfieldBackground from '@/components/scene/StarfieldBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
         <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
        <Footer />
      </div>
    </main>
  );
}
