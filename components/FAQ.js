import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content.json'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 font-header">
             <span className="header-text">{content.faq.title}</span>
           </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {content.faq.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              {/* Question */}
              <button
                                 onClick={() => toggleFAQ(index)}
                 className="w-full text-right flex justify-between items-center p-6 hover:bg-secondary/5 transition-colors rounded-xl"
                 aria-label={`פתח/סגור שאלה: ${item.question}`}
                 aria-expanded={openIndex === index}
               >
                                  <span className="text-lg font-semibold text-text-dark group-hover:text-secondary transition-colors font-header">
                   {item.question}
                 </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mr-4"
                >
                                     <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                                         <div className="px-6 pb-6 pt-0">
                       <div className="border-t border-gray-200 pt-4">
                                                  <p className="text-gray-600 leading-relaxed font-content">
                           {item.answer}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                     <p className="text-text-dark mb-6 font-content">יש לכם שאלה נוספת?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary group"
            aria-label="יצירת קשר לשאלות נוספות"
          >
            צרו קשר איתנו
            <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 