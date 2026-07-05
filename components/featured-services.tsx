'use client'

import { Scissors, Palette, Sparkles, Wind, Flower, Brush, Crown, Waves, Droplet } from 'lucide-react'

export default function FeaturedServices() {
  const services = [
    { icon: Scissors, name: 'Coiffure', description: 'Coupes et coiffages experts pour chaque occasion' },
    { icon: Palette, name: 'Coloration', description: 'Coloration professionnelle avec produits premium' },
    { icon: Brush, name: 'Maquillage', description: 'Maquillage de mariage et d\'événement par nos artistes' },
    { icon: Sparkles, name: 'Soins du Visage', description: 'Soins rajeunissants adaptés à votre peau' },
    { icon: Droplet, name: 'Soins Dermatologiques', description: 'Traitements avancés pour une radiance durable' },
    { icon: Wind, name: 'Soins des Ongles', description: 'Manucure & pédicure avec finitions luxueuses' },
    { icon: Crown, name: 'Beauté de Mariée', description: 'Packages complets pour votre jour spécial' },
    { icon: Waves, name: 'Massage', description: 'Massages thérapeutiques pour la détente ultime' },
    { icon: Flower, name: 'Soins Spa', description: 'Expériences spa holistiques & bien-être' },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos Services Premium
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Traitements beauté et bien-être complets pour chaque besoin
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
