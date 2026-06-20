import SceneHead from './SceneHead';
import { MapPin } from 'lucide-react';

const HAR_AVITAL = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/cad236d07_day-web.jpg';
const INDEPENDENCE = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/226f7232d_render-independence.jpg';
const MICHAEL = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/54724a415_render-michael.jpg';
const KEREN = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/d6298c8c4_proj-keren.jpg';
const TZIYONUT = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/f095f1f51_proj-142.jpg';
const LILAC = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/f816a27b4_proj-lilac.jpg';
const SHAAREI = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/38805d621_proj-independence.jpg';

const grid = [
  { title: 'עצמאות · פינוי-בינוי', loc: 'יבנה', status: 'בביצוע', img: INDEPENDENCE, stats: ['202 יח״ד חדשות', '3 מגדלי מגורים'] },
  { title: 'מיכאל', loc: 'מתחם מגורי יוקרה', status: 'בשיווק', img: MICHAEL, stats: ['3 מגדלי מגורים', 'פארק מרחב ירוק'] },
  { title: 'קרן היסוד · מתחם הצעירים', loc: 'אשדוד', status: 'בשיווק', img: KEREN, stats: ['144 דירות מתחדשות', '138 דירות חדשות'] },
  { title: 'הציונות 10 · סיטי פארק', loc: 'אשדוד', status: 'בשיווק', img: TZIYONUT, stats: ['9 קומות', '3 בנייני מגורים'] },
  { title: 'הלילך', loc: 'יבנה', status: 'בשיווק', img: LILAC, stats: ['6 בניינים ברחוב', 'תמ״א 38 + פינוי-בינוי'] },
  { title: 'שערי העיר · רובע 9', loc: 'אשדוד', status: 'בתכנון', img: SHAAREI, stats: ['כ-240 יח״ד', 'מגורים + תעסוקה'] },
];

function GridCard({ p, i }) {
  return (
    <div
      className={`su-reveal ${i % 3 === 1 ? 'su-d1' : i % 3 === 2 ? 'su-d2' : ''} group relative overflow-hidden rounded-sm cursor-pointer h-72`}
    >
      <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <span className="absolute top-4 right-4 bg-[#5f9c36] text-white text-xs px-3 py-1 rounded-sm font-medium">{p.status}</span>
      <div className="absolute bottom-0 inset-x-0 p-6">
        <div className="flex items-center gap-1.5 text-white/80 text-sm mb-1">
          <MapPin className="w-3.5 h-3.5" />
          {p.loc}
        </div>
        <h3 className="su-serif text-2xl font-bold text-white">{p.title}</h3>
        {p.stats && (
          <div className="flex flex-wrap gap-2 mt-3">
            {p.stats.map((s) => (
              <span key={s} className="bg-white/15 text-white text-xs px-2.5 py-1 rounded-sm">{s}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#f1efea] py-20 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SceneHead
          num="04 — העיר"
          eyebrow="הפרויקטים שלנו · ברחבי הארץ"
          title={<>עיר שלמה <em className="not-italic text-[#5f9c36]">של בתים</em><br />שכבר קוראים להם בית.</>}
          lead="כל בניין הוא סיפור. לחצו על פרויקט כדי להתקרב — לראות את ההדמיה, המיקום והסטטוס."
        />

        {/* Featured project */}
        <article className="su-reveal grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-[var(--su-hair)] mb-8 group cursor-pointer bg-white">
          <div className="overflow-hidden h-72 md:h-auto">
            <img src={HAR_AVITAL} alt="הר אביטל" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="bg-[#5f9c36] text-white text-xs px-3 py-1 rounded-sm font-medium w-fit">פרויקט הדגל · בשיווק</span>
            <h3 className="su-serif text-3xl md:text-4xl font-bold mt-4 text-[#17151a]">הר אביטל</h3>
            <div className="text-[#6b675f] text-sm mt-1">מגדל מגורים בוטיק · שפה אדריכלית עכשווית</div>
            <p className="text-[#6b675f] mt-4 leading-relaxed">
              חזית פחם אלגנטית, עמוד עץ חם ומרפסות מרחפות. תאורת LED לינארית שמדגישה כל קומה — בלילה הבניין זוהר.
            </p>
            <span className="su-more text-[#17151a] mt-6"><span className="su-ln" /> צפו בפרויקט</span>
          </div>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((p, i) => (
            <GridCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}