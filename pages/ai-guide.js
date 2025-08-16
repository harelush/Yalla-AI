import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AIGuidePage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>מדריך AI למתחילים 2025 | איך ללמוד בינה מלאכותית בעברית בישראל</title>
        <meta name="description" content="המדריך השלם ללמידת בינה מלאכותית למתחילים בישראל 2025. כל מה שצריך לדעת על ChatGPT, כלי AI חינמיים, קורסים בעברית ואיך להתחיל." />
        <meta name="keywords" content="מדריך AI למתחילים, בינה מלאכותית בעברית, ChatGPT מדריך בעברית, כלי AI חינמיים ישראל, למידת בינה מלאכותית מאפס, AI לעבודה ישראל" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="המדריך השלם ללמידת AI למתחילים בישראל 2025" />
        <meta property="og:description" content="כל מה שצריך לדעת על בינה מלאכותית למתחילים - מ-ChatGPT ועד כלים מתקדמים. בעברית, פשוט ומעשי." />
        <meta property="og:image" content="/images/ai-guide-og.jpg" />
        <meta property="og:url" content="https://yallaai.co.il/ai-guide" />
        <link rel="canonical" href="https://yallaai.co.il/ai-guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type":"ListItem","position":1,"name":"בית","item":"https://yallaai.co.il/"},
                {"@type":"ListItem","position":2,"name":"מדריך AI","item":"https://yallaai.co.il/ai-guide"}
              ]
            })
          }}
        />
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "מדריך AI למתחילים 2025",
              "description": "המדריך השלם ללמידת בינה מלאכותית למתחילים בישראל",
              "author": {
                "@type": "Organization",
                "name": "YallaAI"
              },
              "publisher": {
                "@type": "Organization",
                "name": "YallaAI",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yallaai.co.il/images/darkmode_logo.svg"
                }
              },
              "datePublished": "2025-01-01",
              "dateModified": "2025-01-01",
              "inLanguage": "he"
            })
          }}
        />
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
                  🎓 המדריך המלא למתחילים
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-header">
                  <span className="text-white text-shadow">
                    מדריך AI למתחילים 2025
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                  איך ללמוד בינה מלאכותית בעברית בישראל - כל מה שצריך לדעת מהבסיס ועד לכלים המתקדמים. בשפה פשוטה, בעברית, עם דוגמאות מהחיים למתחילים.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <div className="section-padding">
            <div className="container-max max-w-4xl">
              <div className="prose prose-xl max-w-none text-right">
                
                {/* Table of Contents */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-surface rounded-2xl p-8 mb-12 shadow-lg"
                >
                  <h2 className="text-3xl font-bold mb-6 text-primary">📋 מה נלמד במדריך AI למתחילים בישראל?</h2>
                  <ul className="list-none space-y-3 text-lg">
                    <li>🤖 <strong>מה זה בינה מלאכותית</strong> - הבסיס בשפה פשוטה בעברית</li>
                    <li>💬 <strong>ChatGPT למתחילים</strong> - איך ללמוד ולהשתמש ומה אפשר לעשות</li>
                    <li>🛠️ <strong>הכלים הכי שימושיים</strong> - מה כדאי להכיר ב-2025 בישראל</li>
                    <li>💼 <strong>AI לעבודה</strong> - איך זה יכול לעזור לכם היום</li>
                    <li>🎯 <strong>איך מתחילים ללמוד</strong> - צעד אחר צעד מהיום</li>
                  </ul>
                </motion.div>

                {/* Section 1 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold mb-6 text-primary">🤖 מה זה בינה מלאכותית ולמה זה חשוב לכם?</h2>
                  
                  <p className="text-xl leading-relaxed mb-6">
                    תשכחו מסרטי המדע הבדיוני - בינה מלאכותית היום זה לא רובוטים שמשתלטים על העולם. זה פשוט כלי שעוזר לכם לעשות דברים מהר יותר וטוב יותר.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-800">💡 במילים פשוטות:</h3>
                    <p className="text-lg text-blue-700">
                      AI זה כמו עוזר חכם שיודע לכתוב, לעצב, לחפש מידע ואפילו לתכנן. הוא לא מחליף אתכם - הוא עושה אתכם יותר יעילים.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">🌟 דוגמאות מהחיים שלכם:</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg mb-8">
                    <li><strong>בעבודה:</strong> כתיבת מיילים מקצועיים תוך שניות</li>
                    <li><strong>בלימודים:</strong> הכנת מצגות ותקצירים</li>
                    <li><strong>בבית:</strong> תכנון ארוחות, רשימות קניות חכמות</li>
                    <li><strong>ביצירתיות:</strong> עיצוב פוסטים לרשתות חברתיות</li>
                  </ul>
                </motion.section>

                {/* Section 2 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold mb-6 text-primary">💬 ChatGPT למתחילים - המדריך המעשי</h2>
                  
                  <p className="text-xl leading-relaxed mb-6">
                    ChatGPT זה הכלי הכי פופולרי בעולם ה-AI, ובצדק. זה כמו לשוחח עם מישהו שיודע הכל אבל בסבלנות אינסופית.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-green-800">✅ איך להתחיל נכון:</h3>
                      <ul className="space-y-2 text-green-700">
                        <li>🔗 נרשמים ב-ChatGPT (יש גרסה חינמית)</li>
                        <li>📝 מתחילים עם שאלות פשוטות</li>
                        <li>🎯 ספציפיים בבקשות</li>
                        <li>🔄 משפרים את השאלה אם התוצאה לא מספקת</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 text-yellow-800">⚡ דוגמאות לשימוש מעשי:</h3>
                      <ul className="space-y-2 text-yellow-700">
                        <li>"כתוב לי מייל למנהל על בקשת חופשה"</li>
                        <li>"תן לי 5 רעיונות לפוסט באינסטגרם"</li>
                        <li>"תסביר לי על ביטוח רכב בפשטות"</li>
                        <li>"עזור לי לתכנן ארוחת ערב רומנטית"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold mb-4 text-red-800">🚫 טעויות נפוצות להימנע מהן:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>לא לבדוק עובדות חשובות (ChatGPT יכול לטעות)</li>
                      <li>לא להעלות מידע אישי רגיש</li>
                      <li>לא לצפות לנוסחאות מושלמות במבחן ראשון</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Section 3 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold mb-6 text-primary">🛠️ הכלים הכי שימושיים שכל ישראלי צריך להכיר ב-2025</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* ChatGPT */}
                    <div className="bg-surface p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">💬 ChatGPT</h3>
                      <p className="mb-3"><strong>בשביל מה:</strong> כתיבה, תכנון, שאלות</p>
                      <p className="mb-3"><strong>חינמי?</strong> כן (עם מגבלות)</p>
                      <p className="text-sm text-gray-600">הכלי הכי בסיסי וחשוב - <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">נסו כאן</a></p>
                    </div>

                    {/* Canva AI */}
                    <div className="bg-surface p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">🎨 Canva AI</h3>
                      <p className="mb-3"><strong>בשביל מה:</strong> עיצובים, פוסטים, מצגות</p>
                      <p className="mb-3"><strong>חינמי?</strong> חלקית</p>
                      <p className="text-sm text-gray-600">מושלם למי שלא יודע לעצב - <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">התחילו כאן</a></p>
                    </div>

                    {/* Claude */}
                    <div className="bg-surface p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">🧠 Claude</h3>
                      <p className="mb-3"><strong>בשביל מה:</strong> ניתוח טקסטים, כתיבה מתקדמת</p>
                      <p className="mb-3"><strong>חינמי?</strong> כן (עם מגבלות)</p>
                      <p className="text-sm text-gray-600">חלופה מעולה ל-ChatGPT - <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">בדקו כאן</a></p>
                    </div>

                    {/* Perplexity */}
                    <div className="bg-surface p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-primary">🔍 Perplexity</h3>
                      <p className="mb-3"><strong>בשביל מה:</strong> חיפוש מידע עדכני</p>
                      <p className="mb-3"><strong>חינמי?</strong> כן (עם מגבלות)</p>
                      <p className="text-sm text-gray-600">כמו גוגל אבל עם תשובות חכמות - <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">חפשו כאן</a></p>
                    </div>
                  </div>
                </motion.section>

                {/* Section 4 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold mb-6 text-primary">💼 AI לעבודה - איך זה יכול לעזור לכם כבר היום</h2>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4 text-blue-800">👔 למשרדניקים:</h3>
                      <ul className="space-y-2 text-blue-700">
                        <li>• כתיבת מיילים מקצועיים תוך דקות</li>
                        <li>• הכנת מצגות ודוחות</li>
                        <li>• תיקון שגיאות כתיב ודקדוק</li>
                        <li>• תרגום מסמכים</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4 text-green-800">🏪 לעסקים קטנים:</h3>
                      <ul className="space-y-2 text-green-700">
                        <li>• יצירת תוכן לרשתות חברתיות</li>
                        <li>• כתיבת תיאורי מוצרים</li>
                        <li>• תכנון קמפיינים שיווקיים</li>
                        <li>• מענה לשאלות לקוחות</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4 text-purple-800">🎓 לסטודנטים:</h3>
                      <ul className="space-y-2 text-purple-700">
                        <li>• עזרה בכתיבת עבודות (לא העתקה!)</li>
                        <li>• הכנת תקצירים למבחנים</li>
                        <li>• הסברים פשוטים לנושאים מורכבים</li>
                        <li>• תרגול שפות זרות</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-4xl font-bold mb-6 text-primary">🎯 איך מתחילים - תוכנית צעד אחר צעד</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">שבוע ראשון - הכרות עם ChatGPT</h3>
                        <p className="text-gray-700">נרשמים, מנסים כמה שאלות פשוטות, מבינים איך זה עובד</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">שבוע שני - Canva AI לעיצובים</h3>
                        <p className="text-gray-700">יוצרים פוסט ראשון, מתנסים בתבניות, מבינים איך לעצב בלי ידע</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">שבוע שלישי - שילוב בעבודה</h3>
                        <p className="text-gray-700">מתחילים להשתמש ב-AI במשימות יומיומיות בעבודה</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">שבוע רביעי - כלים מתקדמים</h3>
                        <p className="text-gray-700">מכירים Claude, Perplexity וכלים נוספים</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center"
                >
                  <h2 className="text-3xl font-bold mb-4">מעוניינים בקורס AI מובנה ומקצועי?</h2>
                  <p className="text-xl mb-6 opacity-90">
                    המדריך הזה נתן לכם טעימה, אבל יש עוד הרבה מה ללמוד! בקורס שלנו תקבלו:
                  </p>
                  <ul className="text-lg mb-8 space-y-2 opacity-90">
                    <li>✅ הכוונה אישית צעד אחר צעד</li>
                    <li>✅ תרגול מעשי על פרויקטים אמיתיים</li>
                    <li>✅ קהילה של אנשים שלומדים איתכם</li>
                    <li>✅ עדכונים שוטפים על כלים חדשים</li>
                  </ul>
                  <Link href="/#contact" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">
                    פרטים על הקורס המלא
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
