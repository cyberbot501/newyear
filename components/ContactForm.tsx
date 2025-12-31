'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with your actual API endpoint)
    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // For now, simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-white font-semibold mb-2 text-yoruba">
          Orukọ rẹ (Your Name)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all hover-lift"
          placeholder="Tẹ orukọ rẹ sibi (Enter your name here)"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-white font-semibold mb-2 text-yoruba">
          Imeeli rẹ (Your Email)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all hover-lift"
          placeholder="Tẹ imeeli rẹ sibi (Enter your email here)"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-white font-semibold mb-2 text-yoruba">
          Irọrùn rẹ (Your Message)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-black/50 border-2 border-yoruba-gold/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yoruba-gold focus:ring-2 focus:ring-yoruba-gold/50 transition-all resize-none hover-lift"
          placeholder="Tẹ irọrùn rẹ sibi (Enter your message here)"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-yoruba-gold to-yoruba-orange text-black font-bold text-lg rounded-lg hover-lift hover-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed animate-border-glow"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            N n ran (Sending...)
          </span>
        ) : (
          'Fi ran (Send Message)'
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border-2 border-green-500 rounded-lg text-green-400 text-center animate-fade-in-up">
          <p className="font-semibold">E seun! (Thank you!)</p>
          <p>Mo ti gba irọrùn rẹ. Ma se padanu lati dahun. (I've received your message. I won't delay in responding.)</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border-2 border-red-500 rounded-lg text-red-400 text-center animate-fade-in-up">
          <p className="font-semibold">Àṣìṣe! (Error!)</p>
          <p>N jẹ ki o gbiyanju lẹẹkansi. (Please try again.)</p>
        </div>
      )}
    </form>
  )
}

