'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GalleryPreview() {
  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841253632-SIarZdwv0byy4tcKCm6c169v3dQfsv.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841307656-TVhWZmVmAneXVpdlcHI71tBg52JftY.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841272909-DWfZyYksjgTIgQOOyW7Jn8q8JxgjpQ.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841145982-TY6VYjDhWgg0QnVjMYvhxMFlS62PA1.jpg',
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Explore the elegance and luxury of our premium beauty sanctuary
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl h-64 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image}
                alt={`Spa Sultana gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
