import { motion } from 'framer-motion'
import content from '../data/content.json'

export default function Benefits() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="benefits" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-5xl md:text-6xl font-bold mb-6 font-header">
             <span className="header-text">{content.benefits.title}</span>
           </h2>
           <p className="text-xl text-text-dark max-w-3xl mx-auto font-content">
            {content.benefits.subtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {content.benefits.items.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-all duration-300 text-center"
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:animate-bounce text-center">
                {benefit.icon}
              </div>

                             {/* Title */}
               <h3 className="text-2xl font-bold mb-4 text-text-dark group-hover:text-primary transition-colors font-header text-center">
                 {benefit.title}
               </h3>

               {/* Description */}
               <p className="text-gray-600 leading-relaxed font-content text-center">
                 {benefit.description}
               </p>

               {/* Hover effect overlay */}
               <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg group"
            aria-label="התחל עם YallaAI"
          >
            {content.ui.benefits.cta_button}
            <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 