import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'דני כהן',
      age: 23,
      role: 'משוחרר צה"ל',
      content: 'הקורס עזר לי לגלות את התחום שאני באמת רוצה להמשיך בו. המדריכים היו סבלניים והתוכן היה ברור ומעניין. הרגשתי שאני לא לבד במסע הזה.',
      rating: 5,
      image: '👨‍🎓',
      category: 'young'
    },
    {
      id: 2,
      name: 'מרים לוי',
      age: 45,
      role: 'מנהלת משאבי אנוש',
      content: 'חזרתי ללמוד אחרי 20 שנה והייתי לחוצה. הקורס היה מבנה בצורה כזו שהרגשתי בנוח ובטוח. למדתי כישורים חדשים שעזרו לי בקריירה.',
      rating: 5,
      image: '👩‍💼',
      category: 'mature'
    },
    {
      id: 3,
      name: 'יוסי פרידמן',
      age: 22,
      role: 'סטודנט',
      content: 'התוכן מעודכן ורלוונטי למה שקורה היום בשוק. הכי חשוב שלמדתי לא רק תיאוריה אלא גם כישורים מעשיים שאני יכול להשתמש בהם מיד.',
      rating: 5,
      image: '👨‍💻',
      category: 'young'
    },
    {
      id: 4,
      name: 'רות גולדברג',
      age: 58,
      role: 'רוקחת בדימוס',
      content: 'לא האמנתי שאוכל ללמוד משהו חדש בגיל שלי, אבל הקורס הוכיח לי שטעיתי. המדריכים היו מכבדים ונתנו לי את הביטחון להמשיך.',
      rating: 5,
      image: '👩‍⚕️',
      category: 'mature'
    },
    {
      id: 5,
      name: 'עומר ישראלי',
      age: 24,
      role: 'עובד היי-טק',
      content: 'הקורס עזר לי לעבור לתפקיד חדש. הדרך שבה המידע מוצג הוא פשוט ומובן, והתמיכה הטכנית הייתה מצוינת.',
      rating: 5,
      image: '👨‍🔬',
      category: 'young'
    },
    {
      id: 6,
      name: 'אברהם משה',
      age: 52,
      role: 'בעל עסק',
      content: 'המשכתי לנהל את העסק שלי תוך כדי הלימודים. הגמישות של הקורס אפשרה לי להתקדם בקצב שלי ולא להרגיש לחוץ.',
      rating: 5,
      image: '👨‍💼',
      category: 'mature'
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const youngTestimonials = testimonials.filter(t => t.category === 'young')
  const matureTestimonials = testimonials.filter(t => t.category === 'mature')

  return (
    <section id="testimonials" className="section-padding bg-white scroll-mt-header">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            מה אומרים הסטודנטים שלנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            שמע את הסיפורים המעוררי השראה של לומדים מכל הגילאים שהצליחו לשנות את החיים שלהם
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentSlide * -100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                      {/* Quote */}
                      <div className="text-6xl text-primary-200 mb-6">״</div>
                      
                      {/* Content */}
                      <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                        {testimonial.content}
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4 space-x-reverse">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                          {testimonial.image}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role} • גיל {testimonial.age}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-primary-600"
              aria-label="המלצה קודמת"
            >
              <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`עבור להמלצה ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-primary-600"
              aria-label="המלצה הבאה"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category-based testimonials */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Young Adults */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              צעירים ומשוחררים
            </h3>
            <div className="space-y-6">
              {youngTestimonials.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="card">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 space-x-reverse mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                        "{testimonial.content.substring(0, 120)}..."
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mature Adults */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              מבוגרים מתפתחים
            </h3>
            <div className="space-y-6">
              {matureTestimonials.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="card">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 space-x-reverse mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                        "{testimonial.content.substring(0, 120)}..."
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 