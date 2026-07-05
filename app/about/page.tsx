'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export default function About() {
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

  return (
    <main className="overflow-x-hidden" ref={sectionRef}>
      <Navigation />

      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            A Propos de Spa Sultana
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Votre destination privilegiee pour la beaute et le bien-etre haut de gamme a Bizerte, Tunisie
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="/images/reception.jpg"
                alt="Interieur Spa Sultana"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="reveal">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Spa Sultana a ete fonde avec la vision d&apos;offrir des services de beaute et de bien-etre de classe mondiale a Bizerte. Nous croyons que chaque cliente merite de se sentir choyee, revivifiee et celebree.
              </p>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Notre sanctuaire elegant allie l&apos;architecture orientale intemporelle aux soins de beaute modernes, creant une atmosphere de tranquillite et de raffinement absolu.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Chaque membre de notre equipe est dedie a offrir un service exceptionnel, faisant de chaque visite chez Spa Sultana un souvenir precieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Nous nous engageons a offrir des soins de beaute et de bien-etre premium qui subliment la beaute exterieure et nourrissent le bien-etre interieur. Notre mission est de creer un sanctuaire ou chaque invitee se sent valorisee et transformee.
              </p>
              <div className="space-y-4">
                {[
                  'Excellence professionnelle dans chaque soin',
                  'Atmosphere luxueuse et attention premium',
                  'Parcours de bien-etre personnalises',
                  'Relations durables avec nos clientes',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    </div>
                    <p className="text-muted-foreground font-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal">
              <img
                src="/images/entrance.jpg"
                alt="Entree elegante"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Notre Atmosphere Luxueuse
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Concu pour une detente et un rajeunissement absolus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal">
              <img
                src="/images/interior.jpg"
                alt="Design interieur premium"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="reveal">
              <img
                src="/images/treatment-room.jpg"
                alt="Espace reception"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
