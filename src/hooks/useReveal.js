import { useEffect } from 'react';

/**
 * Adds the `su-in` class to every `.su-reveal` element once it scrolls into view.
 * Mimics the live site's scroll-reveal animation system.
 */
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.su-reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('su-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('su-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}