import useReveal from '@/hooks/useReveal';
import Navbar from '@/components/shelly/Navbar';
import Hero from '@/components/shelly/Hero';
import Projects from '@/components/shelly/Projects';
import Execution from '@/components/shelly/Execution';
import Stats from '@/components/shelly/Stats';
import Partners from '@/components/shelly/Partners';
import Contact from '@/components/shelly/Contact.jsx';
import Footer from '@/components/shelly/Footer.jsx';

export default function Home() {
  useReveal();

  return (
    <div dir="rtl" className="min-h-screen bg-[#f1efea]">
      <div className="su-grain" />
      <Navbar />
      <Hero />
      <Projects />
      <Execution />
      <Stats />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}