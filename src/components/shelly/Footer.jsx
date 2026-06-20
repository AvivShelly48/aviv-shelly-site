import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#17151a] text-white/90 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 flex items-center justify-center bg-white/10 text-[#84bf52] font-bold rounded-sm" style={{ fontFamily: 'var(--su-serif)' }}>ש</span>
          <div>
            <div className="tracking-wide text-sm">SHELLY <span className="text-[#84bf52]">URBAN</span></div>
            <div className="text-xs text-white/50">נדל״ן · התחדשות · בנייה</div>
          </div>
        </div>

        <p className="text-sm text-white/50">© 2026 שלי אורבן. כל הזכויות שמורות.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#84bf52] transition-colors"
        >
          חזרה למעלה
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}