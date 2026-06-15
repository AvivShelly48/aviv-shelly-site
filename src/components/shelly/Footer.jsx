import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-primary-foreground/10 text-accent font-display font-bold rounded-sm">ש</span>
          <div>
            <div className="font-display tracking-wide">SHELLY <span className="text-accent">URBAN</span></div>
            <div className="text-xs text-primary-foreground/60">נדל״ן · התחדשות · בנייה</div>
          </div>
        </div>

        <p className="text-sm text-primary-foreground/60">© 2026 שלי אורבן. כל הזכויות שמורות.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
        >
          חזרה למעלה
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}