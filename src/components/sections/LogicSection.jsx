import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';

const skills = [
  { category: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'BACKEND', items: ['Node.js', 'Base44', 'REST APIs', 'Deno'] },
  { category: 'TOOLS', items: ['Git', 'Vite', 'Figma', 'Vercel'] },
];

export default function LogicSection() {
  return (
    <section id="logic" className="py-[15vh] md:py-[20vh] px-6 md:px-12">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-display">03</span>
          <div className="w-12 h-[0.5px] bg-primary" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TypewriterText>The Logic</TypewriterText>
        </h2>
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — sticky bio */}
        <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-primary font-display mb-4">
              About
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Building digital systems with architectural precision
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm Aviv Shelly — a developer and builder focused on creating 
              premium digital experiences. My approach combines systemic thinking 
              with creative execution, treating every interface as an opportunity 
              to engineer something extraordinary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 border-t border-foreground/10"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              From luxury brand sites to full-stack urban development platforms, 
              I bring a meticulous eye for detail and a deep appreciation for 
              how structure creates beauty. Every line of code is deliberate.
            </p>
          </motion.div>
        </div>

        {/* Right — skills & methodology */}
        <div className="space-y-12">
          {/* Skills grid */}
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-display mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm border border-foreground/10 text-foreground/80 hover:border-primary hover:text-primary transition-colors duration-300 font-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-foreground/10"
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-display mb-6">
              Methodology
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Research', desc: 'Deep dive into requirements, users, and technical landscape' },
                { num: '02', title: 'Architect', desc: 'Design systems and data structures before writing code' },
                { num: '03', title: 'Execute', desc: 'Ship with precision, iterate with purpose' },
              ].map((step) => (
                <div key={step.num} className="space-y-2">
                  <span className="text-primary font-display text-sm font-bold">{step.num}</span>
                  <h4 className="font-display font-bold text-lg">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}