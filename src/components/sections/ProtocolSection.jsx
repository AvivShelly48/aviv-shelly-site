import { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const intents = ['Collaborate', 'Hire', 'Chat'];

export default function ProtocolSection() {
  const [name, setName] = useState('');
  const [intent, setIntent] = useState('Collaborate');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !subject.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    toast.success('Message received — I\'ll be in touch.');
  };

  return (
    <section id="protocol" className="py-[15vh] md:py-[20vh] px-6 md:px-12 min-h-screen flex flex-col justify-center">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-display">04</span>
          <div className="w-12 h-[0.5px] bg-primary" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TypewriterText>The Protocol</TypewriterText>
        </h2>
      </div>

      {/* Mad Libs form */}
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-tight">
            <span className="text-foreground">Hello, my name is </span>
            <span className="relative inline-block">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                className="bg-transparent border-b-2 border-primary text-primary placeholder:text-primary/30 focus:outline-none w-[140px] md:w-[200px] font-display text-2xl md:text-4xl lg:text-5xl font-bold"
              />
            </span>
            <span className="text-foreground"> and I want to </span>
            <span className="relative inline-block group">
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="bg-transparent border-b-2 border-primary text-primary focus:outline-none font-display text-2xl md:text-4xl lg:text-5xl font-bold appearance-none pr-6"
              >
                {intents.map((i) => (
                  <option key={i} value={i} className="text-base text-foreground bg-background font-body">{i}</option>
                ))}
              </select>
              <ChevronIcon />
            </span>
            <span className="text-foreground"> regarding </span>
            <span className="relative inline-block">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="a project"
                className="bg-transparent border-b-2 border-primary text-primary placeholder:text-primary/30 focus:outline-none w-[140px] md:w-[240px] font-display text-2xl md:text-4xl lg:text-5xl font-bold"
              />
            </span>
            <span className="text-foreground">.</span>
          </div>

          <motion.button
            data-cursor="SEND"
            onClick={handleSubmit}
            className="mt-12 md:mt-16 flex items-center gap-4 group"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[11px] tracking-[0.25em] uppercase font-display text-foreground group-hover:text-primary transition-colors">
              Send Message
            </span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl space-y-4"
        >
          <h3 className="font-display text-3xl md:text-5xl font-bold text-primary">
            Received.
          </h3>
          <p className="text-muted-foreground text-lg">
            Thank you, {name}. I'll follow up soon about your request to {intent.toLowerCase()}.
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-24 md:pt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-2">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-display">
            Aviv Shelly © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/AvivShelly48"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VIEW"
            className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors font-display"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}