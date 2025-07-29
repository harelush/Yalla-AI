import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Page-specific SEO */}
        <title>קורס מקוון מתקדם | לימודים לכל הגילאים - התחל היום</title>
        <meta name="description" content="קורס מקוון איכותי המתאים לצעירים ומבוגרים. לימודים גמישים עם מדריכים מנוסים. התחל את המסע שלך היום עם ערבות החזר כספי!" />
        
        {/* Keywords for better SEO */}
        <meta name="keywords" content="קורס מקוון, לימודים, השכלה, קריירה, צעירים, מבוגרים, הכשרה מקצועית, משוחררים, עדכון מקצועי, למידה מרחוק" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="קורס מקוון מתקדם | לימודים לכל הגילאים" />
        <meta property="og:description" content="קורס מקוון איכותי המתאים לצעירים ומבוגרים. לימודים גמישים עם מדריכים מנוסים." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:image" content="https://yoursite.com/og-image.jpg" />
        <meta property="og:image:alt" content="קורס מקוון מתקדם - לימודים לכל הגילאים" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="קורס מקוון מתקדם | לימודים לכל הגילאים" />
        <meta name="twitter:description" content="קורס מקוון איכותי המתאים לצעירים ומבוגרים. לימודים גמישים עם מדריכים מנוסים." />
        <meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg" />
        
        {/* Additional meta tags for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yoursite.com/" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "עמוד הבית",
                "item": "https://yoursite.com/"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "האם יש הבדל בתוכן לפי גיל?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "התוכן מותאם לכל הגילאים, אבל המדריכים מתאימים את הסגנון והדוגמאות לקבוצת הגיל. צעירים יקבלו דוגמאות מעולם הטכנולוגיה ומבוגרים יקבלו דוגמאות מעולם העסקים."
                }
              },
              {
                "@type": "Question",
                "name": "מה קורה אם אני לא מרוצה?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "אנחנו מציעים החזר כספי מלא תוך 14 יום מתחילת הקורס, ללא שאלות. המטרה שלנו היא שתהיה מרוצה 100%."
                }
              },
              {
                "@type": "Question",
                "name": "האם אני צריך ידע מוקדם?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "לא! הקורס בנוי לכל הרמות. אנחנו מתחילים מהבסיס ומתקדמים בהדרגה. המדריכים שלנו מתמחים בהסבר פשוט וברור."
                }
              }
            ]
          })}
        </script>
        
        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "קורסים מקוונים",
            "url": "https://yoursite.com",
            "description": "פלטפורמה מובילה לקורסים מקוונים באיכות גבוהה",
            "inLanguage": "he",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yoursite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {/* Page Structure */}
      <div className="min-h-screen">
        {/* Header with Navigation */}
        <Header />
        
        {/* Main Content */}
        <main role="main">
          {/* Hero Section */}
          <Hero />
          
          {/* Benefits Section */}
          <Benefits />
          
          {/* Testimonials Section */}
          <Testimonials />
          
          {/* Pricing Section */}
          <Pricing />
          
          {/* Contact Form Section */}
          <ContactForm />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>

      {/* Google Analytics ready-to-use (uncomment when ready) */}
      {/* 
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
      </Helmet>
      */}

      {/* Facebook Pixel ready-to-use (uncomment when ready) */}
      {/*
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </Helmet>
      */}
    </>
  )
}

export default Home 