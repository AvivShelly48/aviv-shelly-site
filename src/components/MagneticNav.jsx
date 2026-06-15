import { useRef, useState, useCallback } from 'react';

function MagneticItem({ label, position, onClick }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    setOffset({ x: dx, y: dy });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  };

  return (
    <button
      ref={ref}
      data-cursor="GO"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`fixed ${positionClasses[position]} z-50 hidden lg:block`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span className="text-[11px] font-display tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors duration-500">
        {label}
      </span>
    </button>
  );
}

export default function MagneticNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <MagneticItem label="The Vault" position="top-right" onClick={() => scrollTo('vault')} />
      <MagneticItem label="The Logic" position="bottom-left" onClick={() => scrollTo('logic')} />
      <MagneticItem label="The Protocol" position="bottom-right" onClick={() => scrollTo('protocol')} />
    </>
  );
}