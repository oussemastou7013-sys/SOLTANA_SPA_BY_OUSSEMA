'use client'

import { Scissors, Palette, Sparkles, Wind, Flower, Brush, Crown, Waves, Droplet } from 'lucide-react'

export default function FeaturedServices() {
  const services = [
    { icon: Scissors, name: 'Hair Styling', description: 'Expert cuts and styling for every occasion' },
    { icon: Palette, name: 'Hair Coloring', description: 'Professional coloring with premium products' },
    { icon: Brush, name: 'Makeup', description: 'Bridal & event makeup by expert artists' },
    { icon: Sparkles, name: 'Facial Care', description: 'Rejuvenating facials tailored to your skin' },
    { icon: Droplet, name: 'Skincare', description: 'Advanced skincare treatments for radiance' },
    { icon: Wind, name: 'Nail Care', description: 'Manicure & pedicure with luxe finishes' },
    { icon: Crown, name: 'Bridal Beauty', description: 'Complete bridal packages for your special day' },
    { icon: Waves, name: 'Massage', description: 'Therapeutic massages for ultimate relaxation' },
    { icon: Flower, name: 'Spa Treatments', description: 'Holistic spa experiences & wellness' },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Comprehensive beauty and wellness treatments for every need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
