'use client'

import { useState, useEffect } from 'react'
import AnimatedBackground from '@/components/AnimatedBackground'

interface YearIntroProps {
  onExplore: () => void
}

export default function YearIntro({ onExplore }: YearIntroProps) {
  const [currentYear, setCurrentYear] = useState(2025)
  const [targetYear, setTargetYear] = useState(2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [show2026, setShow2026] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const currentYearNum = now.getFullYear()
      const newYear2026 = new Date('2026-01-01T00:00:00')
      
      setCurrentYear(currentYearNum)

      if (currentYearNum >= 2026) {
        // It's 2026 or later, show 2026 (but don't auto-transition)
        setShow2026(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        // Calculate time until 2026
        const difference = newYear2026.getTime() - now.getTime()
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)
          
          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          // Time has passed, show 2026 (but don't auto-transition)
          setShow2026(true)
        }
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed py-20 inset-0 z-50 flex items-center justify-center yoruba-pattern yoruba-geometric relative overflow-hidden">
      {/* Yoruba Animated Background */}
      <AnimatedBackground />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Year Display with Animation */}
        <div className="mb-8 relative h-32 md:h-40 flex items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Calendar/Date Container */}
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border-4 border-yoruba-gold shadow-2xl animate-border-glow">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-yoruba-gold relative h-24 md:h-32 overflow-hidden">
                {/* 2025 - Rolling Up */}
                {!show2026 && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${
                      isAnimating
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-0 opacity-100'
                    }`}
                  >
                    <span className="flex items-center">
                      <span>202</span>
                      <span
                        className={`inline-block transition-transform duration-1000 ${
                          isAnimating ? 'translate-y-[-200%]' : 'translate-y-0'
                        }`}
                      >
                        5
                      </span>
                    </span>
                  </div>
                )}

                {/* 2026 - Coming from Bottom */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${
                    show2026
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                >
                  <span className="flex items-center">
                    <span>202</span>
                    <span
                      className={`inline-block transition-transform duration-1000 ${
                        show2026
                          ? 'translate-y-0'
                          : 'translate-y-[200%]'
                      }`}
                    >
                      6
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        {!show2026 && (
          <div className="mb-8 animate-fade-in-up">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-5 md:p-6 border-2 border-yoruba-gold/40 shadow-xl">
              <p className="text-sm md:text-base text-white/90 mb-4 text-yoruba font-semibold">
                Àkókò tó kù tí ó fi dé Ọdún 2026
              </p>
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yoruba-gold mb-1">{timeLeft.days}</div>
                  <div className="text-xs md:text-sm text-white/70">Ọjọ́</div>
                </div>
                <div className="text-yoruba-gold text-2xl md:text-3xl">:</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yoruba-gold mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs md:text-sm text-white/70">Wákàtí</div>
                </div>
                <div className="text-yoruba-gold text-2xl md:text-3xl">:</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yoruba-gold mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs md:text-sm text-white/70">Ìṣẹ́jú</div>
                </div>
                <div className="text-yoruba-gold text-2xl md:text-3xl">:</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yoruba-gold mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs md:text-sm text-white/70">Àkókò</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Greeting */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoruba-gold text-yoruba mb-4">
            Oníìmọ̀ Ẹ̀rọ Cyberbot501
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-yoruba mb-4">
            Ọdún Tuntun O!
          </h2>
          <p className="text-xl md:text-2xl text-yoruba-gold/90 text-yoruba">
            Káàbọ̀ sí Ọdún 2026
          </p>
        </div>

        {/* Short Message */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <p className="text-lg md:text-xl lg:text-2xl text-white text-yoruba leading-relaxed max-w-2xl mx-auto">
            Káàbọ̀ sí àgbáyé tẹ́knọ́lọ́jì pẹ̀lú àṣà Yorùbá. Jẹ́ ká jọ ṣe ìgbéga ìmọ̀ ẹ̀rọ 
            pẹ̀lú ìmọ̀ àti àṣà tó tóbi.
          </p>
        </div>

        {/* Explore Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <button
            onClick={onExplore}
            className="px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yoruba-gold to-yoruba-orange text-black font-bold text-lg md:text-xl rounded-lg hover-lift hover-glow transition-all animate-border-glow shadow-2xl"
          >
            Ṣàwárí (Explore)
          </button>
        </div>
      </div>

    </div>
  )
}

