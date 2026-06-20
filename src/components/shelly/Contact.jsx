import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Loader2, CheckCircle2 } from 'lucide-react';

const interests = [
  { value: 'urban_renewal', label: 'התחדשות עירונית' },
  { value: 'affordable_housing', label: 'מחיר למשתכן' },
  { value: 'construction', label: 'בנייה למגורים' },
  { value: 'landowner', label: 'עצמאות · יבנה' },
  { value: 'other', label: 'אחר' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: 'urban_renewal', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Lead.create(form);
    setSubmitting(false);
    setDone(true);
  };

  const field =
    'w-full bg-transparent border-b border-[var(--su-hair)] py-3 text-[#17151a] placeholder:text-[#a39e95] focus:outline-none focus:border-[#5f9c36] transition-colors';

  return (
    <section id="contact" className="relative bg-[#f1efea] py-20 md:py-36 px-6">
      <span className="su-scene-num absolute top-12 md:top-20 left-6 md:left-32">08 — מסירת המפתח</span>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20">
        {/* Left */}
        <div>
          <div className="su-eyebrow su-reveal">בואו נתחיל</div>
          <h2 className="su-serif font-medium leading-[1.08] text-4xl md:text-5xl mt-4 text-[#17151a] su-reveal su-d1">
            יש לכם מגרש,<br />בניין או <em className="not-italic text-[#5f9c36]">חלום?</em>
          </h2>
          <p className="text-[#6b675f] text-lg mt-5 max-w-[46ch] su-reveal su-d2">
            השאירו פרטים ונחזור אליכם — או דברו איתנו ישירות. כל פנייה מקבלת ליווי אישי.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 su-reveal su-d2">
            <a href="mailto:Office@shellyurban.co.il" className="bg-[#5f9c36] text-white px-6 py-3 rounded-sm hover:bg-[#447327] transition-colors">
              שלחו מייל
            </a>
            <a href="tel:+97288623366" className="border border-[var(--su-hair)] text-[#17151a] px-6 py-3 rounded-sm hover:border-[#5f9c36] transition-colors">
              08-862-3366
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="su-reveal su-d1">
          {done ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[var(--su-hair)] rounded-sm bg-white">
              <CheckCircle2 className="w-14 h-14 text-[#5f9c36] mb-4" />
              <h3 className="su-serif text-2xl font-bold text-[#17151a]">תודה, קיבלנו!</h3>
              <p className="text-[#6b675f] mt-2">נחזור אליכם בהקדם.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5 bg-white border border-[var(--su-hair)] rounded-sm p-8">
              <div>
                <label className="text-xs text-[#6b675f]">שם מלא</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="ישראל ישראלי" className={field} />
              </div>
              <div>
                <label className="text-xs text-[#6b675f]">טלפון</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="050-000-0000" className={field} />
              </div>
              <div>
                <label className="text-xs text-[#6b675f]">דוא״ל <span className="text-[#a39e95]">(לקבלת אישור)</span></label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@example.com" className={field} />
              </div>
              <div>
                <label className="text-xs text-[#6b675f]">תחום מעניין</label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={field}>
                  {interests.map((i) => (
                    <option key={i.value} value={i.value}>{i.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-[#6b675f]">הודעה</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="ספרו לנו במה נוכל לעזור…" className={`${field} h-24 resize-none`} />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5f9c36] text-white py-3.5 rounded-sm font-medium hover:bg-[#447327] transition-colors disabled:opacity-60"
              >
                {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
                שליחה
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}