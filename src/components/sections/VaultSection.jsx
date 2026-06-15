import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';

const projects = [
  {
    id: 1,
    title: 'VELARO',
    subtitle: 'Luxury Architectural Surfaces',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    year: '2025',
    description: 'Premium brand website for luxury architectural surface systems. Minimalist, engineering-led facade and interior cladding experiences.',
  },
  {
    id: 2,
    title: 'SHELLY URBAN',
    subtitle: 'Urban Development Platform',
    tech: ['React', 'Vite', 'Base44', 'JavaScript'],
    role: 'Lead Developer',
    year: '2025',
    description: 'Full-stack application for urban development management. Built on Base44 platform with modern React architecture.',
  },
  {
    id: 3,
    title: 'SITE PORTFOLIO',
    subtitle: 'Personal Digital Presence',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    role: 'Design & Development',
    year: '2026',
    description: 'A kinetic structuralism approach to personal branding. Custom cursor, magnetic navigation, and scroll-driven animations.',
  },
];

function ProjectCard({ project, image, index }) {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
        <img
          src={image}
          alt={`${project.title} — ${project.subtitle}`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Number overlay */}
        <span className="absolute top-4 left-4 text-[120px] font-display font-bold leading-none text-white/10">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Metadata */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            {project.title}
          </h3>
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-display">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 border border-foreground/10 text-muted-foreground font-display"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Floating HUD on hover (desktop only) */}
      {isHovering && (
        <div
          className="fixed z-50 pointer-events-none hidden lg:block"
          style={{
            left: hoverPos.x + 20,
            top: hoverPos.y - 60,
          }}
        >
          <div className="bg-foreground text-background p-4 text-[11px] tracking-wide font-display uppercase space-y-1 min-w-[180px]">
            <div className="text-background/50">Role</div>
            <div>{project.role}</div>
            <div className="w-full h-[0.5px] bg-background/20 my-2" />
            <div className="text-background/50">Stack</div>
            <div>{project.tech.join(' / ')}</div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function VaultSection({ projectImages }) {
  const scrollRef = useRef(null);

  return (
    <section id="vault" className="py-[15vh] md:py-[20vh]">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-display">02</span>
          <div className="w-12 h-[0.5px] bg-primary" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TypewriterText>The Vault</TypewriterText>
        </h2>
        <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-display max-w-md">
          Selected works — curated for precision, built for impact
        </p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto px-6 md:px-12 pb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              image={projectImages[i]}
              index={i}
            />
          ))}
          {/* Spacer */}
          <div className="flex-shrink-0 w-6 md:w-12" />
        </div>
      </div>
    </section>
  );
}