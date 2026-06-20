export default function SceneHead({ num, eyebrow, title, lead }) {
  return (
    <>
      {num && <span className="su-scene-num absolute top-12 md:top-20 left-6 md:left-32">{num}</span>}
      <div className="max-w-[760px] mb-10 md:mb-16">
        <div className="su-eyebrow su-reveal">{eyebrow}</div>
        <h2 className="su-serif font-medium leading-[1.08] text-3xl md:text-5xl mt-4 text-[#17151a] su-reveal su-d1">
          {title}
        </h2>
        {lead && (
          <p className="text-[#6b675f] text-base md:text-lg mt-5 max-w-[52ch] su-reveal su-d2">{lead}</p>
        )}
      </div>
    </>
  );
}