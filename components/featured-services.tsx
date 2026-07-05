'use client'

import { useEffect, useRef } from 'react'
import { Scissors, Sparkles, Wind, Flower, Crown, Waves, Droplet, Hand, Flame } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedServices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: Scissors, name: 'Coiffure', description: 'Brushing, shampooing et soins capillaires professionnels' },
    { icon: Sparkles, name: 'Lella Beya', description: 'Hammam marocain, enveloppement, masque et massage humide' },
    { icon: Hand, name: 'Soins Mains & Pieds', description: 'Vernis, depose, manucure et pedicure de luxe' },
    { icon: Flame, name: 'Epilation Halawa & Cire', description: 'Epilation complete visage et corps, halawa traditionnelle' },
    { icon: Waves, name: 'Massage', description: 'Massages detente de 20 min a 1h, pierres chaudes' },
    { icon: Droplet, name: 'Head Spa', description: 'Nettoyage, massage cranien, soins cheveux premium' },
    { icon: Crown, name: 'Rituels Spa', description: 'Imperial, Sultan, Arabesque, Cinderella - experiences completes' },
    { icon: Wind, name: 'Soins Visage', description: 'Nettoyage, masques detox et soins sur-mesure' },
    { icon: Flower, name: 'Bien-etre', description: 'Douche, detente et soins post-epilation' },
  ]

  return (
    <section className="py-20 md:py-32 bg-card" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Services Premium
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Des soins de beaute et de bien-etre complets pour toutes vos envies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="reveal group p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12 reveal">
          <Link
            href="/services"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Voir Tous Nos Services
          </Link>
        </div>
      </div>
    </section>
  )
}
