import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FreeAIToolsPage() {
  const tools = [
    {
      name: "ChatGPT",
      category: "כתיבה וחשיבה",
      description: "הכלי הכי פופולרי בעולם לכתיבה, תכנון ושאלות. מושלם למתחילים.",
      price: "חינם + תוכנית בתשלום",
      pros: ["קל לשימוש", "מגוון רחב של יכולות", "תמיכה בעברית"],
      cons: ["מגבלות בגרסה החינמית", "לא תמיד עדכני"],
      link: "https://chat.openai.com",
      icon: "💬",
      color: "green"
    },
    {
      name: "Claude",
      category: "כתיבה מתקדמת",
      description: "חלופה מעולה ל-ChatGPT, טוב במיוחד לכתיבה ארוכה וניתוח טקסטים.",
      price: "חינם + תוכנית בתשלום",
      pros: ["כתיבה איכותית", "ניתוח מעמיק", "אמין יותר"],
      cons: ["פחות מוכר", "מגבלות בגרסה חינמית"],
      link: "https://claude.ai",
      icon: "🧠",
      color: "blue"
    },
    {
      name: "Canva AI",
      category: "עיצוב",
      description: "יצירת עיצובים מקצועיים בלי ידע גרפי. מושלם לפוסטים, מצגות ועלונים.",
      price: "חינם + תוכנית פרו",
      pros: ["קל מאוד לשימוש", "תבניות מעוצבות", "תוצאות מקצועיות"],
      cons: ["אפשרויות מוגבלות בחינמי", "תלוי ברשת"],
      link: "https://canva.com",
      icon: "🎨",
      color: "purple"
    },
    {
      name: "Perplexity",
      category: "חיפוש מידע",
      description: "חיפוש חכם שנותן תשובות מדויקות עם מקורות. כמו גוגל אבל עם AI.",
      price: "חינם + תוכנית פרו",
      pros: ["תשובות עם מקורות", "מידע עדכני", "ממשק נוח"],
      cons: ["מגבלות בחיפושים", "לא תמיד בעברית"],
      link: "https://perplexity.ai",
      icon: "🔍",
      color: "orange"
    },
    {
      name: "Gamma",
      category: "מצגות",
      description: "יצירת מצגות מרשימות תוך דקות. רק מזינים נושא והכלי עושה הכל.",
      price: "חינם + תוכניות בתשלום",
      pros: ["מצגות מהירות", "עיצוב מקצועי", "קל לשימוש"],
      cons: ["מוגבל לאנגלית", "תבניות מוגבלות בחינמי"],
      link: "https://gamma.app",
      icon: "📊",
      color: "teal"
    },
    {
      name: "Grammarly",
      category: "תיקון כתיבה",
      description: "תיקון שגיאות כתיב ודקדוק, שיפור סגנון כתיבה. עובד גם בעברית (חלקית).",
      price: "חינם + תוכנית פרימיום",
      pros: ["תיקון אוטומטי", "הצעות לשיפור", "פלאגין לדפדפן"],
      cons: ["מוגבל בעברית", "צריך תוכנית בתשלום לתכונות מתקדמות"],
      link: "https://grammarly.com",
      icon: "✍️",
      color: "red"
    },
    {
      name: "Bing AI (Copilot)",
      category: "חיפוש וכתיבה",
      description: "הכלי של מיקרוסופט. חינמי לגמרי ומשולב עם חיפוש עדכני.",
      price: "חינם לגמרי",
      pros: ["חינמי לחלוטין", "מידע עדכני", "שילוב עם חיפוש"],
      cons: ["פחות מתקדם", "ממשק פחות נוח"],
      link: "https://copilot.microsoft.com",
      icon: "🔎",
      color: "blue"
    },
    {
      name: "QuillBot",
      category: "שכתוב טקסטים",
      description: "שכתוב טקסטים בסגנונות שונים, תיקון ושיפור משפטים.",
      price: "חינם + תוכנית פרימיום",
      pros: ["שכתוב איכותי", "מגוון סגנונות", "קל לשימוש"],
      cons: ["מוגבל בעברית", "מגבלות באורך טקסט"],
      link: "https://quillbot.com",
      icon: "📝",
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: "from-green-500 to-green-600",
      blue: "from-blue-500 to-blue-600", 
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
      red: "from-red-500 to-red-600",
      indigo: "from-indigo-500 to-indigo-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      <Head>
        <title>כלי AI חינמיים 2025 | רשימת הכלים הטובים ביותר למתחילים בישראל</title>
        <meta name="description" content="רשימה מלאה של כלי בינה מלאכותית חינמיים ב-2025. ChatGPT, Claude, Canva AI ועוד. למתחילים בישראל עם הסברים בעברית ודירוגים." />
        <meta name="keywords" content="כלי AI חינמיים 2025, בינה מלאכותית חינמית ישראל, ChatGPT חינם, Claude חינם, Canva AI, כלים למתחילים AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="הכלים הטובים ביותר ללמידת AI בישראל - חינם!" />
        <meta property="og:description" content="רשימה מלאה וכנה של כלי AI חינמיים. עם יתרונות, חסרונות ודירוגים מבית YallaAI." />
        <meta property="og:image" content="/images/free-tools-og.jpg" />
        <link rel="canonical" href="https://yallaai.co.il/free-ai-tools" />
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
                  🆓 הכלים הטובים ביותר - חינם
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-header">
                  <span className="text-white text-shadow">
                    כלי AI חינמיים לישראלים ב-2025
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                  רשימת הכלים הטובים ביותר למתחילים בישראל - הרשימה המלאה והכנה של הכלים הטובים ביותר ללמידת בינה מלאכותית. בעברית, עם דירוגים אמיתיים.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <div className="section-padding">
            <div className="container-max">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-surface rounded-2xl p-8 mb-12 shadow-lg text-center"
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">🎯 למי רשימת הכלים הטובים ביותר למתחילים?</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  אם אתם מתחילים עם AI בישראל, רוצים לנסות כלים חינמיים לפני שקונים משהו, או פשוט סקרנים - רשימת הכלים הטובים ביותר הזו בשבילכם.
                  כל כלי נבדק על ידינו ואנחנו נותנים לכם את האמת - גם הטוב וגם הפחות טוב.
                </p>
              </motion.div>

              {/* Tools Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${getColorClasses(tool.color)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{tool.icon}</span>
                        <span className="text-sm opacity-90">{tool.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                      <p className="text-sm opacity-90">{tool.price}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">{tool.description}</p>
                      
                      {/* Pros */}
                      <div className="mb-4">
                        <div className="font-bold text-green-600 mb-2">✅ יתרונות:</div>
                        <ul className="text-sm space-y-1">
                          {tool.pros.map((pro, idx) => (
                            <li key={idx} className="text-green-600">• {pro}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div className="mb-6">
                        <div className="font-bold text-red-600 mb-2">❌ חסרונות:</div>
                        <ul className="text-sm space-y-1">
                          {tool.cons.map((con, idx) => (
                            <li key={idx} className="text-red-600">• {con}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Link */}
                      <a 
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-semibold transition-colors"
                      >
                        נסו את {tool.name} →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tips Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 rounded-2xl p-8 mb-12"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">💡 טיפים לשימוש נכון בכלים</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">🚀 איך להתחיל:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• התחילו עם כלי אחד (מומלץ ChatGPT)</li>
                      <li>• נסו משימות פשוטות בהתחלה</li>
                      <li>• אל תפחדו לנסות ולטעות</li>
                      <li>• תשאלו שאלות ספציפיות</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">⚠️ על מה לשמור:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• אל תשתפו מידע אישי רגיש</li>
                      <li>• תמיד בדקו מידע חשוב</li>
                      <li>• הכלים לא מושלמים - זה בסדר</li>
                      <li>• השוו תוצאות בין כלים שונים</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-12"
              >
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">❓ שאלות נפוצות</h2>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-2">באיזה כלי כדאי להתחיל?</h3>
                    <p className="text-gray-700">ChatGPT זה המקום הכי טוב להתחיל. זה הכי פשוט, יש לו גרסה חינמית טובה, והוא מכסה הכי הרבה צרכים.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-2">האם הכלים האלה באמת חינמיים?</h3>
                    <p className="text-gray-700">כן, לכולם יש גרסה חינמית שמספיקה למתחילים. אמנם יש מגבלות, אבל אפשר להשיג הרבה גם בחינם.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-2">כמה זמן לוקח להתרגל לכלים?</h3>
                    <p className="text-gray-700">עם רוב הכלים תתרגלו תוך יום-יומיים של שימוש. החלק הקשה זה לדעת איך לשאול את השאלות הנכונות.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">מה אם אני לא טכנולוגי?</h3>
                    <p className="text-gray-700">בכלל לא צריך להיות טכנולוגי! הכלים האלה נבנו בדיוק למי שלא יודע טכנולוגיה. אם אתם יודעים לשלוח וואטסאפ, תסתדרו מצוין.</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center"
              >
                <h2 className="text-3xl font-bold mb-4">מוכנים להתקדם לרמה הבאה ב-AI?</h2>
                <p className="text-xl mb-6 opacity-90">
                  הכלים הבסיסיים זה רק ההתחלה. בקורס שלנו תלמדו איך להפיק מהם את המקסימום.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/ai-guide" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">
                    המדריך המקיף ל-AI
                  </Link>
                  <Link href="/#contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold">
                    הדרכה אישית עם מומחים
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
