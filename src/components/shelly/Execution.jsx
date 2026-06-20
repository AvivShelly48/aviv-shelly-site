import SceneHead from './SceneHead';

const SITE = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/f095f1f51_proj-142.jpg';
const CRANE = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/226f7232d_render-independence.jpg';
const DONE = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/cad236d07_day-web.jpg';

const steps = [
  { n: '01', t: 'הקרקע', img: SITE },
  { n: '02', t: 'המנוף', img: CRANE },
  { n: '03', t: 'המסירה', img: DONE },
];

export default function Execution() {
  return (
    <section id="execution" className="relative bg-[#e9e6df] py-20 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SceneHead
          num="05 — מהשטח"
          eyebrow="הבנייה עולה · קומה אחר קומה"
          title={<>מהשרטוט <em className="not-italic text-[#5f9c36]">אל המנוף</em>.<br />מהמגרש אל הבית.</>}
          lead="אנחנו לא רק מתכננים — אנחנו בונים. ניהול ביצוע צמוד בשטח, מהיסודות ועד גמר המעטפת."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <figure
              key={s.n}
              className={`su-reveal ${i === 1 ? 'su-d1' : i === 2 ? 'su-d2' : ''} relative overflow-hidden rounded-sm h-80 group`}
            >
              <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div className="su-serif text-white/60 text-4xl font-bold">{s.n}</div>
                <div className="su-serif text-white text-2xl">{s.t}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}