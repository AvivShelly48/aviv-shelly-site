import CustomCursor from '@/components/CustomCursor';
import MagneticNav from '@/components/MagneticNav';
import ScrollTimeline from '@/components/ScrollTimeline';
import HeroSection from '@/components/sections/HeroSection';
import VaultSection from '@/components/sections/VaultSection';
import LogicSection from '@/components/sections/LogicSection';
import ProtocolSection from '@/components/sections/ProtocolSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/4fe9d6c72_generated_9b8f8697.png';
const PROJECT_IMAGES = [
  'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/aa4e97e42_generated_3a5cb6b3.png',
  'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/e3b0a8414_generated_b7bbfa83.png',
  'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/2585ab8ed_generated_b1c52ab8.png',
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <MagneticNav />
      <ScrollTimeline />

      <HeroSection heroImage={HERO_IMAGE} />

      {/* Glass rule separator */}
      <div className="mx-6 md:mx-12 h-[0.5px] bg-foreground/10" />

      <VaultSection projectImages={PROJECT_IMAGES} />

      <div className="mx-6 md:mx-12 h-[0.5px] bg-foreground/10" />

      <LogicSection />

      <div className="mx-6 md:mx-12 h-[0.5px] bg-foreground/10" />

      <ProtocolSection />
    </div>
  );
}