'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function GalleryPreview() {
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

  const images = [
    { src: '/images/reception.jpg', alt: 'Reception Spa Sultana' },
    { src: '/images/entrance.jpg', alt: 'Entree elegante' },
    { src: '/images/treatment-room.jpg', alt: 'Salle de soins' },
    { src: '/images/interior.jpg', alt: 'Interieur luxueux' },
  ]

  return (
    <section className="py-20 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Galerie
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Decouvrez l&apos;elegance et le luxe de notre sanctuaire de beaute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="reveal relative group overflow-hidden rounded-2xl h-64"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <Link
            href="/gallery"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Voir la Galerie Complete
          </Link>
        </div>
      </div>
    </section>
  )
}
