'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Fatima Al-Masri',
      role: 'Mariée',
      content: 'Spa Sultana a rendu mon jour de mariage vraiment spécial. Le package mariée était absolument impeccable.',
      rating: 5,
    },
    {
      name: 'Amira Ben Ali',
      role: 'Cliente Régulière',
      content: 'L\'attention aux détails et la qualité professionnelle chez Spa Sultana sont incomparables. Je me sens revigorée à chaque visite.',
      rating: 5,
    },
    {
      name: 'Leila Hafiz',
      role: 'Cliente Entreprise',
      content: 'Luxueux, élégant et incroyablement relaxant. La fuite parfaite du stress quotidien.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Avis de nos Clients
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients précieux qui ont expérimenté la différence Spa Sultana
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: '0 20px 25px -5rgba(0, 0, 0, 0.1)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-background rounded-2xl border border-border transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground font-body mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div>
                <h4 className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
