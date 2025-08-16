import { useState } from 'react'
import { motion } from 'framer-motion'
import content from '../data/content.json'
import * as gtag from '../lib/gtag'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    phone: '',
    email: ''
  })

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return content.ui.contact.validation.name_required
    }
    if (name.trim().length < 2) {
      return content.ui.contact.validation.name_min_length
    }
    return ''
  }

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return content.ui.contact.validation.phone_required
    }
    
    // Israeli phone number regex (supports various formats)
    // Supports: 050-1234567, 0501234567, 050 1234567, etc.
    const israeliPhoneRegex = /^0(5[0-9]|2|3|4|7|8|9)-?\s?[0-9]{7}$/
    
    if (!israeliPhoneRegex.test(phone.replace(/\s+/g, ''))) {
      return content.ui.contact.validation.phone_invalid
    }
    return ''
  }

  const validateEmail = (email) => {
    // Email is optional, so if empty, it's valid
    if (!email.trim()) {
      return ''
    }
    
    // Simple email regex for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(email.trim())) {
      return content.ui.contact.validation.email_invalid || 'כתובת אימייל לא תקינה'
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    // Validate form
    const nameError = validateName(formData.name)
    const phoneError = validatePhone(formData.phone)
    const emailError = validateEmail(formData.email)

    if (nameError || phoneError || emailError) {
      setValidationErrors({
        name: nameError,
        phone: phoneError,
        email: emailError
      })
      return
    }

    // Clear any previous validation errors
    setValidationErrors({
      name: '',
      phone: '',
      email: ''
    })

    setIsSubmitting(true)

    try {
      const sheetsUrlScript = 'https://script.google.com/macros/s/AKfycbxUYMahS3bONcB8C25TV5_ePIDAPLkNBh87HDF_ZH9a7oGP9tIVdXXFCGGdrziYHoIJ1Q/exec';
      const response = await fetch(sheetsUrlScript, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        }),
      })

      // With no-cors mode, we can't read the response, but if no error is thrown, it likely succeeded
      setMessage(content.ui.contact.messages.success)
      setMessageType('success')
      
      // Track successful form submission
      gtag.trackFormSubmission('contact_form')
      gtag.event({
        action: 'generate_lead',
        category: 'conversion',
        label: 'contact_form_success',
        value: 1
      })
      
      setFormData({
        name: '',
        phone: '',
        email: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setMessage(content.ui.contact.messages.error)
      setMessageType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
             {/* Background decoration */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
         <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
         <div className="absolute top-1/2 right-10 w-32 h-32 bg-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
       </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Urgent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-secondary/15 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-secondary/25 animate-pulse-slow backdrop-blur-sm"
            >
              ⚡ {content.cta.urgent}
            </motion.div>

                         {/* Title */}
             <h2 className="text-4xl md:text-5xl font-bold mb-6 font-header">
               <span className="header-text">{content.cta.title}</span>
             </h2>

             {/* Subtitle */}
             <p className="text-xl text-text-dark mb-8 leading-relaxed font-content">
              {content.cta.subtitle}
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {content.ui.contact.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-reverse space-x-4"
                >
                                     <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                                     <span className="text-text-dark font-content">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
                             <div>
                 <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2 font-content">
                   {content.cta.form.name_placeholder} *
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className={`w-full px-4 py-3 bg-white border rounded-lg text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-content ${
                     validationErrors.name 
                       ? 'border-red-500 focus:ring-red-500' 
                       : 'border-gray-300 focus:ring-primary'
                   }`}
                   placeholder={content.cta.form.name_placeholder}
                 />
                 {validationErrors.name && (
                   <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                 )}
               </div>

               {/* Phone */}
               <div>
                 <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2 font-content">
                   {content.cta.form.phone_placeholder} *
                 </label>
                 <input
                   type="tel"
                   id="phone"
                   name="phone"
                   value={formData.phone}
                   onChange={handleChange}
                   required
                   className={`w-full px-4 py-3 bg-white border rounded-lg text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-content ${
                     validationErrors.phone 
                       ? 'border-red-500 focus:ring-red-500' 
                       : 'border-gray-300 focus:ring-primary'
                   }`}
                   placeholder={content.cta.form.phone_placeholder}
                 />
                 {validationErrors.phone && (
                   <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                 )}
               </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2 font-content">
                  {content.cta.form.email_placeholder}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-content ${
                    validationErrors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-primary'
                  }`}
                  placeholder={content.cta.form.email_placeholder}
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="שלח טופס יצירת קשר"
              >
                {isSubmitting ? content.ui.contact.messages.submitting : content.cta.form.submit}
                {!isSubmitting && (
                  <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
                )}
              </button>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                                     className={`p-4 rounded-lg text-center ${
                     messageType === 'success' 
                       ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                       : 'bg-red-100 text-red-600 border border-red-200'
                   }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 