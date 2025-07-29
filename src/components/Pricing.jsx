import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: 'מתחילים',
      price: 149,
      originalPrice: 199,
      duration: 'חודש',
      description: 'מושלם לצעירים ומתחילים שרוצים להתנסות',
      features: [
        'גישה לכל תוכן הבסיס',
        '20 שעות וידאו איכותי',
        'תמיכה באימייל',
        'תעודת השלמה',
        'גישה למשך 6 חודשים',
        'חומרי למידה להורדה'
      ],
      notIncluded: [
        'יועץ אישי',
        'סדנאות חיות',
        'פרויקטים מתקדמים'
      ],
      popular: false,
      color: 'border-gray-200',
      buttonStyle: 'btn-outline',
      targetAudience: 'ideal-young'
    },
    {
      name: 'מתקדמים',
      price: 299,
      originalPrice: 399,
      duration: 'חודש',
      description: 'הבחירה הפופולרית - מתאים לכל הגילאים',
      features: [
        'כל מה שיש בתוכנית המתחילים',
        '50+ שעות תוכן מתקדם',
        'יועץ אישי שבועי',
        '5 סדנאות חיות בחודש',
        'פרויקטים מעשיים',
        'קהילה פרטית',
        'גישה למשך שנה',
        'תמיכה בטלפון ואימייל'
      ],
      notIncluded: [
        'הכשרה אישית 1:1',
        'פרויקט גמר מותאם'
      ],
      popular: true,
      color: 'border-primary-500 ring-2 ring-primary-200',
      buttonStyle: 'btn-primary',
      targetAudience: 'ideal-both'
    },
    {
      name: 'פרימיום',
      price: 599,
      originalPrice: 799,
      duration: 'חודש',
      description: 'למבוגרים המחפשים התפתחות מקצועית מלאה',
      features: [
        'כל מה שיש בתוכנית המתקדמים',
        'הכשרה אישית 1:1 (4 פגישות בחודש)',
        'פרויקט גמר מותאם אישית',
        'גישה בלתי מוגבלת לכל התכנים',
        'סדנאות VIP והרצאות אקסקלוסיביות',
        'תמיכה 24/7',
        'ליווי עד להשמה/פרויקט',
        'רשת קשרים מקצועית'
      ],
      notIncluded: [],
      popular: false,
      color: 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50',
      buttonStyle: 'btn-secondary',
      targetAudience: 'ideal-mature'
    }
  ]

  const faqs = [
    {
      question: 'האם יש הבדל בתוכן לפי גיל?',
      answer: 'התוכן מותאם לכל הגילאים, אבל המדריכים מתאימים את הסגנון והדוגמאות לקבוצת הגיל. צעירים יקבלו דוגמאות מעולם הטכנולוגיה ומבוגרים יקבלו דוגמאות מעולם העסקים.'
    },
    {
      question: 'מה קורה אם אני לא מרוצה?',
      answer: 'אנחנו מציעים החזר כספי מלא תוך 14 יום מתחילת הקורס, ללא שאלות. המטרה שלנו היא שתהיה מרוצה 100%.'
    },
    {
      question: 'האם אני צריך ידע מוקדם?',
      answer: 'לא! הקורס בנוי לכל הרמות. אנחנו מתחילים מהבסיס ומתקדמים בהדרגה. המדריכים שלנו מתמחים בהסבר פשוט וברור.'
    },
    {
      question: 'כמה זמן לוקח לסיים את הקורס?',
      answer: 'זה תלוי בקצב שלך. רוב הסטודנטים מסיימים תוך 2-4 חודשים עם השקעה של 3-5 שעות בשבוע.'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white scroll-mt-header">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            בחר את התוכנית שמתאימה לך
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            תוכניות מחיר שונות לכל גיל וצורך - מתחילים שמחפשים לגלות ועד מבוגרים שרוצים התקדמות מקצועית
          </p>
          <div className="mt-6 inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            מבצע מיוחד - חסוך עד 25%
          </div>
        </div>

        {/* Target Audience Guide */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center">
              <span className="text-2xl ml-3">🎓</span>
              לצעירים ומשוחררים (20-30)
            </h3>
            <p className="text-blue-800 text-sm mb-3">
              מומלץ להתחיל עם תוכנית המתחילים ולעבור למתקדמים לפי הצורך
            </p>
            <div className="text-sm text-blue-700">
              <strong>מתאים במיוחד:</strong> תוכניות מתחילים ומתקדמים
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-3 flex items-center">
              <span className="text-2xl ml-3">💼</span>
              למבוגרים (40-65)
            </h3>
            <p className="text-green-800 text-sm mb-3">
              מומלץ תוכנית מתקדמים או פרימיום עם ליווי אישי וגמישות מלאה
            </p>
            <div className="text-sm text-green-700">
              <strong>מתאים במיוחד:</strong> תוכניות מתקדמים ופרימיום
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative card ${plan.color} p-8 ${plan.popular ? 'transform scale-105 shadow-2xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 right-1/2 transform translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    הכי פופולרי
                  </span>
                </div>
              )}

              {/* Target Audience Indicator */}
              <div className="mb-4">
                {plan.targetAudience === 'ideal-young' && (
                  <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                    <span className="ml-1">🎓</span>
                    מושלם לצעירים
                  </span>
                )}
                {plan.targetAudience === 'ideal-mature' && (
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                    <span className="ml-1">💼</span>
                    מושלם למבוגרים
                  </span>
                )}
                {plan.targetAudience === 'ideal-both' && (
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">
                    <span className="ml-1">🌟</span>
                    מתאים לכל הגילאים
                  </span>
                )}
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <span className="text-4xl font-bold text-gray-900">₪{plan.price}</span>
                    <span className="text-gray-600">/{plan.duration}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse mt-1">
                    <span className="text-lg text-gray-400 line-through">₪{plan.originalPrice}</span>
                    <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                      חסוך ₪{plan.originalPrice - plan.price}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`w-full ${plan.buttonStyle} mb-6`}
                >
                  התחל עכשיו
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  כלול בתוכנית:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 space-x-reverse">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 border-b border-gray-200 pb-2 mt-6">
                      לא כלול:
                    </h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3 space-x-reverse">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
              ✓
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ערבות החזר כספי ל-14 יום
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנחנו כל כך בטוחים שתאהב את הקורס שאנחנו מציעים החזר כספי מלא 
            אם לא תהיה מרוצה תוך 14 יום מתחילת הלימודים
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            שאלות נפוצות
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 