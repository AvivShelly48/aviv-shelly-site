import { motion } from 'framer-motion';
import { Building2, KeyRound, HardHat } from 'lucide-react';

const domains = [
  {
    icon: Building2,
    tag: 'א',
    title: 'התחדשות עירונית',
    desc: 'פינוי-בינוי ותמ״א 38. מחליפים מבנים ישנים בשכונות חדשות, ומשביחים את הנכס של כל בעל דירה — בשקיפות מלאה.',
  },
  {
    icon: KeyRound,
    tag: 'ב',
    title: 'מחיר למשתכן',
    desc: 'דירה בהנחה בשיתוף המדינה. מלווים את הזוכים מרגע ההגרלה ועד קבלת המפתח, בשקט ובוודאות.',
  },
  {
    icon: HardHat,
    tag: 'ג',
    title: 'בנייה למגורים',
    desc: 'תכנון, ניהול וביצוע מקצה לקצה. צוות אחד אחראי על הפרויקט כולו — מהיסודות ועד הפרט האחרון.',
  },
];

export default function Domains() {
  return (
    <section id="domains" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase">תחומי פעילות</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            שלושה תחומים, שפה אחת של איכות.
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            מקרקע פנויה ועד מבנה ישן — אנחנו מובילים את הפרויקט בכל שלב.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-400"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-400">
                  <d.icon className="w-7 h-7" />
                </div>
                <span className="font-display text-5xl text-border group-hover:text-accent/40 transition-colors">{d.tag}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{d.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}