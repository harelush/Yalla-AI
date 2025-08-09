import { motion } from 'framer-motion'
import Image from 'next/image'
import content from '../data/content.json'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToBenefits = () => {
    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="section-padding min-h-screen flex items-center relative overflow-hidden bg-hero-bg">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            {/* Badge */}
                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="inline-flex items-center bg-secondary/15 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-secondary/25 backdrop-blur-sm"
             >
               🔥 {content.hero.badge}
             </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
                             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-header"
            >
              <span className="text-white text-shadow">
                {/* Mobile: line break after בעצמך, Desktop: no break */}
                <span className="block md:hidden">
                  {content.hero.headline.replace('בעצמך ', 'בעצמך\n').split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </span>
                <span className="hidden md:block">
                  {content.hero.headline}
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
                             className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-content"
            >
              {content.hero.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg group"
                aria-label="התחל עכשיו עם YallaAI"
              >
                {content.hero.cta}
                <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
              </button>
              <button
                onClick={scrollToBenefits}
                className="btn-secondary text-lg"
                aria-label="גלה עוד על YallaAI"
              >
                {content.hero.secondary_cta}
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              <Image
                src="./images/hero.svg"
                alt="YallaAI Platform Demo"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Optional overlay for better text contrast if needed */}
                  
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 rounded-full animate-float backdrop-blur-sm border border-secondary/10"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-float backdrop-blur-sm border border-primary/10" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-accent/20 rounded-full animate-float backdrop-blur-sm border border-accent/10" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/15 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/15 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 