import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AIForWorkPage() {
  const professions = [
    {
      title: "משרדניקים ועובדי מנהל",
      icon: "💼",
      description: "פתרונות AI לעבודה משרדית יומיומית",
      useCases: [
        "כתיבת מיילים מקצועיים תוך דקות",
        "הכנת מצגות ודוחות איכותיים",
        "תיקון ושיפור טקסטים בעברית ובאנגלית",
        "תמצות פגישות ורשימות משימות",
        "תרגום מסמכים ותכתובות"
      ],
      tools: ["ChatGPT", "Grammarly", "Gamma", "Claude"],
      color: "blue"
    },
    {
      title: "שיווק ותוכן דיגיטלי",
      icon: "📱",
      description: "יצירת תוכן איכותי ושיווק חכם",
      useCases: [
        "כתיבת פוסטים לרשתות חברתיות",
        "יצירת עיצובים מקצועיים לקמפיינים",
        "כתיבת תוכן לאתרים ובלוגים",
        "הכנת סרטוני שיווק קצרים",
        "ניתוח מגמות ורעיונות לתוכן"
      ],
      tools: ["Canva AI", "ChatGPT", "Claude", "Perplexity"],
      color: "pink"
    },
    {
      title: "עסקים קטנים ועצמאיים",
      icon: "🏪",
      description: "כלים לניהול עסק ביעילות",
      useCases: [
        "כתיבת תיאורי מוצרים ושירותים",
        "מענה אוטומטי לשאלות לקוחות",
        "תכנון אסטרטגיות שיווק דיגיטלי",
        "ניהול מלאי וחשבוניות",
        "יצירת חומרי הדרכה ללקוחות"
      ],
      tools: ["ChatGPT", "Canva AI", "Perplexity", "QuillBot"],
      color: "green"
    },
    {
      title: "חינוך והוראה",
      icon: "🎓",
      description: "כלי AI לחינוך מודרני ויעיל",
      useCases: [
        "הכנת מצגות ושיעורים אינטראקטיביים",
        "יצירת שאלונים ומבחנים",
        "כתיבת חומרי לימוד מותאמים",
        "תרגום חומרים לשפות שונות",
        "מעקב התקדמות תלמידים"
      ],
      tools: ["ChatGPT", "Gamma", "Canva AI", "Claude"],
      color: "purple"
    },
    {
      title: "מכירות ושירות לקוחות",
      icon: "📞",
      description: "שיפור חוויית הלקוח ותוצאות מכירות",
      useCases: [
        "כתיבת הצעות מחיר מקצועיות",
        "טיפוח לקוחות עם תוכן אישי",
        "מענה מהיר לפניות לקוחות",
        "ניתוח משוב לקוחות ושיפור שירות",
        "הכשרת צוות מכירות"
      ],
      tools: ["ChatGPT", "Claude", "Perplexity", "Canva AI"],
      color: "orange"
    },
    {
      title: "פרילנסרים ויוצרי תוכן",
      icon: "✍️",
      description: "כלים למקסום יצירתיות ופרודוקטיביות",
      useCases: [
        "כתיבה יצירתית ותוכן מקורי",
        "עיצוב גרפי ויזואלי מקצועי",
        "ניהול פרויקטים ולוחות זמנים",
        "מחקר שוק ומציאת לקוחות",
        "תמחור שירותים והצעות עבודה"
      ],
      tools: ["ChatGPT", "Claude", "Canva AI", "QuillBot"],
      color: "teal"
    }
  ]

  const benefits = [
    {
      icon: "⚡",
      title: "חיסכון זמן משמעותי",
      description: "משימות שלוקחות שעות הופכות לדקות"
    },
    {
      icon: "💰",
      title: "חיסכון כספי",
      description: "פחות צורך בעובדים חיצoniים ושירותים יקרים"
    },
    {
      icon: "📈",
      title: "שיפור איכות העבודה",
      description: "תוצאות מקצועיות יותר בפחות מאמץ"
    },
    {
      icon: "🔄",
      title: "אוטומציה של משימות חוזרות",
      description: "פחות עבודה שגרתית, יותר זמן לחשיבה אסטרטגית"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      pink: "from-pink-500 to-pink-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      <Head>
        <title>AI לעבודה 2025 | איך בינה מלאכותית תחסוך לכם זמן וכסף בעבודה</title>
        <meta name="description" content="גלו איך AI יכול לשנות את העבודה שלכם ב-2025. כלים מעשיים לכל מקצוע - משרדניקים, שיווק, עסקים קטנים ועוד. דוגמאות קונקרטיות מישראל." />
        <meta name="keywords" content="AI לעבודה ישראל 2025, בינה מלאכותית במקום עבודה, כלי AI לעסקים, ChatGPT לעבודה, אוטומציה עסקית ישראל, שיפור פרודוקטיביות עם AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="איך AI משנה את העבודה בישראל - מדריך מעשי 2025" />
        <meta property="og:description" content="גלו איך להשתמש בבינה מלאכותית כדי לחסוך זמן וכסף בעבודה. דוגמאות מעשיות לכל מקצוע בישראל." />
        <meta property="og:image" content="/images/ai-work-og.jpg" />
        <link rel="canonical" href="https://yallaai.co.il/ai-for-work" />
      </Head>
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          {/* Hero Section */}
          <section className="section-padding bg-hero-bg">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center bg-secondary/15 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-secondary/25 backdrop-blur-sm">
                  💼 המהפכה בעולם העבודה
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-header">
                  <span className="text-white text-shadow">
                    AI לעבודה - המדריך הישראלי ל-2025
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                  איך להשתמש בבינה מלאכותית כדי לחסוך זמן, לשפר תוצאות ולהקדים את כולם בעבודה. דוגמאות מעשיות לכל מקצוע.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#professions" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">
                    בואו נתחיל
                  </Link>
                  <Link href="/#contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold">
                    רוצה ללמוד עם מומחים
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-primary">🚀 למה AI זה המשנה משחק של 2025?</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                  בזמן שכולם עוד מתלבטים, החכמים כבר משתמשים ב-AI ומקבלים יתרון עצום בעבודה
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-12 bg-primary text-white">
            <div className="container-max">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-4xl font-bold mb-2">75%</div>
                  <p className="text-lg opacity-90">חיסכון זמן ממוצע בכתיבת מיילים</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2">₪2,000</div>
                  <p className="text-lg opacity-90">חיסכון חודשי ממוצע לעסק קטן</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <p className="text-lg opacity-90">מהעובדים אומרים שAI שיפר את עבודתם</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Professions Section */}
          <section id="professions" className="section-padding">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-primary">💼 AI לפי המקצוע שלכם</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  לא משנה מה אתם עושים לפרנסה - יש כלי AI שיעזור לכם לעשות את זה טוב יותר ומהר יותר
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {professions.map((profession, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${getColorClasses(profession.color)} p-6 text-white`}>
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-4">{profession.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold">{profession.title}</h3>
                          <p className="text-sm opacity-90">{profession.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="font-bold text-lg mb-4 text-gray-800">📋 מה AI יכול לעשות בשבילכם:</h4>
                      <ul className="space-y-2 mb-6">
                        {profession.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mt-1 ml-2">✓</span>
                            <span className="text-gray-700">{useCase}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-lg mb-3 text-gray-800">🛠️ הכלים המומלצים:</h4>
                      <div className="flex flex-wrap gap-2">
                        {profession.tools.map((tool, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Real Examples Section */}
          <section className="section-padding bg-gray-50">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-primary">📊 דוגמאות אמיתיות מהשטח</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  לא רק תיאוריה - הנה מה שקורה בפועל כשעובדים בישראל מתחילים להשתמש ב-AI
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl mb-4">👩‍💼</div>
                  <h3 className="text-xl font-bold mb-3">שרה, מזכירה רפואית</h3>
                  <p className="text-gray-700 mb-4">
                    "ChatGPT עוזר לי לכתוב מיילים למטופלים בצורה מקצועית. מה שלקח לי 20 דקות, עכשיו לוקח 3 דקות."
                  </p>
                  <div className="text-sm text-green-600 font-semibold">חיסכון: 85% מהזמן</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl mb-4">👨‍💻</div>
                  <h3 className="text-xl font-bold mb-3">דוד, בעל סטודיו צילום</h3>
                  <p className="text-gray-700 mb-4">
                    "Canva AI עוזר לי ליצור פוסטים לאינסטגרם תוך דקות. חוסך לי ₪3,000 בחודש על מעצב גרפי."
                  </p>
                  <div className="text-sm text-green-600 font-semibold">חיסכון: ₪3,000/חודש</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl mb-4">👩‍🏫</div>
                  <h3 className="text-xl font-bold mb-3">מירי, מורה יסודי</h3>
                  <p className="text-gray-700 mb-4">
                    "AI עוזר לי להכין מצגות מרתקות ומבחנים מותאמים. התלמידים הרבה יותר מעורבים בשיעורים."
                  </p>
                  <div className="text-sm text-green-600 font-semibold">שיפור: פי 2 בהשתתפות</div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-primary">🎯 איך מתחילים - המדריך המעשי</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  תוכנית פעולה פשוטה להטמעת AI בעבודה שלכם תוך 30 יום
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    week: "שבוע 1",
                    title: "זיהוי הזדמנויות",
                    tasks: [
                      "רשמו משימות חוזרות בעבודה",
                      "זהו מה לוקח הכי הרבה זמן",
                      "התחילו עם ChatGPT בחינם"
                    ]
                  },
                  {
                    week: "שבוע 2", 
                    title: "ניסויים ראשונים",
                    tasks: [
                      "נסו לכתוב מייל עם AI",
                      "בקשו עזרה בהכנת מצגת",
                      "תרגלו שאלות טובות"
                    ]
                  },
                  {
                    week: "שבוע 3",
                    title: "הרחבת השימוש", 
                    tasks: [
                      "הוסיפו כלי נוסף (Canva/Claude)",
                      "שתפו עם עמיתים",
                      "תעדו את החיסכון בזמן"
                    ]
                  },
                  {
                    week: "שבוע 4",
                    title: "מיטוב והטמעה",
                    tasks: [
                      "בנו שגרות עבודה חדשות",
                      "הדריכו אחרים בצוות",
                      "תכננו שיפורים נוספים"
                    ]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{phase.week}</h3>
                    <h4 className="text-lg font-semibold mb-4">{phase.title}</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mt-1 ml-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-padding bg-gradient-to-r from-primary to-secondary text-white"
          >
            <div className="container-max text-center">
              <h2 className="text-4xl font-bold mb-6">מוכנים לעשות את הקפיצה?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                הבנתם את הפוטנציאל, ראיתם את הדוגמאות. עכשיו זה הזמן להתחיל ללמוד איך להטמיע את זה נכון.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-guide" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">
                  המדריך המלא למתחילים
                </Link>
                <Link href="/free-ai-tools" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">
                  הכלים החינמיים הטובים ביותר
                </Link>
                <Link href="/#contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold">
                  רוצה ללמוד עם מומחים
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  )
}
