import { motion } from 'framer-motion'
import content from '../data/content.json'

export default function SuccessStories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="success-stories" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-secondary/20 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-secondary/30"
          >
            🎯 {content.successStories.badge}
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-header">
            <span className="header-text">{content.successStories.title}</span>
          </h2>
          
          <p className="text-xl text-text-dark max-w-3xl mx-auto font-content">
            {content.successStories.subtitle}
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {content.successStories.videos.map((video, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
                <div className="relative pb-[125%] h-0 overflow-hidden rounded-xl max-h-[400px]">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                
                {/* Video overlay info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">{video.caption}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-4 ${index === 0 ? '-right-4 w-8 h-8' : '-left-4 w-10 h-10'} ${index === 0 ? 'bg-secondary/30' : 'bg-primary/30'} rounded-full blur-sm`}></div>
              <div className={`absolute -bottom-4 ${index === 0 ? '-left-4 w-6 h-6 bg-primary/30' : '-right-4 w-4 h-4 bg-secondary/30'} rounded-full blur-sm`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-secondary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-dark font-header">
              {content.successStories.cta.title}
            </h3>
            <p className="text-gray-600 mb-6 font-content">
              {content.successStories.cta.subtitle}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg group"
              aria-label="התחילו את המסע שלכם עכשיו"
            >
              {content.successStories.cta.button}
              <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}