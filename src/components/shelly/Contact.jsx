import { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const interests = [
  { value: 'urban_renewal', label: 'התחדשות עירונית' },
  { value: 'affordable_housing', label: 'מחיר למשתכן' },
  { value: 'construction', label: 'בנייה למגורים' },
  { value: 'landowner', label: 'בעל קרקע / מגרש' },
  { value: 'other', label: 'אחר' },
];

const details = [
  { icon: Phone, label: 'טלפון', value: '000-000-0000' },
  { icon: Mail, label: 'דוא״ל', value: 'info@shelly.co.il' },
  { icon: MapPin, label: 'משרד', value: 'רחוב הדוגמה 1, ישראל' },
  { icon: Clock, label: 'שעות', value: 'א׳–ה׳ · 9:00–18:00' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: 'other', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Lead.create(form);
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase">צור קשר</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              יש לכם מגרש, בניין או חלום?
            </h2>
            <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
              בין אם אתם בעלי דירה בבניין לחידוש, זכאים במחיר למשתכן, או בעלי קרקע — נשמח
              לשבת, להקשיב ולבנות יחד את הצעד הבא.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-sm flex items-center justify-center shrink-0">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{d.label}</div>
                    <div className="text-foreground font-medium">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-sm p-8"
          >
            {done ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground">תודה, קיבלנו!</h3>
                <p className="text-muted-foreground mt-2">נחזור אליכם בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <Input
                  required
                  placeholder="שם מלא"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  required
                  placeholder="טלפון"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="דוא״ל (אופציונלי)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="תחום עניין" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((i) => (
                      <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="ספרו לנו בקצרה..."
                  className="h-28"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageCircle className="w-5 h-5" />}
                  שליחה
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}