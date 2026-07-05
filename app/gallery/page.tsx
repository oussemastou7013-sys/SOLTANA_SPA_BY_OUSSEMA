'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const gallery = [
    {
      src: '/images/reception.jpg',
      alt: 'Luxury Reception Area',
    },
    {
      src: '/images/reception-desk.jpg',
      alt: 'Elegant Reception Desk',
    },
    {
      src: '/images/treatment-room-1.jpg',
      alt: 'Spa Treatment Room',
    },
    {
      src: '/images/hammam.jpg',
      alt: 'Moroccan Hammam',
    },
    {
      src: '/images/hair-salon.jpg',
      alt: 'Hair Salon Area',
    },
    {
      src: '/images/lounge-area.jpg',
      alt: 'Luxury Lounge Area',
    },
    {
      src: '/images/treatment-room-2.jpg',
      alt: 'Treatment Room',
    },
    {
      src: '/images/massage-room.jpg',
      alt: 'Massage Room',
    },
    {
      src: '/images/hammam-2.jpg',
      alt: 'Spa Hammam',
    },
    {
      src: '/images/spa-room.jpg',
      alt: 'Spa Treatment Area',
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Galerie
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Explorez l'élégance et le luxe de Spa Sultana
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-body text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-51"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-96 md:max-h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full size"
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
