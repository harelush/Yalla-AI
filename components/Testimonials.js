import { motion } from 'framer-motion'
import content from '../data/content.json'

export default function Testimonials() {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-reverse space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
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
    <section id="testimonials" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
             <span className="header-text">{content.testimonials.title}</span>
           </h2>
           <p className="text-xl text-text-dark max-w-3xl mx-auto font-content">
            {content.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
                             {/* Quote Icon */}
               <div className="absolute top-4 left-4 text-primary/30 text-4xl">
                 "
               </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

                             {/* Content */}
               <blockquote className="text-gray-600 leading-relaxed mb-6 relative z-10 font-content">
                 "{testimonial.content}"
               </blockquote>

              {/* Author */}
                             <div className="flex items-center space-x-reverse space-x-4">
                 {/* Avatar placeholder */}
                 <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                   {testimonial.name.charAt(0)}
                 </div>
                 
                 <div>
                   <div className="font-semibold text-text-dark group-hover:text-secondary transition-colors font-header">
                     {testimonial.name}
                   </div>
                   <div className="text-sm text-gray-500 font-content">
                     {testimonial.role}
                   </div>
                 </div>
               </div>

               {/* Hover effect */}
               <div className="absolute inset-0 bg-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-bright-violet/20"
        >
          <div className="text-center">
                         <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-header">{content.ui.testimonials.statistics.students.number}</div>
             <div className="text-text-dark font-content">{content.ui.testimonials.statistics.students.description}</div>
           </div>
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-header">{content.ui.testimonials.statistics.recommendation.number}</div>
             <div className="text-text-dark font-content">{content.ui.testimonials.statistics.recommendation.description}</div>
           </div>
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-header">{content.ui.testimonials.statistics.efficiency.number}</div>
             <div className="text-text-dark font-content">{content.ui.testimonials.statistics.efficiency.description}</div>
           </div>
        </motion.div>
      </div>
    </section>
  )
} 