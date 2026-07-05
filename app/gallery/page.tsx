'use client'

import { useState, useEffect, useRef } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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

  const gallery = [
    { src: '/images/reception.jpg', alt: 'Espace reception luxueux' },
    { src: '/images/entrance.jpg', alt: 'Entree elegante' },
    { src: '/images/treatment-room.jpg', alt: 'Salle de soins' },
    { src: '/images/interior.jpg', alt: 'Interieur raffine' },
    { src: '/images/spa-area.jpg', alt: 'Espace spa detente' },
    { src: '/images/ambiance.jpg', alt: 'Ambiance chaleureuse' },
  ]

  return (
    <main className="overflow-x-hidden" ref={sectionRef}>
      <Navigation />

      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Galerie
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Decouvrez l&apos;elegance et le luxe de Spa Sultana
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="reveal relative group overflow-hidden rounded-2xl cursor-pointer h-72"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-body text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
