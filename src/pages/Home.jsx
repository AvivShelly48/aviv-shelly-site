import Navbar from '@/components/shelly/Navbar';
import Hero from '@/components/shelly/Hero';
import Domains from '@/components/shelly/Domains';
import Projects from '@/components/shelly/Projects';
import FromField from '@/components/shelly/FromField';
import About from '@/components/shelly/About';
import Contact from '@/components/shelly/Contact';
import Footer from '@/components/shelly/Footer';

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Domains />
      <Projects />
      <FromField />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}