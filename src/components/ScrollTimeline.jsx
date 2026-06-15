import { useState, useEffect } from 'react';

const sections = [
  { id: 'epoch', label: 'THE EPOCH' },
  { id: 'vault', label: 'THE VAULT' },
  { id: 'logic', label: 'THE LOGIC' },
  { id: 'protocol', label: 'THE PROTOCOL' },
];

export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('epoch');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {/* Progress line */}
      <div className="absolute right-[3px] top-0 bottom-0 w-[1px] bg-foreground/10">
        <div
          className="w-full bg-primary transition-all duration-300 origin-top"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {sections.map((s) => (
        <button
          key={s.id}
          data-cursor="GO"
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="relative flex items-center gap-3 group"
        >
          <span
            className={`text-[10px] tracking-[0.2em] uppercase font-display transition-all duration-500 ${
              activeSection === s.id ? 'text-primary opacity-100 translate-x-0' : 'text-foreground/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            {s.label}
          </span>
          <div
            className={`w-[7px] h-[7px] rounded-full border transition-all duration-500 ${
              activeSection === s.id ? 'bg-primary border-primary scale-100' : 'bg-transparent border-foreground/20 scale-75 group-hover:border-foreground/50'
            }`}
          />
        </button>
      ))}
    </div>
  );
}