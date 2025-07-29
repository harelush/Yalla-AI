import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'למידה מותאמת אישית',
      description: 'תוכן מותאם לצרכיך ולקצב הלמידה שלך, עם מסלולים שונים לגילאים שונים',
      features: ['תוכן מגוון לכל גיל', 'קצב אישי', 'מסלולים מותאמים']
    },
    {
      icon: '💼',
      title: 'הכשרה מקצועית',
      description: 'כישורים נדרשים בשוק העבודה המודרני עם דגש על טכנולוגיה וחדשנות',
      features: ['כישורים מבוקשים', 'עדכון מקצועי', 'תעודה מוכרת']
    },
    {
      icon: '🕐',
      title: 'גמישות מלאה',
      description: 'למד מתי שנוח לך, מכל מקום ובקצב שמתאים לסגנון החיים שלך',
      features: ['24/7 נגישות', 'מכל מכשיר', 'אין מגבלות זמן']
    },
    {
      icon: '👥',
      title: 'קהילה תומכת',
      description: 'הצטרף לקהילה של לומדים מכל הגילאים, שתף ידע וקבל תמיכה',
      features: ['פורומים פעילים', 'חונכות אישית', 'רשת קשרים']
    },
    {
      icon: '📚',
      title: 'תוכן איכותי',
      description: 'חומרי לימוד מקצועיים שנבנו על ידי מומחים בתחום עם ניסיון רב שנים',
      features: ['מדריכים מובילים', 'תוכן מעודכן', 'משוב אישי']
    },
    {
      icon: '🚀',
      title: 'התקדמות מדידה',
      description: 'מעקב אחר ההתקדמות שלך עם מערכת מתקדמת המציגה את הישגיך',
      features: ['דוחות התקדמות', 'הישגים אישיים', 'יעדים ברורים']
    }
  ]

  const ageGroups = [
    {
      title: 'לצעירים (20-30)',
      subtitle: 'בונים את העתיד',
      benefits: [
        'גילוי תחומי עניין חדשים',
        'הכנה לקריירה מצליחה', 
        'רכישת כישורים מבוקשים',
        'בניית רשת קשרים מקצועית'
      ],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'bg-blue-500'
    },
    {
      title: 'למבוגרים (40-65)',
      subtitle: 'מתחדשים ומתפתחים',
      benefits: [
        'התעדכנות טכנולוגית',
        'פיתוח קריירה קיימת',
        'רכישת תחביבים חדשים',
        'שמירה על חדות מחשבתית'
      ],
      color: 'bg-green-50 border-green-200',
      iconColor: 'bg-green-500'
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-gray-50 scroll-mt-header">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            אנחנו מספקים חוויית למידה מותאמת לכל גיל ושלב בחיים, 
            עם דגש על איכות ותוצאות מדידות
          </p>
        </div>

        {/* Age-Specific Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {ageGroups.map((group, index) => (
            <div key={index} className={`card ${group.color} p-8`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${group.iconColor} rounded-lg flex items-center justify-center ml-4`}>
                  <span className="text-white text-2xl">
                    {index === 0 ? '🎓' : '💼'}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
                  <p className="text-gray-600">{group.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {group.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 space-x-reverse">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">סטודנטים פעילים</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">שיעור הצלחה</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">שעות תוכן</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">תמיכה זמינה</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              מוכן להתחיל את המסע שלך?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              הצטרף לקהילה של לומדים מצליחים מכל הגילאים
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              התחל עכשיו - ללא עלות
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits 