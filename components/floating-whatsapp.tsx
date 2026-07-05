'use client'

import { MessageCircle } from 'lucide-react'

function InstagramIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      <a
        href="https://www.instagram.com/spa_sultana"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Suivez-nous sur Instagram"
      >
        <InstagramIcon size={26} />
      </a>
      <a
        href="https://wa.me/21655720810"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
