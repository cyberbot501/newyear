'use client'

export default function AnimatedBackground() {
  // Predefined arrays for stable random values
  const positions = Array.from({ length: 20 }, (_, i) => ({
    left: (i * 47) % 100,
    top: (i * 73) % 100,
    delay: (i * 0.3) % 5,
    duration: 10 + (i * 1.2) % 20,
    size: 20 + (i * 3) % 60,
  }))

  const circlePositions = Array.from({ length: 15 }, (_, i) => ({
    left: (i * 61) % 100,
    top: (i * 83) % 100,
    delay: (i * 0.4) % 8,
    duration: 15 + (i * 1.5) % 25,
    size: 30 + (i * 4) % 80,
  }))

  const particlePositions = Array.from({ length: 30 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 59) % 100,
    delay: (i * 0.2) % 10,
    duration: 8 + (i * 0.8) % 15,
  }))

  const orbPositions = Array.from({ length: 8 }, (_, i) => ({
    left: (i * 79) % 100,
    top: (i * 97) % 100,
    delay: (i * 0.5) % 6,
    duration: 12 + (i * 2) % 18,
    size: 50 + (i * 8) % 100,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Geometric Shapes */}
      {positions.map((pos, i) => (
        <div
          key={`shape-${i}`}
          className="absolute animate-float"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${pos.duration}s`,
          }}
        >
          <div
            className={`${
              i % 4 === 0
                ? 'bg-yoruba-gold/20 rotate-45'
                : i % 4 === 1
                ? 'bg-yoruba-red/20 rounded-full'
                : i % 4 === 2
                ? 'bg-yoruba-orange/20 rotate-12'
                : 'bg-yoruba-gold/10 rounded-full rotate-45'
            } animate-spin-slow`}
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
            }}
          />
        </div>
      ))}

      {/* Rotating Circles */}
      {circlePositions.map((pos, i) => (
        <div
          key={`circle-${i}`}
          className="absolute animate-float-reverse"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${pos.duration}s`,
          }}
        >
          <div
            className="border-2 border-yoruba-gold/30 rounded-full animate-pulse-slow"
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
            }}
          />
        </div>
      ))}

      {/* Floating Particles */}
      {particlePositions.map((pos, i) => (
        <div
          key={`particle-${i}`}
          className="absolute animate-particle"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${pos.duration}s`,
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              i % 3 === 0
                ? 'bg-yoruba-gold'
                : i % 3 === 1
                ? 'bg-yoruba-red'
                : 'bg-yoruba-orange'
            } animate-twinkle`}
          />
        </div>
      ))}

      {/* Rotating Lines/Spokes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`spoke-${i}`}
          className="absolute animate-spin-very-slow"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${10 + Math.floor(i / 4) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '20s',
          }}
        >
          <div
            className="w-1 h-20 bg-gradient-to-b from-yoruba-gold/40 to-transparent origin-center"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        </div>
      ))}

      {/* Pulsing Orbs */}
      {orbPositions.map((pos, i) => (
        <div
          key={`orb-${i}`}
          className="absolute animate-float-pulse"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${pos.duration}s`,
          }}
        >
          <div
            className={`rounded-full blur-xl ${
              i % 2 === 0 ? 'bg-yoruba-gold/30' : 'bg-yoruba-red/30'
            } animate-pulse-orb`}
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
            }}
          />
        </div>
      ))}

      {/* Zigzag Lines */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={`zigzag-${i}`}
          className="absolute animate-slide-x"
          style={{
            top: `${20 + i * 15}%`,
            left: '-100px',
            animationDelay: `${i * 2}s`,
            animationDuration: `${20 + i * 5}s`,
          }}
          width="200"
          height="4"
          viewBox="0 0 200 4"
        >
          <path
            d="M0,2 L40,2 L50,0 L60,4 L70,0 L80,4 L90,0 L100,4 L110,0 L120,4 L130,0 L140,4 L150,0 L160,4 L170,0 L180,4 L190,0 L200,2"
            stroke="rgba(212, 175, 55, 0.3)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ))}
    </div>
  )
}

