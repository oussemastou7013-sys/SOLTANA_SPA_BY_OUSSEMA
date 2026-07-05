'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Ready to Indulge?
        </h2>
        <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          Book your appointment today and experience the ultimate luxury beauty sanctuary. Our team is ready to pamper you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Schedule Appointment
          </Link>
          <a
            href="https://wa.me/21655720810"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 font-body font-semibold"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
