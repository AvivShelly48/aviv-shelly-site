import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.left = pos.current.x + 'px';
        cursorRef.current.style.top = pos.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) {
        setIsHovering(true);
        setHoverText(el.getAttribute('data-cursor') || 'VIEW');
      }
    };
    const onLeave = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) {
        setIsHovering(false);
        setHoverText('');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor-lens ${isHovering ? 'hovering' : ''}`}
    >
      {isHovering && <span>{hoverText}</span>}
    </div>
  );
}