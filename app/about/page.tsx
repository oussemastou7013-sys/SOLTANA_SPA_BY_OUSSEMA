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
            About Spa Sultana
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Your premier destination for luxury beauty and wellness in Bizerte, Tunisia
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841307656-TVhWZmVmAneXVpdlcHI71tBg52JftY.jpg"
                alt="Spa Sultana Interior"
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Spa Sultana was founded with a vision to bring world-class luxury beauty and wellness services to Bizerte. We believe that every client deserves to feel pampered, rejuvenated, and celebrated.
              </p>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                Our elegant sanctuary combines timeless Islamic architecture with modern beauty treatments, creating an atmosphere of ultimate tranquility and refinement.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Each member of our team is dedicated to providing exceptional service, ensuring that every visit to Spa Sultana becomes a cherished memory.
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
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                We are committed to delivering premium beauty and wellness services that enhance both outer beauty and inner wellness. Our mission is to create a sanctuary where every guest feels valued, pampered, and truly transformed.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Professional excellence in every treatment</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Luxury atmosphere and premium care</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Personalized wellness journeys</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-muted-foreground font-body">Lasting client relationships</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841253632-SIarZdwv0byy4tcKCm6c169v3dQfsv.jpg"
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
              Our Luxury Atmosphere
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Designed for ultimate relaxation and rejuvenation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841145982-TY6VYjDhWgg0QnVjMYvhxMFlS62PA1.jpg"
              alt="Premium Interior Design"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1782841272909-DWfZyYksjgTIgQOOyW7Jn8q8JxgjpQ.jpg"
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
