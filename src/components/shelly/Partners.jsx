import SceneHead from './SceneHead';

const partners = [
  'רשות מקרקעי ישראל',
  'משרד הבינוי והשיכון',
  'משרד האוצר',
  'מחיר למשתכן',
  'בנק לאומי',
  'מזרחי טפחות',
];

export default function Partners() {
  return (
    <section id="partners" className="relative bg-[#e9e6df] py-20 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SceneHead
          num="07 — שותפים"
          eyebrow="עובדים מול הגופים המובילים"
          title={<>אמון <em className="not-italic text-[#5f9c36]">שנבנה לאורך שנים.</em></>}
        />
        <div className="su-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--su-hair)] border border-[var(--su-hair)] rounded-sm overflow-hidden">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-[#f1efea] flex items-center justify-center text-center px-4 py-10 text-[#6b675f] hover:text-[#5f9c36] hover:bg-white transition-colors text-sm leading-snug min-h-[120px]"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}