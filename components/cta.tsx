'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Prete a Vous Faire Plaisir ?
        </h2>
        <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto">
          Prenez rendez-vous des aujourd&apos;hui et decouvrez notre univers de beaute et de detente. Notre equipe vous attend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Prendre Rendez-vous
          </Link>
          <a
            href="https://wa.me/21655720810"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 font-body font-semibold"
          >
            Nous Ecrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
