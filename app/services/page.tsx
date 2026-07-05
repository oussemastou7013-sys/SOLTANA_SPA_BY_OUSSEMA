'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { Scissors, Palette, Sparkles, Wind, Flower, Brush, Crown, Waves, Droplet } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const serviceCategories = [
    {
      category: 'Cheveux',
      icon: Scissors,
      services: [
        'Brushing cheveux court',
        'Brushing cheveux mi-long',
        'Brushing cheveux long',
        'Brushing cheveux extra long',
        'Shampooing + soins cheveux',
        'Épilation sourcils',
        'Épilation sourcils + teinture',
      ],
    },
    {
      category: 'Lella Beya',
      icon: Sparkles,
      services: [
        'Hammam marocain',
        'Enveloppement',
        'Masque',
        'Massage humide 15 min',
      ],
    },
    {
      category: 'Soins des mains',
      icon: Wind,
      services: [
        'Supplément pose vernis',
        'Supplément dépose vernis permanent',
      ],
    },
    {
      category: 'Soins des pieds',
      icon: Droplet,
      services: [
        'Supplément pose vernis',
        'Supplément dépose vernis permanent',
        'Pose vernis (sans soins)',
      ],
    },
    {
      category: 'Épilation (Halawa)',
      icon: Palette,
      services: [
        'Demi-jambes',
        'Jambes complètes',
        'Bras',
        'Aisselles',
        'Visage',
        'Dos',
        'Ventre',
        'Maillot simple',
        'Maillot intégral',
        'Corps complet',
      ],
    },
    {
      category: 'Massage',
      icon: Waves,
      services: [
        'Douche après épilation',
        '20 minutes',
        '30 minutes',
        '40 minutes',
        '1 heure',
        'Supplément pierres chaudes',
      ],
    },
    {
      category: 'Tatouage Harkous',
      icon: Brush,
      services: [
        'Petit modèle',
        'Moyen modèle',
        'Grand modèle',
      ],
    },
    {
      category: 'Épilation (Cire)',
      icon: Crown,
      services: [
        'Demi-jambes',
        'Jambes complètes',
        'Bras',
        'Aisselles',
        'Visage',
        'Ventre',
        'Dos',
        'Maillot intégral',
        'Corps complet',
      ],
    },
    {
      category: 'Head Spa',
      icon: Flower,
      services: [
        '40 min',
        '60 min',
      ],
    },
    {
      category: 'Étapes Head Spa',
      icon: Sparkles,
      services: [
        'Step 1: Crème démaquillante et nettoyante',
        'Step 1: Massage visage',
        'Step 1: Massage cou',
        'Step 1: Massage épaules',
        'Step 1: Masque détox',
        'Step 2: Massage crânien',
        'Step 2: Brushing',
        'Step 3: Shampooing + massage',
        'Step 3: Shampooing soin + massage',
        'Step 3: Masque cheveux + massage',
        'Step 3: Huile pailletée épaules',
      ],
    },
    {
      category: 'Imperial',
      icon: Crown,
      services: [
        'Pierres chaudes',
        'Hammam',
        'Enveloppement savon noir',
        'Gommage traditionnel',
        'Masque d\'argile blanche',
        'Enveloppement argile verte',
        'Massage 30 min (dont 5 min visage)',
      ],
    },
    {
      category: 'Sultan',
      icon: Crown,
      services: [
        'Pierres chaudes',
        'Hammam',
        'Enveloppement savon noir',
        'Gommage traditionnel',
        'Masque d\'argile blanche',
        'Enveloppement argile verte',
        'Jacuzzi',
        'Massage 30 min (dont 5 min visage)',
      ],
    },
    {
      category: 'Arabesque',
      icon: Flower,
      services: [
        'Enveloppement savon noir',
        'Gommage traditionnel',
        'Masque d\'argile blanche',
        'Enveloppement argile verte',
        'Esmeralda cheveux courts',
        'Esmeralda cheveux longs',
        'Esmeralda cheveux extra longs',
      ],
    },
    {
      category: 'Hammam',
      icon: Waves,
      services: [
        'Enveloppement savon noir',
        'Gommage traditionnel',
        'Masque d\'argile blanche',
        'Enveloppement argile verte',
        'Brushing',
      ],
    },
    {
      category: 'Cinderella',
      icon: Crown,
      services: [
        'Hammam',
        'Enveloppement savon noir',
        'Gommage traditionnel',
        'Masque d\'argile blanche',
        'Enveloppement argile verte',
        'Massage 25 min',
      ],
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Nos Services Premium
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Traitements beauté et bien-être complets conçus pour sublimer votre beauté naturelle
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>

                  <div className="space-y-2">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground font-body">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Réservez Votre Soin Aujourd'hui
          </h2>
          <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            Découvrez l'expérience ultime des soins beauté de luxe. Contactez-nous dès maintenant pour fixer votre rendez-vous.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Prendre Rendez-Vous
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
