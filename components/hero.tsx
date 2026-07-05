'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/reception-desk.jpg)',
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight text-balance"
            >
              Élégance Intemporelle
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 mb-8 font-body font-light leading-relaxed max-w-xl"
            >
              Découvrez le sanctuary ultime de la beauté et du bien-être. Offrez-vous des soins premium conçus pour sublimer votre beauté naturelle.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 font-body font-semibold text-center shadow-lg inline-block"
                >
                  Prendre Rendez-Vous
                </Link>
              </motion.div>
              <motion.a
                href="https://wa.me/21655720810"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/20 text-white border border-white rounded-full hover:bg-white hover:text-foreground transition-all duration-300 font-body font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
