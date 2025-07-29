import { motion } from 'framer-motion'
import content from '../data/content.json'

export default function Program() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="program" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-12">
                             <h2 className="text-4xl md:text-5xl font-bold mb-6 font-header">
                 <span className="header-text">{content.program.title}</span>
               </h2>
               <p className="text-xl text-text-dark font-content">
                {content.program.subtitle}
              </p>
            </div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {content.program.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-reverse space-x-4 group"
                >
                                     {/* Checkmark */}
                   <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                                     {/* Feature text */}
                   <span className="text-lg text-text-dark group-hover:text-secondary transition-colors font-content">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
            >
                             <div className="text-3xl font-bold text-primary mb-2 font-header">
                 {content.program.price}
               </div>
               <p className="text-gray-600 text-sm font-content">
                {content.program.note}
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="card relative overflow-hidden">
              {/* Header */}
              <div className="text-center mb-8">
                                 <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                   ✨
                 </div>
                 <h3 className="text-2xl font-bold text-text-dark mb-2 font-header">תוכנית YallaAI</h3>
                 <p className="text-gray-600 font-content">הפתרון המושלם למחנכים</p>
              </div>

              {/* Benefits Icons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                                 <div className="text-center p-4 bg-gray-50 rounded-lg">
                   <div className="text-2xl mb-2">🎯</div>
                   <div className="text-sm text-gray-600 font-content">התאמה אישית</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-lg">
                   <div className="text-2xl mb-2">📊</div>
                   <div className="text-sm text-gray-600 font-content">ניתוח נתונים</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-lg">
                   <div className="text-2xl mb-2">⏰</div>
                   <div className="text-sm text-gray-600 font-content">חיסכון בזמן</div>
                 </div>
                 <div className="text-center p-4 bg-gray-50 rounded-lg">
                   <div className="text-2xl mb-2">🎧</div>
                   <div className="text-sm text-gray-600 font-content">תמיכה 24/7</div>
                 </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full btn-primary group"
                                 aria-label="התחל עם תוכנית YallaAI"
              >
                התחילו עכשיו
                <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
              </button>

                             {/* Decorative elements */}
               <div className="absolute top-4 left-4 w-8 h-8 bg-secondary/20 rounded-full blur-md"></div>
               <div className="absolute bottom-4 right-4 w-6 h-6 bg-primary/20 rounded-full blur-md"></div>
            </div>

                         {/* Floating elements */}
             <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/30 rounded-full animate-float"></div>
             <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 