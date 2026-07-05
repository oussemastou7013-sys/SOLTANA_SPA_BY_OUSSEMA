'use client'

import { Sparkles, Award, Users, Heart } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function WhyChooseUs() {
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

  const reasons = [
    {
      icon: Sparkles,
      title: 'Luxe Premium',
      description: 'Vivez une experience incomparable dans notre sanctuaire de beaute raffine et elegant.',
    },
    {
      icon: Award,
      title: 'Professionnelles Expertes',
      description: 'Nos estheticiennes qualifiees apportent leur savoir-faire a chaque soin.',
    },
    {
      icon: Users,
      title: 'Soins Personnalises',
      description: 'Des soins sur-mesure adaptes a vos besoins uniques de beaute et bien-etre.',
    },
    {
      icon: Heart,
      title: 'Bien-etre Global',
      description: 'Une approche holistique de la beaute qui nourrit le corps et l\'esprit.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Pourquoi Choisir Spa Sultana
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Decouvrez l&apos;alliance parfaite du luxe, de l&apos;expertise et du bien-etre au coeur de Bizerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="reveal group p-8 bg-card rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
