'use client'

import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Fatima M.',
      role: 'Cliente fidele',
      content: 'Spa Sultana est un veritable havre de paix. Les soins sont exceptionnels et le personnel est d\'une gentillesse remarquable.',
      rating: 5,
    },
    {
      name: 'Amira B.',
      role: 'Cliente reguliere',
      content: 'L\'attention aux details et le professionnalisme de l\'equipe sont incomparables. Je me sens revivifiee a chaque visite.',
      rating: 5,
    },
    {
      name: 'Leila H.',
      role: 'Mariee',
      content: 'Un cadre luxueux, elegant et incroyablement relaxant. Le forfait mariage etait absolument parfait.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Temoignages Clientes
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Decouvrez ce que nos clientes disent de leur experience chez Spa Sultana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal p-8 bg-background rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground font-body mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <h4 className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
