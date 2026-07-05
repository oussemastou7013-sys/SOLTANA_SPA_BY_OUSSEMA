'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/reception.jpg)',
          backgroundPosition: 'center',
        }}
      >
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center md:justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight text-balance">
              Élégance Intemporelle
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 font-body font-light leading-relaxed max-w-xl">
              Découvrez le sanctuary ultime de la beauté et du bien-être. Offrez-vous des soins premium conçus pour sublimer votre beauté naturelle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-body font-semibold text-center shadow-lg"
              >
                Prendre Rendez-Vous
              </Link>
              <a
                href="https://wa.me/21655720810"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 text-white border border-white rounded-full hover:bg-white hover:text-foreground transition-all duration-300 transform hover:scale-105 font-body font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
