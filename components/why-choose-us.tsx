'use client'

import { Sparkles, Award, Users, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Luxe Premium',
      description: 'Expérience d\'une élégance incomparable avec des soins premium dans notre sanctuary exquis.',
    },
    {
      icon: Award,
      title: 'Professionnels Experts',
      description: 'Nos expertes beauté hautement qualifiées apportent des décennies d\'expertise à chaque service.',
    },
    {
      icon: Users,
      title: 'Soins Personnalisés',
      description: 'Traitements adaptés à vos besoins uniques de beauté et de bien-être.',
    },
    {
      icon: Heart,
      title: 'Bien-être Holistique',
      description: 'Approche holistique de la beauté qui nourrit le corps et l\'âme.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Pourquoi Choisir Spa Sultana
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Découvrez le mélange parfait du luxe, de l'expertise et du bien-être au cœur de Bizerte
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: '0 25px 30px -5rgba(0, 0, 0, 0.12)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
