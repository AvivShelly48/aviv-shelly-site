import { motion } from 'framer-motion';

const CRANE = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/739750eba_generated_image.png';
const DONE = 'https://media.base44.com/images/public/6a2ff9d8f0f6cef4ef4c3d65/7fd257515_generated_image.png';

const items = [
  { img: CRANE, badge: 'שלד · עגורן צריח', title: 'מגדלים בביצוע · קו הרקיע' },
  { img: DONE, badge: 'הושלם ונמסר', title: 'מסירת מפתח · אכלוס' },
];

export default function FromField() {
  return (
    <section id="field" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase">מהשטח · ביצוע</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            לא רק הדמיות.
          </h2>
          <p className="text-primary-foreground/80 text-lg mt-4">
            תיעוד אמיתי מאתרי הבנייה שלנו, משלב השלד ועד המסירה.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative h-96 overflow-hidden rounded-sm"
            >
              <img src={it.img} alt={it.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute top-4 right-4 bg-background/90 text-foreground text-xs px-3 py-1 rounded-sm">
                {it.badge}
              </span>
              <h3 className="absolute bottom-6 right-6 font-display text-2xl font-bold text-white">{it.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}