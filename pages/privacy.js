import Head from 'next/head'
import Layout from '../components/Layout'
import Privacy from '../components/Privacy'
import content from '../data/content.json'

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>{content.privacy.title}</title>
        <meta name="description" content="מדיניות הפרטיות של YallaAI - מידע על איסוף, שמירה ושימוש במידע אישי באתר" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Prevent indexing of privacy policy page */}
        <meta name="robots" content="noindex, nofollow" />
        
        {/* RTL support */}
        <html dir="rtl" lang="he" />
      </Head>
      <Layout>
        <Privacy />
      </Layout>
    </>
  )
}
