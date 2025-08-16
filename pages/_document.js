import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html dir="rtl" lang="he">
      <Head>
        <link rel="icon" href="/images/robot.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&family=Assistant:wght@200;300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* viewport should be set in _app.js, not here */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body className="font-content bg-white text-text-dark antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 