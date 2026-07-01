'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Fatima Al-Masri',
      role: 'Bride',
      content: 'Spa Sultana made my wedding day truly special. The bridal package was absolutely flawless.',
      rating: 5,
    },
    {
      name: 'Amira Ben Ali',
      role: 'Regular Client',
      content: 'The attention to detail and professional care at Spa Sultana is unmatched. I feel renewed every visit.',
      rating: 5,
    },
    {
      name: 'Leila Hafiz',
      role: 'Corporate Client',
      content: 'Luxurious, elegant, and incredibly relaxing. The perfect escape from daily stress.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Hear from our valued clients who have experienced the Spa Sultana difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-2xl border border-border hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground font-body mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
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
