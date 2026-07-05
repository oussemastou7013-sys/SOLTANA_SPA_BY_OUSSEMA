'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
        >
          Prêt à Vous Dorloter?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto"
        >
          Réservez votre rendez-vous dès aujourd'hui et découvrez le luxury beauty sanctuary ultime. Notre équipe est prête à vous dorloter.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 font-body font-semibold shadow-lg inline-block"
            >
              Prendre Rendez-Vous
            </Link>
          </motion.div>
          <motion.a
            href="https://wa.me/21655720810"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary transition-all duration-300 font-body font-semibold inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Message sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
