import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#domains', label: 'תחומי פעילות' },
  { href: '#projects', label: 'פרויקטים' },
  { href: '#field', label: 'מהשטח' },
  { href: '#about', label: 'אודות' },
  { href: '#contact', label: 'צור קשר' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); go('#top'); }} className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground font-display font-bold text-lg rounded-sm">ש</span>
            <span className="font-display tracking-wide text-foreground">
              SHELLY <span className="text-accent">URBAN</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => go('#contact')}
            className="hidden md:inline-flex bg-primary text-primary-foreground text-sm px-5 py-2 rounded-sm hover:bg-primary/90 transition-colors"
          >
            דברו איתנו
          </button>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="תפריט">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-8 md:hidden flex flex-col gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-2xl font-display text-foreground text-right"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go('#contact')} className="mt-4 bg-primary text-primary-foreground py-3 rounded-sm">
            דברו איתנו
          </button>
        </div>
      )}
    </>
  );
}