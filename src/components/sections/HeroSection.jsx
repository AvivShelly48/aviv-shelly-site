import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="epoch"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[0.5px] h-full bg-foreground/5" />
        <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-foreground/5" />
        <div className="absolute top-0 left-3/4 w-[0.5px] h-full bg-foreground/5" />
        <div className="absolute top-1/3 left-0 w-full h-[0.5px] bg-foreground/5" />
        <div className="absolute top-2/3 left-0 w-full h-[0.5px] bg-foreground/5" />
      </div>

      {/* Center image with parallax */}
      <motion.div
        className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-none overflow-hidden"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src={heroImage}
          alt="Architectural texture — brushed aluminum macro"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-foreground/5" />
      </motion.div>

      {/* AVIV — top left */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-6 md:top-12 md:left-12 font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-foreground"
      >
        AVIV
      </motion.h1>

      {/* SHELLY — bottom right */}
      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-20 right-6 md:bottom-16 md:right-12 font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-foreground"
      >
        SHELLY
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-20 left-6 md:bottom-16 md:left-12 text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-display"
      >
        Developer · Builder · Creator
      </motion.p>

      {/* Scroll cue */}
      <motion.button
        data-cursor="GO"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-display">Scroll to enter</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}