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

  // Get trial lesson data
  const trialLesson = content.program.cards.find(card => card.title === "שיעור ניסיון")
  // Filter out trial lesson from other cards
  const otherCards = content.program.cards.filter(card => card.title !== "שיעור ניסיון")

  return (
    <>
      {/* Trial Lesson Section - Standalone */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/15 border-t-4 border-secondary">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold mb-6"
            >
              {content.trialLesson.badge}
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 font-header"
            >
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {content.trialLesson.headline.main}
              </span>
              <br />
              <span className="text-text-dark text-3xl md:text-4xl">{content.trialLesson.headline.sub}</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-text-dark mb-8 font-content leading-relaxed"
            >
              {content.trialLesson.subheadline.replace('{price}', trialLesson?.price || '')}
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-secondary/20"
            >
              <p className="text-lg text-text-dark font-content leading-relaxed">
                {trialLesson?.description}
              </p>
            </motion.div>

            {/* Dream-Selling Videos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-text-dark font-header">
                {content.trialLesson.videos.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src={content.trialLesson.videos.urls[0]}
                      title="סיפור הצלחה 1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 font-content">
                      {content.trialLesson.videos.captions.video1}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src={content.trialLesson.videos.urls[1]}
                      title="סיפור הצלחה 2"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 font-content">
                      {content.trialLesson.videos.captions.video2}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >

              </motion.div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {content.trialLesson.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-text-dark mb-2 font-header">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 font-content">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Price & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-secondary/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-header">
                    {trialLesson?.price}
                  </div>
                  <div className="text-gray-600 font-content">
                    {trialLesson?.duration} • {content.trialLesson.pricing.description}
                  </div>
                  <div className="text-sm text-secondary font-semibold mt-2">
                    {content.trialLesson.pricing.comparison}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-header"
                >
                  {content.trialLesson.pricing.cta}
                </motion.button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-content">
                  ✅ {content.trialLesson.pricing.guarantee}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Program Section */}
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

            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Program Cards (excluding trial lesson) */}
              <div className="space-y-8">
                {otherCards.map((card, index) => {
                  const getCardStyles = (color, featured) => {
                    if (featured) {
                      return {
                        border: 'border-secondary border-2',
                        background: 'bg-gradient-to-br from-white to-secondary/5',
                        shadow: 'shadow-2xl shadow-secondary/20',
                        hoverShadow: 'hover:shadow-secondary/30 hover:shadow-3xl',
                        hoverScale: 'hover:scale-105',
                        ring: 'ring-4 ring-secondary/10'
                      }
                    }
                    
                    switch(color) {
                      case 'primary': 
                        return {
                          border: 'border-primary/30 border-2',
                          background: 'bg-gradient-to-br from-white to-primary/5',
                          shadow: 'shadow-xl shadow-primary/15',
                          hoverShadow: 'hover:shadow-primary/25 hover:shadow-2xl',
                          hoverScale: 'hover:scale-103',
                          ring: ''
                        }
                      default:
                        return {
                          border: 'border-secondary/30 border-2',
                          background: 'bg-gradient-to-br from-white to-secondary/5',
                          shadow: 'shadow-xl shadow-secondary/15',
                          hoverShadow: 'hover:shadow-secondary/25 hover:shadow-2xl',
                          hoverScale: 'hover:scale-103',
                          ring: ''
                        }
                    }
                  }
                  
                  const getPriceColor = (color) => {
                    switch(color) {
                      case 'secondary': return 'text-secondary'
                      case 'primary': return 'text-primary'
                      default: return 'text-secondary'
                    }
                  }

                  const getBadgeStyles = (color) => {
                    switch(color) {
                      case 'secondary': return 'bg-gradient-to-r from-secondary to-green-400 shadow-lg shadow-secondary/30'
                      case 'primary': return 'bg-gradient-to-r from-primary to-purple-500 shadow-lg shadow-primary/30'
                      default: return 'bg-gradient-to-r from-secondary to-green-400 shadow-lg shadow-secondary/30'
                    }
                  }

                  const cardStyles = getCardStyles(card.borderColor, card.featured)

                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className={`
                        relative overflow-hidden rounded-3xl p-8 
                        ${cardStyles.background} 
                        ${cardStyles.border} 
                        ${cardStyles.shadow} 
                        ${cardStyles.hoverShadow} 
                        ${cardStyles.hoverScale} 
                        ${cardStyles.ring}
                        transition-all duration-500 ease-out cursor-pointer
                        backdrop-blur-sm
                      `}
                    >
                      {/* Featured Badge */}
                      {card.badge && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                          className={`
                            absolute -top-4 right-6 
                            ${getBadgeStyles(card.borderColor)} 
                            text-white text-sm font-bold px-4 py-2 
                            rounded-full transform rotate-3
                            border-2 border-white
                          `}
                        >
                          ✨ {card.badge}
                        </motion.div>
                      )}

                      {/* Card Content */}
                      <div className="space-y-6">
                        {/* Header Section */}
                        <div className="space-y-3">
                          <motion.h3 
                            className="text-3xl font-bold text-text-dark font-header"
                            whileHover={{ scale: 1.02 }}
                          >
                            {card.title}
                          </motion.h3>
                          
                          {card.description && (
                            <p className="text-gray-700 text-lg font-content leading-relaxed min-h-[120px]">
                              {card.description}
                            </p>
                          )}
                        </div>

                        {/* Price Section */}
                        <div className="space-y-2">
                          <div className="flex items-baseline justify-center space-x-2 space-x-reverse">
                            <motion.span 
                              className={`text-5xl font-bold ${getPriceColor(card.textColor)} font-header`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {card.price}
                            </motion.span>
                            {card.duration && (
                              <span className="text-lg text-gray-500 font-content">{card.duration}</span>
                            )}
                          </div>
                          
                          {/* Value proposition */}
                          <div className="text-center">
                            <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                              {card.title === "קורס קצר" ? "מושלם למתחילים" : "הכי מומלץ לקידום מקצועי"}
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            w-full py-4 px-6 rounded-2xl font-bold text-lg
                            transition-all duration-300 transform
                            ${card.featured 
                              ? 'bg-gradient-to-r from-secondary to-green-400 text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50' 
                              : 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50'
                            }
                            hover:shadow-xl border-2 border-white/20
                          `}
                        >
                          {card.featured ? '🚀 בחירה מומלצת' : '📚 התחל עכשיו'}
                        </motion.button>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
                      
                      {/* Featured card extra decoration */}
                      {card.featured && (
                        <>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-green-400 to-secondary"></div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping opacity-20"></div>
                        </>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 