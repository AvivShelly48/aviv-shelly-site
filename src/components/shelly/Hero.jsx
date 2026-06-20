import { useEffect, useRef, useState } from 'react';

const DAY = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/cad236d07_day-web.jpg';
const NIGHT = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/dd85c2782_night-web.jpg';

const chapters = [
  {
    eyebrow: 'נדל״ן · התחדשות עירונית · בנייה',
    h1: ['כאן ייבנה', 'הבית הבא שלכם.'],
    cta: 'גלו את הפרויקטים',
  },
  { num: '01', em: 'יוקרה', rest: 'רואים.', text: 'בכל פרט — בחזית, בלובי ובמרפסת.' },
  { num: '02', em: 'מצוינות', rest: 'מרגישים.', text: 'בגימור, בחומרים ובאיכות הבנייה.' },
  { num: '03', em: 'ביטחון', rest: 'חשים.', text: 'ליווי מלא — מהתכנון ועד מסירת המפתח.' },
  {
    num: 'הלובי · קומת הכניסה',
    em: 'הביתה.',
    pre: 'ברוכים הבאים',
    text: 'כאן מתחילים החיים החדשים שלכם.',
    cta: 'כניסה לפרויקטים',
  },
];

export default function Hero() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const active = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
  // night fade-in across scroll
  const nightOpacity = Math.min(1, Math.max(0, (progress - 0.15) / 0.6));

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div ref={wrapRef} id="top" className="relative" style={{ height: '420vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Building day/night */}
        <div className="absolute inset-0">
          <img src={DAY} alt="הר אביטל — הדמיה" className="absolute inset-0 w-full h-full object-cover" />
          <img
            src={NIGHT}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: nightOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Chapter panels */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          {chapters.map((c, i) => (
            <div
              key={i}
              className="absolute inset-x-6 md:inset-x-0 md:px-6 max-w-2xl transition-all duration-700"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? 'translateY(0)' : 'translateY(24px)',
                pointerEvents: active === i ? 'auto' : 'none',
              }}
            >
              {c.eyebrow && <div className="su-eyebrow text-white/90">{c.eyebrow}</div>}
              {c.num && <div className="su-serif text-white/70 text-sm tracking-[0.2em] mb-3">{c.num}</div>}

              {c.h1 ? (
                <h1 className="su-serif text-white font-bold leading-[1.05] mt-5 text-5xl md:text-7xl">
                  {c.h1[0]}
                  <br />
                  <em className="not-italic text-[#84bf52]">{c.h1[1]}</em>
                </h1>
              ) : (
                <h2 className="su-serif text-white font-medium leading-[1.08] text-4xl md:text-6xl">
                  {c.pre && <>{c.pre} </>}
                  {c.em && c.rest ? (
                    <>
                      <em className="not-italic text-[#84bf52]">{c.em}</em> {c.rest}
                    </>
                  ) : (
                    <em className="not-italic text-[#84bf52]">{c.em}</em>
                  )}
                </h2>
              )}

              {c.text && <p className="text-white/80 text-lg mt-5 max-w-md">{c.text}</p>}

              {c.cta && (
                <button
                  onClick={() => go('#projects')}
                  className="su-more text-white mt-8"
                >
                  <span className="su-ln !bg-[#84bf52]" /> {c.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
          <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-white/90 animate-[suScroll_1.8s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style>{`@keyframes suScroll{0%{transform:translateY(-100%)}100%{transform:translateY(300%)}}`}</style>
    </div>
  );
}