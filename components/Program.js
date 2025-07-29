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

          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Program Cards */}
            <div className="space-y-6">
              {/* שיעור ניסיון */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark font-header">שיעור ניסיון</h3>
                    <p className="text-gray-600 text-sm font-content">הזדמנות להכיר את המערכת</p>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-secondary font-header">₪79</div>
                    <div className="text-sm text-gray-500">50 דקות</div>
                  </div>
                </div>
              </motion.div>

              {/* קורס קצר */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark font-header">קורס קצר</h3>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary font-header">₪590</div>
                  </div>
                </div>
              </motion.div>

              {/* קורס מלא */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 bg-gradient-to-br from-secondary/5 to-primary/5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark font-header">קורס מלא</h3>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-secondary font-header">₪950</div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded-full font-bold">
                  הכי פופולרי
                </div>
              </motion.div>

              {/* קורס לחיילים משוחררים */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden border-2 border-green-400/20 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark font-header">קורס לחיילים משוחררים</h3>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-green-500 font-header">₪799</div>
                  </div>
                </div>
              </motion.div>
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