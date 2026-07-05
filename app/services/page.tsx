'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import Link from 'next/link'

export default function Services() {
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
      { threshold: 0.05 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const serviceCategories = [
    {
      title: 'Coiffure',
      items: [
        'Brushing cheveux court',
        'Brushing cheveux mi-long',
        'Brushing cheveux long',
        'Brushing cheveux extra long',
        'Shampooing + soins cheveux',
        'Epilation sourcils + teinture',
      ],
    },
    {
      title: 'Lella Beya',
      items: [
        'Hammam marocain',
        'Enveloppement',
        'Masque',
        'Massage humide 15 min',
      ],
    },
    {
      title: 'Soins Mains & Pieds',
      items: [
        'Vernis classique',
        'Depose vernis permanent',
        'Vernis permanent',
        'Manucure complete',
        'Pedicure complete',
      ],
    },
    {
      title: 'Epilation Halawa & Cire',
      items: [
        'Demi jambes',
        'Jambes completes',
        'Bras',
        'Aisselles',
        'Visage',
        'Dos',
        'Ventre',
        'Maillot simple',
        'Maillot integral',
        'Corps complet',
      ],
    },
    {
      title: 'Massage',
      items: [
        'Massage 20 min',
        'Massage 30 min',
        'Massage 40 min',
        'Massage 1h',
        'Douche apres epilation',
        'Pierres chaudes',
      ],
    },
    {
      title: 'Head Spa',
      items: [
        'Head Spa 40 min',
        'Head Spa 60 min',
        'Step 1 : Nettoyage visage / cou / epaules + masque detox',
        'Step 2 : Massage cranien + brushing',
        'Step 3 : Soins cheveux + massage',
      ],
    },
    {
      title: 'Rituel Imperial',
      items: [
        'Hammam marocain',
        'Gommage corps complet au savon noir',
        'Enveloppement au ghassoul',
        'Masque visage',
        'Massage relaxant corps complet 30 min',
        'Brushing',
        'The & patisseries orientales',
      ],
    },
    {
      title: 'Rituel Sultan',
      items: [
        'Hammam marocain',
        'Gommage corps complet',
        'Enveloppement',
        'Masque visage detox',
        'Massage relaxant 20 min',
        'Head Spa Step 1 & 2',
        'The a la menthe & douceurs',
      ],
    },
    {
      title: 'Rituel Arabesque',
      items: [
        'Hammam marocain',
        'Gommage traditionnel savon noir & kessa',
        'Enveloppement au ghassoul & huile d\'argan',
        'Masque visage purifiant',
        'Massage aux huiles essentielles 40 min',
        'Soin capillaire + brushing',
        'The & patisseries maison',
      ],
    },
    {
      title: 'Rituel Cinderella',
      items: [
        'Bain de lait hydratant',
        'Gommage doux corps entier',
        'Enveloppement nourrissant',
        'Masque visage eclat',
        'Massage princesse 30 min',
        'Soin mains & pieds',
        'Brushing & coiffage',
        'Boisson detox & gourmandises',
      ],
    },
  ]

  return (
    <main className="overflow-x-hidden" ref={sectionRef}>
      <Navigation />

      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Des soins de beaute et de bien-etre complets pour sublimer votre beaute naturelle
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="reveal group p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Reservez Votre Soin
          </h2>
          <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto">
            Offrez-vous un moment de detente et de beaute. Contactez-nous pour planifier votre rendez-vous.
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
              Ecrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
