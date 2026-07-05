'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export default function About() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            À Propos de Spa Sultana
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Votre destination premium pour la beauté et le bien-être de luxe à Bizerte, Tunisie
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <img
                src="/images/reception.jpg"
                alt="Spa Sultana Interior"
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Spa Sultana a été fondé avec une vision : apporter des services de beauté et de bien-être de luxe de classe mondiale à Bizerte. Nous croyons que chaque client mérite de se sentir choyé, rajeuni et célébré.
              </p>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Notre sanctuary élégant combine l'architecture islamique intemporelle avec les traitements beauté modernes, créant une atmosphère de tranquillité et de raffinement ultimes.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Chaque membre de notre équipe s'engage à fournir un service exceptionnel, garantissant que chaque visite à Spa Sultana devient un souvenir précieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Nous nous engageons à fournir des services de beauté et de bien-être premium qui améliorent à la fois la beauté extérieure et le bien-être intérieur. Notre mission est de créer un sanctuary où chaque invité se sent valorisé, choyé et véritablement transformé.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Excellence professionnelle dans chaque traitement</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Atmosphère luxueuse et soins premium</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Parcours de bien-être personnalisés</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Relations durables avec les clients</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <img
                src="/images/reception-desk.jpg"
                alt="Elegant Entrance"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Notre Atmosphère Luxueuse
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Conçue pour la détente et le rajeunissement ultimes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <img
              src="/images/treatment-room-1.jpg"
              alt="Premium Interior Design"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="/images/lounge-area.jpg"
              alt="Reception Area"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
