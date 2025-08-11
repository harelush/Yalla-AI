import { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Program from '../components/Program'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import FloatingCTA from '../components/FloatingCTA'
import SuccessStories from '../components/SuccessStories'
import About from '../components/About'

import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling behavior for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>קורס בינה מלאכותית למתחילים בישראל 2025 | YallaAI</title>
        <meta name="description" content="למדו בינה מלאכותית בעברית ובפשטות: ChatGPT, Canva AI, כלים חינמיים ויישומים לעבודה. שיעור ניסיון 99₪. מותאם למתחילים בישראל." />
        <meta property="og:title" content="קורס AI למתחילים בעברית | YallaAI" />
        <meta property="og:description" content="בינה מלאכותית בשפה פשוטה. שיעור ניסיון 99₪, קורס קצר או מלא. תל אביב, ירושלים וכל הארץ." />
        <meta property="og:image" content="/images/robot.png" />
        <link rel="canonical" href="https://yallaai.co.il/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "קורס בינה מלאכותית למתחילים",
              "description": "קורס AI מעשי בעברית למתחילים בישראל, כולל שיעור ניסיון, קורס קצר וקורס מלא.",
              "provider": {
                "@type": "Organization",
                "name": "YallaAI",
                "sameAs": "https://yallaai.co.il"
              },
              "hasCourseInstance": [
                {"@type":"CourseInstance","name":"שיעור ניסיון","courseMode":"Online","location":"Israel"},
                {"@type":"CourseInstance","name":"קורס קצר","courseMode":"Online","location":"Israel"},
                {"@type":"CourseInstance","name":"קורס מלא","courseMode":"Online","location":"Israel"}
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": require('../data/content.json').faq.items.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {"@type":"Answer","text": f.answer}
              }))
            })
          }}
        />
      </Head>
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* Success Stories Videos */}
      <SuccessStories />

      {/* About Course & Team Section */}
      <About />

      {/* Program Details Section */}
      <Program />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact/CTA Section */}
      <Contact />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Floating CTA for Mobile */}
      <FloatingCTA />
    </Layout>
  )
} 