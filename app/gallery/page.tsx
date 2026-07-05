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
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841307656-TVhWZmVmAneXVpdlcHI71tBg52JftY.jpg',
      alt: 'Luxury Reception Area',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841253632-SIarZdwv0byy4tcKCm6c169v3dQfsv.jpg',
      alt: 'Elegant Entrance',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841393091-JVdkHjUSJUCIpSSvWLjPgEVp52a3p5.jpg',
      alt: 'Spa Relaxation Area',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841487641-MsqacQNhK0sMXA6CQhPvW8pAkeDxFg.jpg',
      alt: 'Grand Entrance Door',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841197681-aCxcWptqKvk0HmKUZ16eixEtYYLeMX.jpg',
      alt: 'Storefront Display',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841340579-bwXuMlkxkpH6c169v3dQfsv.jpg',
      alt: 'Decorative Details',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841272909-DWfZyYksjgTIgQOOyW7Jn8q8JxgjpQ.jpg',
      alt: 'Treatment Room',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841145982-TY6VYjDhWgg0QnVjMYvhxMFlS62PA1.jpg',
      alt: 'Mirror and Vanity',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841539404-eFz7HeZu4GxL4Cpr1ghTe9vrxnFjWd.jpg',
      alt: 'Therapy Room',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841467774-DKaUikLv9xhIzbN0jdCAKn2ikTglbZ.jpg',
      alt: 'Ambiance Lighting',
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Explore the elegance and luxury of Spa Sultana
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
