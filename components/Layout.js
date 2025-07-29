import { useState } from 'react'
import Link from 'next/link'
import content from '../data/content.json'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-hero-bg backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container-max">
          <div className="flex items-center py-4 px-4 md:px-0">
            {/* Logo - Far Left */}
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                Y
              </div>
              <span className="text-xl font-bold text-white font-header">YallaAI</span>
            </div>

            {/* Desktop Navigation - Left Side */}
            <div className="hidden md:flex items-center space-x-reverse space-x-8 ml-32 mx-10">
              <Link href="#hero" className="text-white hover:text-secondary transition-colors">
                {content.navigation.home}
              </Link>
              <Link href="#benefits" className="text-white hover:text-secondary transition-colors">
                {content.navigation.features}
              </Link>
              <Link href="#testimonials" className="text-white hover:text-secondary transition-colors">
                {content.navigation.testimonials}
              </Link>
            </div>

            {/* Spacer to push contact button to the right */}
            <div className="flex-1"></div>

            {/* Contact Button - Far Right */}
            <div className="hidden md:flex">
              <Link href="#contact" className="btn-primary">
                {content.navigation.contact}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={content.navigation.menu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 px-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="#hero" className="text-white hover:text-secondary transition-colors py-2">
                  {content.navigation.home}
                </Link>
                <Link href="#benefits" className="text-white hover:text-secondary transition-colors py-2">
                  {content.navigation.features}
                </Link>
                <Link href="#testimonials" className="text-white hover:text-secondary transition-colors py-2">
                  {content.navigation.testimonials}
                </Link>
                <Link href="#contact" className="btn-primary text-center mt-2">
                  {content.navigation.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-hero-bg border-t border-gray-200 mt-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">
                Y
              </div>
              <span className="text-lg font-bold text-white font-header">YallaAI</span>
            </div>
            <p className="text-gray-300 mb-4">{content.footer.rights}</p>
            <div className="flex justify-center space-x-reverse space-x-6 text-sm text-gray-300">
              <Link href="#" className="hover:text-secondary transition-colors">
                {content.footer.privacy}
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                {content.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 