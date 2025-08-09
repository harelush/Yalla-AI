import content from '../data/content.json'

export default function Privacy() {
  return (
    <section className="min-h-screen bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-header">
              {content.privacy.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {content.privacy.lastUpdated}
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none rtl">
            {content.privacy.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-header">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-header">
              יצירת קשר
            </h3>
            <p className="text-gray-700">
              לשאלות נוספות בנושא מדיניות הפרטיות, ניתן לפנות אלינו בכתובת:{' '}
              <a 
                href="mailto:Yalla-AI@outlook.com" 
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Yalla-AI@outlook.com
              </a>
            </p>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="btn-primary inline-block"
            >
              חזרה לעמוד הבית
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
