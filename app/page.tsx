import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { TeamSection } from '@/components/sections/TeamSection';
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
        <AboutSection />
        <ProjectsSection />
        <EventsSection />
        <TeamSection />
        <Footer />
      </div>
    </main>
  );
}
