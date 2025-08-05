import { motion } from 'framer-motion'
import content from '../data/content.json'

export default function About() {
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
    <section id="about" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-surface">
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
            <span className="header-text">{content.about.title}</span>
          </h2>
          <p className="text-xl text-text-dark max-w-3xl mx-auto font-content">
            {content.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Course Description */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-xl text-text-dark leading-relaxed font-content max-w-4xl mx-auto">
              {content.about.courseDescription}
            </p>
          </motion.div>

          {/* Team Members in a unified layout */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-text-dark font-header text-center">
              יוצרי הקורס
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {content.about.team.map((member, index) => (
                <div key={index} className="text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-xl font-bold mb-4 text-text-dark font-header">
                    {member.name}
                  </h4>
                  
                  {/* All highlights */}
                  <div className="space-y-2 mb-4">
                    {member.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <span className="text-secondary text-sm mr-2">✓</span>
                        <p className="text-gray-600 text-sm font-content">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed font-content">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Single unified message */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-text-dark leading-relaxed font-content max-w-3xl mx-auto">
              {content.about.valueProposition.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}