'use client'

import { Scissors, Palette, Sparkles, Wind, Flower, Brush, Crown, Waves, Droplet } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeaturedServices() {
  const services = [
    { icon: Scissors, name: 'Coiffure', description: 'Coupes et coiffages experts pour chaque occasion' },
    { icon: Palette, name: 'Coloration', description: 'Coloration professionnelle avec produits premium' },
    { icon: Brush, name: 'Maquillage', description: 'Maquillage de mariage et d\'événement par nos artistes' },
    { icon: Sparkles, name: 'Soins du Visage', description: 'Soins rajeunissants adaptés à votre peau' },
    { icon: Droplet, name: 'Soins Dermatologiques', description: 'Traitements avancés pour une radiance durable' },
    { icon: Wind, name: 'Soins des Ongles', description: 'Manucure & pédicure avec finitions luxueuses' },
    { icon: Crown, name: 'Beauté de Mariée', description: 'Packages complets pour votre jour spécial' },
    { icon: Waves, name: 'Massage', description: 'Massages thérapeutiques pour la détente ultime' },
    { icon: Flower, name: 'Soins Spa', description: 'Expériences spa holistiques & bien-être' },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Services Premium
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Traitements beauté et bien-être complets pour chaque besoin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5rgba(0, 0, 0, 0.1)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-background rounded-2xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
