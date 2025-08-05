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

  // Get cards and organize them - Featured course first
  const trialLesson = content.program.cards.find(card => card.title === "שיעור ניסיון")
  const mainCourses = content.program.cards
    .filter(card => card.title !== "שיעור ניסיון")
    .sort((a, b) => b.featured ? 1 : -1) // Featured course first

  return (
    <>
      {/* Main Program Section - Lead with Main Courses */}
      <section id="program" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-6"
            >
              🎯 בחר את המסלול שלך
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-header">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {content.program.title}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-text-dark font-content max-w-3xl mx-auto leading-relaxed">
              {content.program.subtitle}
            </p>
          </motion.div>

          {/* Main Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {mainCourses.map((card, index) => {
              const getCardStyles = (featured) => {
                if (featured) {
                  return {
                    border: 'border-secondary border-4',
                    background: 'bg-gradient-to-br from-white via-secondary/8 to-secondary/15',
                    shadow: 'shadow-3xl shadow-secondary/30',
                    hoverShadow: 'hover:shadow-secondary/50 hover:shadow-4xl',
                    ring: 'ring-6 ring-secondary/20'
                  }
                }
                return {
                  border: 'border-gray-200 border-2',
                  background: 'bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30',
                  shadow: 'shadow-lg shadow-gray-200/50',
                  hoverShadow: 'hover:shadow-gray-300/60 hover:shadow-xl',
                  ring: ''
                }
              }

              const cardStyles = getCardStyles(card.featured)

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: card.featured ? -15 : -5, scale: card.featured ? 1.03 : 1.01 }}
                  className={`
                    relative rounded-3xl ${card.featured ? 'p-12 lg:col-span-8' : 'p-8 lg:col-span-4 lg:self-center opacity-90'}
                    ${cardStyles.background} 
                    ${cardStyles.border} 
                    ${cardStyles.shadow} 
                    ${cardStyles.hoverShadow} 
                    ${cardStyles.ring}
                    transition-all duration-500 ease-out cursor-pointer
                    backdrop-blur-sm
                    ${card.featured ? 'transform lg:scale-110' : 'transform lg:scale-95'}
                  `}
                >
                  {/* Featured Badge */}
                  {card.badge && (
                    <motion.div 
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 3 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary via-green-400 to-emerald-500 text-white text-base font-bold px-6 py-3 rounded-full shadow-2xl border-3 border-white z-10"
                    >
                      🏆 {card.badge}
                    </motion.div>
                  )}
                  
                  {/* Premium Badge for Featured Course */}
                  {card.featured && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="absolute top-6 left-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-amber-300"
                    >
                      💎 הקורס המומלץ ביותר
                    </motion.div>
                  )}

                  {/* Best Value Badge for Featured Course */}
                  {card.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, type: "spring", stiffness: 150 }}
                      className="absolute top-20 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12"
                    >
                      🔥 חוסך ₪300+
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className="space-y-8">
                    {/* Header */}
                    <div className={`space-y-4 ${card.badge ? 'pt-4' : ''}`}>
                      <motion.h3 
                        className="text-4xl font-bold text-text-dark font-header"
                        whileHover={{ scale: 1.02 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      <p className={`text-lg font-content leading-relaxed ${card.featured ? 'text-gray-700' : 'text-gray-500'}`}>
                        {card.description}
                      </p>
                      
                      {!card.featured && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                          <p className="text-amber-700 text-sm">
                            💡 <strong>רוצה יותר?</strong> הקורס המלא כולל את כל זה + עוד הרבה תוכן מתקדם
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Price Section */}
                    <div className="text-center space-y-4">
                      {card.featured && (
                        <div className="mb-4">
                          <span className="text-lg text-gray-500 line-through">₪1,250</span>
                          <span className="text-red-500 font-bold text-sm mr-2">חסכת ₪300!</span>
                        </div>
                      )}
                      
                      <motion.div 
                        className={`${card.featured ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'} font-bold ${card.featured ? 'text-secondary' : 'text-gray-600'} font-header`}
                        whileHover={{ scale: card.featured ? 1.1 : 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {card.price}
                      </motion.div>
                      
                      <div className="text-center">
                        <span className={`text-sm font-semibold px-4 py-2 rounded-full ${card.featured ? 'bg-secondary/15 text-secondary text-base' : 'bg-gray-100 text-gray-600'}`}>
                          {card.title === "קורס קצר" ? "⚡ בסיסי למתחילים" : "🏆 הקורס המקצועי המלא - הכי שווה!"}
                        </span>
                      </div>
                      
                      {card.featured && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                          <p className="text-green-700 text-sm font-semibold">
                            💰 כולל הכל: קורס קצר + 4 מפגשים מתקדמים
                          </p>
                          <p className="text-green-600 text-xs mt-1">
                           הנחה בלעדית לזמן מוגבל!
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: card.featured ? 1.08 : 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        w-full ${card.featured ? 'py-6 px-8 text-2xl' : 'py-4 px-6 text-lg'} rounded-2xl font-bold
                        transition-all duration-300 transform
                        ${card.featured 
                          ? 'bg-gradient-to-r from-secondary via-green-400 to-emerald-500 text-white shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 ring-4 ring-secondary/20' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-md shadow-gray-400/30 hover:shadow-gray-400/40'
                        }
                        hover:shadow-xl border-2 border-white/20
                      `}
                    >
                      {card.featured ? '🏆 רוצה להיות חלק - זה בשבילי!' : '📚 מתחיל עם הבסיס'}
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg"></div>
                  
                  {/* Featured card decorations */}
                  {card.featured && (
                    <>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full animate-ping opacity-30"></div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Features Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-text-dark mb-6 font-header">✨ מה תקבלו בכל קורס?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {content.program.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-text-dark font-content text-center font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trial Lesson Section - Compact Entry Point */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 border-y border-secondary/20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Compact Trial Lesson Presentation */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-secondary/20"
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

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-4 font-header"
              >
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  {content.trialLesson.headline.main}
                </span>
                <br />
                <span className="text-text-dark text-2xl md:text-3xl">{content.trialLesson.headline.sub}</span>
              </motion.h2>

              {/* Compact description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-text-dark mb-8 font-content leading-relaxed"
              >
                {content.trialLesson.subheadline.replace('{price}', trialLesson?.price || '')}
              </motion.p>

              {/* Compact benefits */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                {content.trialLesson.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <h4 className="font-medium text-text-dark text-xl mb-1 font-header">{benefit.title}</h4>
                  </motion.div>
                ))}
              </motion.div>

              {/* Price & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-50 rounded-2xl p-6"
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-header">
                    {trialLesson?.price}
                  </div>
                  <div className="text-gray-600 font-content text-sm">
                    {trialLesson?.duration} • {content.trialLesson.pricing.description}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-header"
                >
                  {content.trialLesson.pricing.cta}
                </motion.button>
              </motion.div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-content">
                  ✅ {content.trialLesson.pricing.guarantee}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 