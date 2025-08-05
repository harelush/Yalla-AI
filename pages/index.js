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
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* Success Stories Videos */}
      <SuccessStories />

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