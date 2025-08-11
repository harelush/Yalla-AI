import '../styles/globals.css'
import Head from 'next/head'
import content from '../data/content.json'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="keywords" content={content.meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="he" />
        <meta name="author" content="YallaAI" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={content.meta.og_title} />
        <meta property="og:description" content={content.meta.og_description} />
        <meta property="og:image" content={content.meta.og_image} />
        <meta property="og:url" content="https://yallaai.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YallaAI" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.og_title} />
        <meta name="twitter:description" content={content.meta.og_description} />
        <meta name="twitter:image" content={content.meta.og_image} />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "YallaAI",
              "description": "קורסי בינה מלאכותית למתחילים בישראל - למדו AI בקלות ובעברית",
              "url": "https://yallaai.co.il",
              "logo": "https://yallaai.co.il/images/darkmode_logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IL",
                "addressRegion": "ירושלים",
                "addressLocality": "ירושלים"
              },
              "areaServed": "Israel",
              "availableLanguage": "Hebrew",
              "courseMode": "Online",
              "educationalCredentialAwarded": "Certificate",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "350"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "שיעור ניסיון בינה מלאכותית",
                  "description": "שיעור ניסיון של 50 דקות ללמידת AI מאפס",
                  "price": "99",
                  "priceCurrency": "ILS",
                  "availability": "InStock",
                  "category": "Education"
                },
                {
                  "@type": "Offer", 
                  "name": "קורס AI קצר למתחילים",
                  "description": "6 מפגשים ללמידת בינה מלאכותית מהבסיס",
                  "price": "590",
                  "priceCurrency": "ILS",
                  "availability": "InStock",
                  "category": "Education"
                },
                {
                  "@type": "Offer",
                  "name": "קורס AI מלא ומקצועי",
                  "description": "10 מפגשים למיומנות מלאה ב-AI",
                  "price": "950",
                  "priceCurrency": "ILS",
                  "availability": "InStock",
                  "category": "Education"
                }
              ]
            })
          }}
        />
        
        {/* Page-specific schemas should live on their pages to avoid sitewide conflicts */}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 