export default function ParticlesBackground() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="particles-bg">
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle light-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${20 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
