import { useEffect, useRef, useState } from 'react';
import SceneHead from './SceneHead';

const stats = [
  { to: 535, suffix: '', lab: 'יח״ד נבנו עד היום' },
  { to: 412, suffix: '', lab: 'יח״ד בתכנון' },
  { to: 247, suffix: '', lab: 'יח״ד בשיווק' },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="su-serif text-5xl md:text-6xl font-bold text-[#17151a]">
      {val.toLocaleString('he-IL')}
      <em className="not-italic text-[#5f9c36]">{suffix}</em>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#f1efea] py-20 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SceneHead
          num="06 — מספרים"
          eyebrow="המספרים מאחורי המסע"
          title={<>ניסיון שנמדד <em className="not-italic text-[#5f9c36]">בבתים מאוכלסים.</em></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <div key={s.lab} className={`su-reveal ${i % 2 ? 'su-d1' : ''} border-t border-[var(--su-hair)] pt-6`}>
              <Counter to={s.to} suffix={s.suffix} />
              <div className="text-[#6b675f] text-sm mt-2">{s.lab}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}