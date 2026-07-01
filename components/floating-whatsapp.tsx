'use client'

import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/21655720810"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  )
}
