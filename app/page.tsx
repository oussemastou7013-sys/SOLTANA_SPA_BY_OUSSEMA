'use client'

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import WhyChooseUs from '@/components/why-choose-us'
import FeaturedServices from '@/components/featured-services'
import GalleryPreview from '@/components/gallery-preview'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <FeaturedServices />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
