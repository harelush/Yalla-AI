import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-gradient-hero bg-pattern-dots"
      role="banner"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                השקעה בעצמך
                <span className="block text-gradient">היא ההשקעה הטובה ביותר</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delay-1">
              בעולם שבו הכל קורה מהר, אנחנו מלמדים אותך איך להשתמש בבינה מלאכותית כדי לחיות, ללמוד ולעבוד בצורה חכמה יותר.
              </p>
            </div>

            {/* Target Audience Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up-delay-2">
              <div className="flex items-center space-x-3 space-x-reverse bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">למי שמתחיל את הדרך וחוקר כיוונים חדשים</h3>
                  <p className="text-sm text-gray-600">היכרות עם עולם ה-AI, פתיחת אופציות, כלים שמקדמים אותך בקלות.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">למי שרוצה להישאר רלוונטי בעולם משתנה</h3>
                  <p className="text-sm text-gray-600">עדכון מקצועי, שליטה בכלים חכמים והתפתחות אישית בטכנולוגיה מתקדמת.</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 text-sm animate-fade-in-up-delay-2">
              <div className="flex items-center space-x-2 space-x-reverse bg-green-50 text-green-700 px-3 py-1 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>לימודים גמישים</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>מדריכים מנוסים</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>תעודה מוכרת</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                aria-label="התחל את הקורס עכשיו"
              >
                התחל עכשיו - ללא עלות
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="btn-secondary text-lg px-8 py-4"
                aria-label="למד עוד על הקורס"
              >
                למד עוד
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-600 animate-fade-in-up-delay-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex -space-x-2 space-x-reverse">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span>500+ סטודנטים מרוצים</span>
              </div>
              <div className="flex items-center space-x-1 space-x-reverse">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>דירוג 4.9/5</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in-up-delay-1">
            <div className="relative z-10">
              {/* Placeholder for hero image */}
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-primary rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl lg:text-8xl">
                <span>🚀</span>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce-slow">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl shadow-lg animate-pulse">
                ✅
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-secondary rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2">
        <button
          onClick={() => scrollToSection('benefits')}
          className="animate-bounce text-gray-600 hover:text-primary-600 transition-colors"
          aria-label="גלול למטה לקטע הבא"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero 