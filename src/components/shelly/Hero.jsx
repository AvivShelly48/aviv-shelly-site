import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const HERO_IMG = 'https://base44.app/api/apps/6a2ff9d8f0f6cef4ef4c3d65/files/mp/public/6a2ff9d8f0f6cef4ef4c3d65/dd85c2782_night-web.jpg';

export default function Hero() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="פרויקט מגורים" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-body">
            נדל״ן · התחדשות עירונית · בנייה
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mt-5 leading-tight">
            כאן ייבנה<br />הבית <em className="text-accent not-italic">הבא שלכם.</em>
          </h1>
          <p className="text-primary-foreground/85 text-lg mt-6 leading-relaxed max-w-xl">
            שלי אורבן מתמחה בהתחדשות עירונית, בפרויקטי מחיר למשתכן ובבנייה למגורים — מהתכנון
            ועד מסירת המפתח, תחת קורת גג אחת.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <button
              onClick={() => go('#projects')}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-sm font-medium hover:bg-accent/90 transition-colors"
            >
              לצפייה בפרויקטים
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-primary-foreground/70 text-sm">
              הר אביטל · מגדל בוטיק בשיווק
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}