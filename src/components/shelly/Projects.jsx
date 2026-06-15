import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const NEIGHBORHOOD = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/fb39d1941_generated_image.png';
const RENDER = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/2dc3d2911_generated_image.png';
const DONE = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/7fd257515_generated_image.png';

const projects = [
  { title: 'הלילך 7', city: 'יבנה', status: 'בשיווק', img: RENDER, big: true,
    desc: 'מגדל מגורים חדש בלב יבנה — דירות 3–5 חדרים עם נוף פתוח.' },
  { title: 'העצמאות 28–32', city: 'פינוי-בינוי', status: 'בשיווק', img: NEIGHBORHOOD, big: true,
    desc: 'החלפת מבנים ישנים במגדלי מגורים חדשים, והשבחת הנכס של כל בעל דירה.' },
  { title: 'הלילך 5', city: 'יבנה', status: 'בבנייה', img: DONE },
  { title: 'הציונות 10 · סיטי פארק', city: 'אשדוד', status: 'התחדשות', img: NEIGHBORHOOD },
  { title: 'קרן היסוד · מתחם הצעירים', city: 'אשדוד', status: 'פינוי-בינוי', img: RENDER },
];

function Card({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${p.big ? 'md:col-span-2 h-80' : 'h-72'}`}
    >
      <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-sm font-medium">
        {p.status}
      </span>
      <div className="absolute bottom-0 inset-x-0 p-6">
        <div className="flex items-center gap-1.5 text-primary-foreground/80 text-sm mb-1">
          <MapPin className="w-3.5 h-3.5" />
          {p.city}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{p.title}</h3>
        {p.desc && <p className="text-primary-foreground/80 text-sm mt-2 max-w-md">{p.desc}</p>}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase">פרויקטים נבחרים</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            בשיווק, בבנייה ובאכלוס.
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            תיק עבודות חי — מהדמיה ראשונית ועד מסירת מפתח.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}