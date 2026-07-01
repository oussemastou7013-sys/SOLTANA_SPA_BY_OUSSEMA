'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Get in touch with Spa Sultana to book your appointment or ask any questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Address */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">Address</h3>
                    <p className="text-muted-foreground font-body mt-2">
                      7VG6+3RQ<br />
                      Bizerte, Tunisia
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700" style={{ animationDelay: '100ms' }}>
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">Phone</h3>
                    <a href="tel:+21655720810" className="text-primary font-body hover:underline">
                      +216 55 720 810
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700" style={{ animationDelay: '200ms' }}>
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">WhatsApp</h3>
                    <a 
                      href="https://wa.me/21655720810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-body hover:underline"
                    >
                      +216 55 720 810
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="animate-in fade-in slide-in-from-left-8 duration-700" style={{ animationDelay: '300ms' }}>
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground font-body mt-2">
                      Monday - Sunday<br />
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-background rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Book Your Appointment
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! We&apos;ve received your message and will contact you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body"
                      placeholder="+216 55 123 456"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body"
                    >
                      <option value="">Select a service</option>
                      <option value="Hair Styling">Hair Styling</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Makeup">Makeup</option>
                      <option value="Facial Care">Facial Care</option>
                      <option value="Skincare">Skincare</option>
                      <option value="Nail Care">Nail Care</option>
                      <option value="Bridal Beauty">Bridal Beauty</option>
                      <option value="Massage">Massage</option>
                      <option value="Spa Treatments">Spa Treatments</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body"
                      placeholder="Tell us about your appointment preferences..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all duration-300 font-body font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-border animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="w-full h-96 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-heading font-bold text-foreground mb-2">
                  Located in Bizerte, Tunisia
                </p>
                <p className="text-muted-foreground font-body">
                  7VG6+3RQ, Bizerte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
