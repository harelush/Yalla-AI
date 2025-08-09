import { motion } from 'framer-motion'
import { useState } from 'react'
import content from '../data/content.json'

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videos = content.successStories.videos

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
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

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative max-w-sm mx-auto"
          >
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  const swipeThreshold = 50
                  if (info.offset.x > swipeThreshold && currentSlide > 0) {
                    prevSlide()
                  } else if (info.offset.x < -swipeThreshold && currentSlide < videos.length - 1) {
                    nextSlide()
                  }
                }}
              >
                {videos.map((video, index) => (
                  <div key={index} className="w-full flex-shrink-0">
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
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows - RTL: Right arrow goes to previous, Left arrow goes to next */}
            <button
              onClick={nextSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
              disabled={currentSlide === videos.length - 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={prevSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
              disabled={currentSlide === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Video Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-text-dark bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                {videos[currentSlide].caption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {videos.map((video, index) => (
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
              <div className={`absolute -top-4 ${index % 2 === 0 ? '-right-4 w-8 h-8' : '-left-4 w-10 h-10'} ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-primary/30'} rounded-full blur-sm`}></div>
              <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-left-4 w-6 h-6 bg-primary/30' : '-right-4 w-4 h-4 bg-secondary/30'} rounded-full blur-sm`}></div>
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