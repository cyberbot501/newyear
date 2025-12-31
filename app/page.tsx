'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import YearIntro from '@/components/YearIntro'
import profile from '@/public/profile.jpg'
  
export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  // useEffect(() => {
  //   // Optional: Check if user has seen intro before
  //   // Remove this if you want intro to show every time
  //   const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
  //   if (hasSeenIntro) {
  //     setShowIntro(false)
  //   }
  // }, [])

  const handleExplore = () => {
    setShowIntro(false)
    sessionStorage.setItem('hasSeenIntro', 'true')
    // Smooth scroll to top after intro disappears
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  if (showIntro) {
    return <YearIntro onExplore={handleExplore} />
  }

  return (
    <main className="min-h-screen yoruba-pattern yoruba-geometric relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
      {/* Hero Section */}
      <section id="hero" className="relative px-4 pt-32 md:pt-40 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yoruba-gold shadow-2xl animate-bounce-in hover-lift hover-glow animate-border-glow"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 shimmer" />
              <Image
                src={profile}
                alt="Akinrinde Joel - Oni Imo Ero Cyberbot501"
                fill
                className="object-cover relative z-10"
                priority
              />
            </div>

            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* New Year Greeting */}
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-yoruba-gold text-yoruba animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                Ọdún Tuntun O!
              </h1>
              <p 
                className="text-2xl md:text-3xl lg:text-4xl text-white text-yoruba font-semibold animate-slide-in-right"
                style={{ animationDelay: '0.6s' }}
              >
                Káàbọ̀ sí Ọdún 2026
              </p>

              {/* Name and Role */}
              <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <p className="text-2xl md:text-3xl text-yoruba-gold font-bold hover-lift inline-block mb-2">
                  Mo jẹ́ Akinrinde Joel
                </p>
                <p className="text-lg md:text-xl text-white/90 animate-twinkle mb-2">
                  (Dev-cyberbot501)
                </p>
                <p className="text-xl md:text-2xl text-yoruba-gold font-semibold hover-lift inline-block">
                  Onímọ̀ Ẹrọ / Olùdáṣe Sọ́fítíwèè
                </p>
                <p className="text-lg md:text-xl text-yoruba-gold/90 italic">
                  Oníìmọ̀ Ẹ̀rọ Cyberbot501
                </p>
              </div>

              {/* Strong Headline - Tech + Yoruba Culture */}
              <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yoruba-gold text-yoruba leading-tight mb-4">
                  Tẹ́knọ́lọ́jì pẹ̀lú àṣà Yorùbá
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 italic">
                  Fífi ìmọ̀ ẹ̀rọ ṣe ìgbéga àwọn ènìyàn pẹ̀lú àṣà àti ìmọ̀
                </p>
              </div>

              {/* Inspiring Introduction */}
              <div className="pt-6 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
                <p className="text-lg md:text-xl text-white leading-relaxed text-yoruba max-w-2xl">
                  Mo n ṣe ìgbéga ọ̀nà tẹ́knọ́lọ́jì láti fi ìmọ̀ ẹ̀rọ wé àwọn ènìyàn ní oríṣiriṣi àgbáyé. 
                  Nípa fífi àṣà Yorùbá ṣopọ̀ mọ́ ìmọ̀ ẹ̀rọ, mo n ṣe àfihàn bí a ṣe lè fi tẹ́knọ́lọ́jì ṣe ìrànlọ́wọ́ fún àwọn ènìyàn 
                  ní ọ̀nà tí ó tóbi. Bẹ́ẹ̀ ni mo n ṣe àwọn àfihàn tó dùn láti kọ́ àwọn onímọ̀ ẹ̀rọ nípa ìlú ìkànnì 
                  àti ìṣẹ́lẹ̀ tẹ́knọ́lọ́jì, nípa fífi èdè àti àṣà Yorùbá ṣe ìgbéga ìmọ̀.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-yoruba-gold text-center mb-8 text-yoruba animate-rotate-in hover-spin inline-block"
            style={{ animationDelay: '0.2s' }}
          >
            Ki ni mo n se?
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed text-yoruba">
            <p 
              className="text-center animate-fade-in-up hover-lift"
              style={{ animationDelay: '0.4s' }}
            >
              Àkọsílẹ̀ Kíkún

Mo jẹ́ olùdá àkóónú tẹ́knọ́lọ́jì ní èdè Yorùbá, ẹni tí ń ṣiṣẹ́ takuntakun láti mú ìmọ̀ ẹ̀rọ sunmọ́ àwọn ènìyàn nípasẹ̀ èdè àti àṣà wa. Ìdí tí mo fi bẹ̀rẹ̀ ìrìnàjò yìí ni pé mo rí i dájú pé ààyè ń bẹ láàárín àgbáyé tẹ́knọ́lọ́jì àti àṣà wa gẹ́gẹ́ bí Yorùbá, mo sì bẹ̀rẹ̀ sí í ronú pé báwo la ṣe lè dá ààyè yìí pọ̀?
<br/><br/>
Ní ìwádìí àti ìrírí mi, mo rí i pé ohun pàtàkì jùlọ tí ó lè so àṣà àti tẹ́knọ́lọ́jì pọ̀ ni èdè wa. Èdè ni ọ̀nà tí a fi ń rò, tí a fi ń kọ́, tí a sì fi ń kọ́ ìmọ̀ sí ara wa. Ìdí nìyí tí mo fi pinnu láti lo èdè Yorùbá gẹ́gẹ́ bí irinṣẹ́ láti ṣàlàyé ìmọ̀ ẹ̀rọ, kó le jẹ́ pé gbogbo ènìyàn—paapáà jùlọ àwọn tí èdè Gẹ̀ẹ́sì kì í rọrùn fún—lè lóye, kó sì lè rí ara wọn nínú àgbáyé tẹ́knọ́lọ́jì.
<br/><br/>
Mo jẹ́ akẹ́kọ̀ọ́ Ẹ̀kọ́ Kọ̀mputa (Computer Science) nípele 500, mo sì tún jẹ́ Frontend Developer tí mo ń ṣiṣẹ́ pẹ̀lú àwọn ẹ̀rọ ìgbàlódé láti kọ́ àwọn ojú-òpó wẹẹbu tí ó dára, tí ó yara, tí ó sì rọrùn láti lò. Ní àfikún sí i, mo jẹ́ Developer Relations (DevRel), ẹni tí ń fẹ́ràn láti kọ́, láti pin ìmọ̀, àti láti dá àwọn àjọṣe àti àgbègbè (communities) sílẹ̀ fún àwọn onímọ̀ ẹ̀rọ àti àwọn tí ń bẹ̀rẹ̀ ìrìnàjò wọn nínú tech.
<br/><br/>
Ohun tí mo ń ṣe kì í ṣe fífi ìmọ̀ ẹ̀rọ hàn nìkan, ṣùgbọ́n mo tún ń ṣiṣẹ́ láti dá àyíká kan sílẹ̀ níbi tí àwọn ènìyàn lè kọ́, lè béèrè ìbéèrè, lè dàgbà pọ̀, tí wọ́n sì lè ní ìgboyà pé èdè Yorùbá lè jẹ́ apá kan nínú àṣeyọrí wọn nínú àgbáyé tẹ́knọ́lọ́jì.
<br/><br/>
Ìran mi ni láti rí i pé Yorùbá kì í ṣe olùgbọ́ nìkan nínú tech, ṣùgbọ́n pé a tún lè jẹ́ olùdásílẹ̀, olùkọ́, àti adarí nínú rẹ̀—nípasẹ̀ èdè wa, àṣà wa, àti ìmọ̀ wa.
            </p>
          </div>
        </div>
      </section>

      {/* Videos/Episodes Section */}
      <section id="videos" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-yoruba-gold text-center mb-12 text-yoruba animate-fade-in-scale hover-lift inline-block"
            style={{ animationDelay: '0.2s' }}
          >
            Awon Aworan mi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for video/episode cards */}
            {/* You can add your actual video links here */}
            <div 
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="aspect-video bg-yoruba-brown/50 rounded mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 shimmer" />
                <p className="text-yoruba-gold text-lg relative z-10 font-bold group-hover:scale-110 transition-transform">Episode 1</p>
              </div>
              <h3 className="text-xl font-semibold text-yoruba-gold mb-2 group-hover:text-yoruba-gold transition-colors">
                Oju-iwe Aworan
              </h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                Wo awon aworan mi to dara julo nibi
              </p>
            </div>
            
            <div 
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="aspect-video bg-yoruba-brown/50 rounded mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 shimmer" />
                <p className="text-yoruba-gold text-lg relative z-10 font-bold group-hover:scale-110 transition-transform">Episode 2</p>
              </div>
              <h3 className="text-xl font-semibold text-yoruba-gold mb-2 group-hover:text-yoruba-gold transition-colors">
                Oju-iwe Aworan
              </h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                Wo awon aworan mi to dara julo nibi
              </p>
            </div>

            <div 
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="aspect-video bg-yoruba-brown/50 rounded mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 shimmer" />
                <p className="text-yoruba-gold text-lg relative z-10 font-bold group-hover:scale-110 transition-transform">Episode 3</p>
              </div>
              <h3 className="text-xl font-semibold text-yoruba-gold mb-2 group-hover:text-yoruba-gold transition-colors">
                Oju-iwe Aworan
              </h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                Wo awon aworan mi to dara julo nibi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-yoruba-gold text-center mb-4 text-yoruba animate-bounce-in hover-lift inline-block"
            style={{ animationDelay: '0.2s' }}
          >
            Ba mi sọrọ
          </h2>
          <p className="text-center text-white/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Fi irọrùn rẹ ran mi tabi pade mi lori awon ẹrọ ayelujara (Send me a message or reach me on social media)
          </p>

          {/* Contact Form */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-8 md:p-12 border-2 border-yoruba-gold/30 hover:border-yoruba-gold/50 transition-all hover-lift">
              <ContactForm />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-yoruba-gold/30 pt-12">
            <h3 className="text-2xl font-bold text-yoruba-gold text-center mb-8 text-yoruba animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              Pade mi lori Awon Ẹrọ Ayelujara (Find me on Social Media)
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-scale"
                style={{ animationDelay: '0.6s' }}
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-border-glow">
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute inset-0 shimmer" />
                      <svg className="w-12 h-12 mx-auto mb-4 text-yoruba-gold group-hover:scale-150 group-hover:rotate-360 transition-all duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg group-hover:text-yoruba-gold transition-colors">LinkedIn</p>
                  </div>
                </div>
              </Link>

              {/* TikTok */}
              <Link
                href="https://tiktok.com/@your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-scale"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-border-glow">
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute inset-0 shimmer" />
                      <svg className="w-12 h-12 mx-auto mb-4 text-yoruba-gold group-hover:scale-150 group-hover:rotate-360 transition-all duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg group-hover:text-yoruba-gold transition-colors">TikTok</p>
                  </div>
                </div>
              </Link>

              {/* Email */}
              <Link
                href="mailto:your.email@example.com"
                className="group animate-fade-in-scale"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border-2 border-yoruba-gold/50 hover:border-yoruba-gold transition-all hover-lift hover-glow animate-border-glow">
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute inset-0 shimmer" />
                      <svg className="w-12 h-12 mx-auto mb-4 text-yoruba-gold group-hover:scale-150 group-hover:rotate-360 transition-all duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg group-hover:text-yoruba-gold transition-colors">Email</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-white/70 border-t border-yoruba-gold/30 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <p className="text-lg hover-lift inline-block">
          © 2026 Akinrinde Joel (Dev-cyberbot501) - Oni Imo Ero Cyberbot501
        </p>
        <p className="mt-2 animate-twinkle">
          Odun tuntun o! E seun fun wiwo
        </p>
      </footer>
      </div>
    </main>
  )
}
