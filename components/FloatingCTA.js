import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content.json'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 100px and hide when near contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const contactTop = contactSection.offsetTop
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        
        // Show if scrolled down 100px but not yet reached contact section
        setIsVisible(scrollY > 100 && scrollY < contactTop - windowHeight / 2)
      } else {
        setIsVisible(window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="floating-cta group md:hidden"
          aria-label="הרשמה מהירה ל-YallaAI"
        >
          {/* Button content */}
          <div className="flex items-center space-x-reverse space-x-2">
            <span className="font-semibold text-sm">הרשמה מהירה</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs transition-transform group-hover:translate-x-1">←</span>
            </div>
          </div>

                     {/* Pulse animation */}
           <div className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping"></div>
           
           {/* Urgent indicator */}
           <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            !
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
} 