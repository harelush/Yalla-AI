import Head from 'next/head'
import Layout from '../components/Layout'
import Terms from '../components/Terms'
import content from '../data/content.json'

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>{content.terms.title}</title>
        <meta name="description" content="תנאי השימוש של YallaAI - כללים והגבלות לשימוש באתר ובשירותים" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Prevent indexing of terms page */}
        <meta name="robots" content="noindex, nofollow" />
        
        {/* RTL support */}
        <html dir="rtl" lang="he" />
      </Head>
      <Layout>
        <Terms />
      </Layout>
    </>
  )
}
