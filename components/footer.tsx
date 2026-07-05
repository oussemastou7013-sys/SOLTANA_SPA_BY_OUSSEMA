'use client'

import Link from 'next/link'
import { MapPin, Phone, MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Spa Sultana</h3>
            <p className="font-body text-background/80 leading-relaxed">
              Salon de beaute haut de gamme a Bizerte, Tunisie. Vivez le luxe, l&apos;elegance et des soins professionnels d&apos;exception.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/21655720810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/spa_sultana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white transition-opacity duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/about', label: 'A Propos' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Galerie' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {[
                'Coiffure & Brushing',
                'Hammam & Lella Beya',
                'Epilation Halawa & Cire',
                'Massage & Detente',
                'Head Spa',
                'Soins Mains & Pieds',
                'Rituels Spa',
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Coordonnees</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span className="font-body text-background/80">
                  7VG6+3RQ, Bizerte, Tunisie
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+21655720810" className="font-body text-background/80 hover:text-background transition-colors">
                  55 720 810
                </a>
              </div>
              <div className="flex gap-3">
                <MessageCircle size={20} className="flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/21655720810" target="_blank" rel="noopener noreferrer" className="font-body text-background/80 hover:text-background transition-colors">
                  WhatsApp: 55 720 810
                </a>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 mt-0.5"><InstagramIcon size={20} /></span>
                <a href="https://www.instagram.com/spa_sultana" target="_blank" rel="noopener noreferrer" className="font-body text-background/80 hover:text-background transition-colors">
                  @spa_sultana
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center font-body text-background/60">
            &copy; 2025 Spa Sultana. Tous droits reserves. Salon de beaute premium a Bizerte, Tunisie.
          </p>
        </div>
      </div>
    </footer>
  )
}
