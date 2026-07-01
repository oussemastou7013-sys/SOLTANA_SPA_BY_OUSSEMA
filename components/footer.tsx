'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Spa Sultana</h3>
            <p className="font-body text-background/80 leading-relaxed">
              Premium beauty salon in Bizerte, Tunisia. Experience luxury, elegance, and professional care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {[
                'Hair Styling',
                'Skincare & Facials',
                'Makeup',
                'Nail Care',
                'Massage & Spa',
                'Bridal Beauty',
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span className="font-body text-background/80">
                  7VG6+3RQ, Bizerte, Tunisia
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+21655720810" className="font-body text-background/80 hover:text-background transition-colors">
                  +216 55 720 810
                </a>
              </div>
              <div className="flex gap-3">
                <MessageCircle size={20} className="flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/21655720810" target="_blank" rel="noopener noreferrer" className="font-body text-background/80 hover:text-background transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center font-body text-background/60">
            © 2025 Spa Sultana. All rights reserved. Premium beauty salon in Bizerte, Tunisia.
          </p>
        </div>
      </div>
    </footer>
  )
}
