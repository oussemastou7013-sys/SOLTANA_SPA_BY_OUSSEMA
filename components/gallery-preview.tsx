'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
            Galerie
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Explorez l'élégance et le luxe de notre sanctuary beauté premium
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl h-64"
            >
              <motion.img
                src={image}
                alt={`Spa Sultana gallery ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/40"
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/gallery"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all duration-300 font-body font-semibold shadow-lg inline-block"
              >
                Voir la Galerie Complète
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
