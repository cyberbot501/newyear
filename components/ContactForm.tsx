'use client'

import { useState } from 'react'

export default function ContactForm() {
 

  

  return (
    <form  className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-white font-semibold mb-2 text-yoruba">
          Orukọ rẹ (Your Name)
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all hover-lift"
          placeholder="Tẹ orukọ rẹ sibi (Enter your name here)"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-white font-semibold mb-2 text-yoruba">
          Imeeli rẹ 
        </label>
        <input
          type="email"
         
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all hover-lift"
          placeholder="Tẹ imeeli rẹ sibi (Enter your email here)"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-white font-semibold mb-2 text-yoruba">
          Irọrùn rẹ 
        </label>
        <textarea

          rows={6}
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all resize-none hover-lift"
          placeholder="Tẹ irọrùn rẹ sibi (Enter your message here)"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-yoruba-gold to-yoruba-orange text-black font-bold text-lg rounded-lg hover-lift hover-glow transition-all animate-border-glow"
      >
        Fi ran 
      </button>
    </form>
  )
}
