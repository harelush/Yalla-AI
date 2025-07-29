import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from './pages/Home'

// Structured Data for Organization
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "קורסים מקוונים",
  "description": "פלטפורמה מובילה לקורסים מקוונים באיכות גבוהה",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+972-XX-XXXXXXX",
    "contactType": "customer service",
    "availableLanguage": "Hebrew"
  },
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage",
    "https://linkedin.com/company/yourcompany"
  ]
}

// Course Structured Data
const courseStructuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "קורס מקוון מתקדם",
  "description": "קורס מקוון איכותי המתאים לצעירים ומבוגרים. לימודים גמישים עם מדריכים מנוסים.",
  "provider": {
    "@type": "Organization",
    "name": "קורסים מקוונים",
    "sameAs": "https://yoursite.com"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT20H",
    "instructor": {
      "@type": "Person",
      "name": "צוות המדריכים"
    }
  },
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "he",
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "ILS",
    "availability": "https://schema.org/InStock"
  }
}

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Helmet>
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(organizationStructuredData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(courseStructuredData)}
          </script>
          
          {/* Additional SEO */}
          <meta name="language" content="Hebrew" />
          <meta name="geo.region" content="IL" />
          <meta name="geo.country" content="Israel" />
          
          {/* Preload critical resources */}
          <link rel="preload" href="/hero-image.jpg" as="image" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&family=Heebo:wght@300;400;500;600;700&display=swap" as="style" />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App 