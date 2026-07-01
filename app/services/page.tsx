'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { Scissors, Palette, Sparkles, Wind, Flower, Brush, Crown, Waves, Droplet } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Scissors,
      name: 'Hair Styling',
      description: 'Expert cuts and styling for every occasion. From everyday elegance to special event preparation, our master stylists create looks that perfectly complement your features.',
      features: ['Professional cutting', 'Styling consultation', 'Event preparation'],
    },
    {
      icon: Palette,
      name: 'Hair Coloring',
      description: 'Professional coloring with premium products. Achieve your desired look with our advanced coloring techniques, from bold transformations to subtle highlights.',
      features: ['Color consultation', 'Permanent color', 'Highlights & balayage', 'Toning'],
    },
    {
      icon: Brush,
      name: 'Makeup',
      description: 'Bridal & event makeup by expert artists. We create stunning looks that last throughout your special moments.',
      features: ['Bridal makeup', 'Event makeup', 'Special occasion', 'Makeup lessons'],
    },
    {
      icon: Sparkles,
      name: 'Facial Care',
      description: 'Rejuvenating facials tailored to your skin type. Treat your complexion to professional care that reveals radiant, healthy skin.',
      features: ['Deep cleansing', 'Hydrating facials', 'Anti-aging treatments', 'Custom facials'],
    },
    {
      icon: Droplet,
      name: 'Skincare',
      description: 'Advanced skincare treatments for lasting radiance. Our comprehensive skincare programs address all your beauty concerns.',
      features: ['Acne treatment', 'Sensitive skin care', 'Anti-aging', 'Brightening'],
    },
    {
      icon: Wind,
      name: 'Nail Care',
      description: 'Manicure & pedicure with luxe finishes. Enjoy beautifully manicured nails with our premium nail care services.',
      features: ['Classic manicure', 'Gel nails', 'Pedicure', 'Nail art'],
    },
    {
      icon: Crown,
      name: 'Bridal Beauty',
      description: 'Complete bridal packages for your special day. From consultation to the big day, we ensure you look absolutely radiant.',
      features: ['Pre-wedding treatments', 'Bridal makeup', 'Hair styling', 'Complete packages'],
    },
    {
      icon: Waves,
      name: 'Massage',
      description: 'Therapeutic massages for ultimate relaxation. Release tension and rejuvenate your body with our expert massage therapists.',
      features: ['Swedish massage', 'Deep tissue', 'Aromatherapy', 'Couples massage'],
    },
    {
      icon: Flower,
      name: 'Spa Treatments',
      description: 'Holistic spa experiences & wellness. Indulge in luxurious spa treatments that nurture both body and soul.',
      features: ['Body treatments', 'Wellness packages', 'Relaxation therapy', 'Holistic care'],
    },
  ]

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Our Premium Services
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Comprehensive beauty and wellness treatments designed to enhance your natural beauty
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Book Your Treatment Today
          </h2>
          <p className="text-lg text-white/90 font-body mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            Experience the ultimate in luxury beauty treatments. Contact us now to schedule your appointment.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-body font-semibold shadow-lg"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
