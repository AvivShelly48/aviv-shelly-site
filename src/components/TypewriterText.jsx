import useTypewriter from '@/hooks/useTypewriter';

export default function TypewriterText({ children, className = '', delay = 0 }) {
  const { ref, isRevealed } = useTypewriter(0.2);

  return (
    <span
      ref={ref}
      className={`typewriter-line inline-block ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}