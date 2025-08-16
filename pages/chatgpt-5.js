import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChatGPT5Page() {
  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>ChatGPT 5 בעברית – מה חדש ואיך מתחילים | YallaAI</title>
        <meta name="description" content="ChatGPT 5 (או Chat GPT 5) הגיע – מה חדש בגרסה, איך מתחילים בעברית, ולמי זה מתאים. מדריך קצר ופשוט למתחילים בישראל + קיצורי דרך מעשיים." />
        <meta name="keywords" content="ChatGPT 5, Chat GPT 5, צ'אט ג'י פי טי 5, צ'אט GPT 5 בעברית, מדריך ChatGPT 5, ChatGPT 5 ישראל, בינה מלאכותית בעברית, קורס AI למתחילים" />
        <meta property="og:title" content="ChatGPT 5 בעברית – מה חדש ואיך מתחילים" />
        <meta property="og:description" content="הסבר פשוט בעברית על ChatGPT 5: מה חדש, איך משתמשים ואיך זה עוזר בעבודה ובחיים. כולל קיצורי דרך למתחילים בישראל." />
        <meta property="og:image" content="/images/robot.png" />
        <meta property="og:url" content="https://yallaai.co.il/chatgpt-5" />
        <link rel="canonical" href="https://yallaai.co.il/chatgpt-5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "ChatGPT 5 בעברית – מה חדש ואיך מתחילים",
              "description": "הסבר פשוט בעברית על ChatGPT 5: מה חדש, איך משתמשים ואיך זה עוזר בעבודה ובחיים.",
              "datePublished": "2025-08-11",
              "dateModified": "2025-08-11",
              "inLanguage": "he",
              "author": {"@type": "Organization", "name": "YallaAI"},
              "publisher": {"@type": "Organization", "name": "YallaAI", "logo": {"@type": "ImageObject", "url": "https://yallaai.co.il/images/darkmode_logo.svg"}}
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "מה חדש ב-ChatGPT 5 לעומת גרסה 4?",
                  "acceptedAnswer": {"@type": "Answer", "text": "שיפורי הבנה והיגיון, מהירות תגובה, יכולות מולטימדיה טובות יותר ושילוב חלק יותר בכלים חיצוניים. למתחיל – המשמעות היא תשובות מדויקות יותר ופחות ניסוי וטעייה."}
                },
                {
                  "@type": "Question",
                  "name": "האם ChatGPT 5 חינמי בישראל?",
                  "acceptedAnswer": {"@type": "Answer", "text": "יש גרסה חינמית עם יכולות בסיסיות ומספיקות למתחילים. גרסאות בתשלום מציעות יכולות מתקדמות יותר וגישה לטכנולוגיות חדשות מהר יותר."}
                },
                {
                  "@type": "Question",
                  "name": "איך מתחילים להשתמש ב-ChatGPT 5 בעברית?",
                  "acceptedAnswer": {"@type": "Answer", "text": "פותחים חשבון, מתחילים בשאלות קצרות ופשוטות בעברית, ומדייקים את הבקשה צעד-צעד. מומלץ להשתמש בתבניות פרומפט קצרות וברורות."}
                }
              ]
            })
          }}
        />
      </Head>

      <Layout>
        <section className="section-padding bg-hero-bg">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center bg-secondary/15 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-secondary/25 backdrop-blur-sm">
                ⚡ טרנד חם בישראל: ChatGPT 5
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-header">
                <span className="text-white text-shadow">ChatGPT 5 בעברית – מה חדש ואיך מתחילים</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                הסבר קצר ופשוט על ChatGPT 5 (או Chat GPT 5) מ-YallaAI – מה זה אומר בשבילכם, איך זה עוזר ביום-יום, ואיך מתחילים ממש עכשיו בעברית.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToContact} className="btn-primary text-lg group" aria-label="הירשמו לשיעור ניסיון">
                  רוצה ללמוד עם מדריך בעברית?
                  <span className="inline-block transition-transform group-hover:translate-x-1 mr-2">←</span>
                </button>
                <Link href="/ai-guide" className="btn-secondary text-lg" aria-label="מעבר למדריך השלם">
                  המדריך השלם ל-AI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-padding">
          <div className="container-max max-w-4xl">
            <div className="prose prose-xl max-w-none text-right">
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-primary">מה חדש ב-ChatGPT 5 מ-YallaAI – במילים פשוטות</h2>
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">בקצרה:</h3>
                  <ul className="list-disc list-inside text-blue-800 space-y-2">
                    <li>הבנה טובה יותר של שאלות מורכבות – פחות צורך לחזור ולתקן</li>
                    <li>מהיר יותר בתשובות – חוסך זמן בעבודה ובלימודים</li>
                    <li>מולטימדיה משופרת – טקסט, תמונה ולעיתים גם אודיו/וידאו</li>
                    <li>חיבור טוב יותר לכלים – קל יותר לשלב בזרימת העבודה</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-primary">דוגמאות מהחיים – איך זה עוזר לכם?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-green-800">בעבודה</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>כתיבת מיילים ותסריטי שיחה</li>
                      <li>תקצירים מהירים למסמכים ארוכים</li>
                      <li>יצירת רעיונות לקמפיין/פוסטים</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-yellow-800">בלימודים ובבית</h3>
                    <ul className="space-y-2 text-yellow-800">
                      <li>הסברים פשוטים לנושאים מסובכים</li>
                      <li>תכנון סילבוס לימוד אישי</li>
                      <li>רעיונות לתוכן לרשתות חברתיות</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-primary">איך מתחילים – צעד אחר צעד</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">נרשמים ומתחילים בעברית</h3>
                      <p className="text-gray-700">שאלו שאלות קצרות על נושאים שמעניינים אתכם. אל תפחדו לנסות. <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">התחילו כאן</a></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">שפרו את השאלה</h3>
                      <p className="text-gray-700">הוסיפו פרטים: מטרה, סגנון, מגבלות. ככה מקבלים תוצאות טובות יותר.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">עברו לשימוש יומיומי</h3>
                      <p className="text-gray-700">שלבו בזרימה: מיילים, מצגות, חקר, כתיבה, תכנון. 10 דקות ביום עושות הבדל.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">מחפשים הדרכה מקצועית ב-ChatGPT 5?</h2>
                <p className="text-xl mb-6 opacity-90">הקורס שלנו למתחילים עושה לכם סדר – מהבסיס ועד שימוש אמיתי ביום-יום.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg font-bold">שיחה קצרה עם מדריך</Link>
                  <Link href="/free-ai-tools" className="btn-secondary text-lg">כלים חינמיים למתחילים</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
