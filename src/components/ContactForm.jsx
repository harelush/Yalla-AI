import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    ageGroup: '',
    currentSituation: '',
    interests: [],
    preferredPlan: '',
    message: '',
    agreeToTerms: false,
    allowMarketing: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ageGroups = [
    { value: 'young', label: 'צעיר (20-30)', description: 'משוחרר/סטודנט מחפש כיוון' },
    { value: 'mature', label: 'מבוגר (40-65)', description: 'מחפש התפתחות מקצועית' },
    { value: 'other', label: 'אחר', description: 'גיל או מצב שונה' }
  ]

  const currentSituations = [
    'משוחרר צה"ל',
    'סטודנט',
    'מחפש עבודה',
    'עובד מחפש קידום',
    'בעל עסק',
    'פנסיונר פעיל',
    'אחר'
  ]

  const interestOptions = [
    'טכנולוגיה ותכנות',
    'עסקים ויזמות',
    'עיצוב ואמנות',
    'שיווק דיגיטלי',
    'מכירות',
    'ניהול פרויקטים',
    'כתיבה ותוכן',
    'צילום ועריכה',
    'אחר'
  ]

  const plans = [
    { value: 'starter', label: 'מתחילים - ₪149' },
    { value: 'advanced', label: 'מתקדמים - ₪299' },
    { value: 'premium', label: 'פרימיום - ₪599' },
    { value: 'unsure', label: 'עדיין לא בטוח' }
  ]

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = 'שם מלא נדרש'
    if (!formData.email.trim()) newErrors.email = 'כתובת אימייל נדרשת'
    if (!formData.phone.trim()) newErrors.phone = 'מספר טלפון נדרש'
    if (!formData.ageGroup) newErrors.ageGroup = 'יש לבחור קבוצת גיל'
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'יש להסכים לתנאי השימוש'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה'
    }

    // Phone validation (Israeli phone number)
    const phoneRegex = /^[0-9]{9,10}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין'
    }

    // Age validation
    if (formData.age && (isNaN(formData.age) || formData.age < 16 || formData.age > 100)) {
      newErrors.age = 'גיל לא תקין'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter(item => item !== value)
        }))
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send data to your backend
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      
      // Analytics tracking (ready for Google Analytics/Facebook Pixel)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form'
        })
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead')
      }

    } catch (error) {
      console.error('Form submission error:', error)
      alert('אירעה שגיאה בשליחת הטופס. אנא נסה שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 scroll-mt-header">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              תודה רבה!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              קיבלנו את הפרטים שלך ונחזור אליך תוך 24 שעות.
              בינתיים, שלחנו לך אימייל עם מידע נוסף על הקורס.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">מה הלאה?</h3>
              <ul className="text-gray-600 space-y-2 text-right">
                <li>✅ נחזור אליך תוך 24 שעות</li>
                <li>✅ נקבע שיחת היכרות (15 דקות)</li>
                <li>✅ נתאים את הקורס בדיוק לצרכים שלך</li>
                <li>✅ נתחיל את המסע שלך להצלחה!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 scroll-mt-header">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              התחל את המסע שלך היום
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              מלא את הפרטים ונחזור אליך תוך 24 שעות עם תוכנית מותאמת אישית
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  למה לבחור בנו?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">התאמה אישית</h4>
                      <p className="text-gray-600 text-sm">כל קורס מותאם לגיל, רקע וצרכים שלך</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600">👥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">מדריכים מנוסים</h4>
                      <p className="text-gray-600 text-sm">צוות מומחים עם ניסיון בהוראה לכל הגילאים</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">תוצאות מהירות</h4>
                      <p className="text-gray-600 text-sm">תתחיל לראות התקדמות כבר מהשבוע הראשון</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-primary text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">מבצע מיוחד!</h3>
                  <p className="mb-4">הרשמה השבוע = 25% הנחה</p>
                  <div className="text-2xl font-bold">+ שיחת ייעוץ חינם</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="השם שלך"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                      גיל
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`input-field ${errors.age ? 'border-red-500' : ''}`}
                      placeholder="הגיל שלך"
                      min="16"
                      max="100"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="example@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="050-1234567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Age Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    איזה מהתיאורים הבאים מתאים לך? *
                  </label>
                  <div className="space-y-3">
                    {ageGroups.map((group) => (
                      <label key={group.value} className="flex items-start space-x-3 space-x-reverse cursor-pointer">
                        <input
                          type="radio"
                          name="ageGroup"
                          value={group.value}
                          checked={formData.ageGroup === group.value}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{group.label}</div>
                          <div className="text-sm text-gray-600">{group.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.ageGroup && <p className="text-red-500 text-sm mt-1">{errors.ageGroup}</p>}
                </div>

                {/* Current Situation */}
                <div>
                  <label htmlFor="currentSituation" className="block text-sm font-medium text-gray-700 mb-2">
                    המצב הנוכחי שלך
                  </label>
                  <select
                    id="currentSituation"
                    name="currentSituation"
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">בחר מצב</option>
                    {currentSituations.map((situation) => (
                      <option key={situation} value={situation}>{situation}</option>
                    ))}
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    תחומי עניין (ניתן לבחור כמה)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleChange}
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Plan */}
                <div>
                  <label htmlFor="preferredPlan" className="block text-sm font-medium text-gray-700 mb-2">
                    איזו תוכנית מעניינת אותך?
                  </label>
                  <select
                    id="preferredPlan"
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">בחר תוכנית</option>
                    {plans.map((plan) => (
                      <option key={plan.value} value={plan.value}>{plan.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה נוספת (אופציונלי)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="input-field"
                    placeholder="ספר לנו קצת על המטרות שלך..."
                  ></textarea>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start space-x-3 space-x-reverse cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      אני מסכים לתנאי השימוש ומדיניות הפרטיות *
                    </span>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                  <label className="flex items-start space-x-3 space-x-reverse cursor-pointer">
                    <input
                      type="checkbox"
                      name="allowMarketing"
                      checked={formData.allowMarketing}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      אני מסכים לקבל עדכונים ופרסומות במייל
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2 space-x-reverse">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>שולח...</span>
                    </span>
                  ) : (
                    'שלח ובואו נתחיל!'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 