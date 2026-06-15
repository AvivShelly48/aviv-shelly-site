import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'שנות ניסיון בענף' },
  { value: '1,200+', label: 'יחידות דיור בתכנון ובבנייה' },
  { value: '18', label: 'פרויקטים פעילים' },
  { value: '900+', label: 'משפחות שכבר בבית' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase">אודות</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              בית טוב לא נמדד ביום המסירה — אלא בעשרים השנה שאחריו.
            </h2>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              שלי אורבן מנהלת את כל שלבי הפרויקט תחת קורת גג אחת — מתכנון אדריכלי מוקפד,
              דרך הבנייה בפועל, ועד מסירת המפתח — בליווי אישי, שקיפות ואמינות לאורך כל הדרך.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary border border-border rounded-sm p-7 text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
                <div className="text-muted-foreground text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-center text-muted-foreground text-sm tracking-wide">
            עובדים בשיתוף ובאישור הגופים המובילים בענף
          </p>
        </div>
      </div>
    </section>
  );
}