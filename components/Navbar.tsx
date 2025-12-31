'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-yoruba-gold/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div
            className="flex-shrink-0 cursor-pointer hover-lift"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-xl md:text-2xl font-bold text-yoruba-gold animate-border-glow hover-glow">
              Akinrinde Joel
            </h1>
            <p className="text-xs md:text-sm text-white/80">Oni Imo Ero Cyberbot501</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-yoruba-gold transition-colors duration-300 font-medium hover-lift"
            >
              Ile
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yoruba-gold transition-colors duration-300 font-medium hover-lift"
            >
              Nipa mi
            </button>
            <button
              onClick={() => scrollToSection('videos')}
              className="text-white hover:text-yoruba-gold transition-colors duration-300 font-medium hover-lift"
            >
              Awon Aworan mi
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yoruba-gold transition-colors duration-300 font-medium hover-lift bg-yoruba-gold/20 px-4 py-2 rounded-lg border border-yoruba-gold/50 hover:bg-yoruba-gold/30 hover-glow"
            >
              Ba mi sọrọ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yoruba-gold hover:text-yoruba-gold/80 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2 bg-black/50 backdrop-blur-sm rounded-lg mt-2 mb-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-3 text-white hover:text-yoruba-gold hover:bg-yoruba-gold/20 rounded-lg transition-all hover-lift"
            >
              Ile
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-white hover:text-yoruba-gold hover:bg-yoruba-gold/20 rounded-lg transition-all hover-lift"
            >
              Nipa mi
            </button>
            <button
              onClick={() => scrollToSection('videos')}
              className="block w-full text-left px-4 py-3 text-white hover:text-yoruba-gold hover:bg-yoruba-gold/20 rounded-lg transition-all hover-lift"
            >
              Awon Aworan mi
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-yoruba-gold bg-yoruba-gold/20 border border-yoruba-gold/50 rounded-lg hover:bg-yoruba-gold/30 transition-all hover-lift"
            >
              Ba mi sọrọ
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

