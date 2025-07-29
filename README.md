# קורסים מקוונים - Hebrew Landing Page

A modern, responsive Hebrew landing page built with React, Vite, and Tailwind CSS. Designed for an online course platform targeting both young adults (20-30) and mature learners (40-65).

## 🌟 Features

### 🎯 Target Audiences
- **Young Adults (20-30)**: Recent military veterans, students exploring career directions
- **Mature Learners (40-65)**: Professionals seeking career development and new skills

### 🎨 Design & UX
- **RTL Support**: Full right-to-left layout for Hebrew content
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### 🚀 Technical Features
- **React 18**: Latest React with hooks and modern patterns
- **Vite**: Fast development and optimized builds
- **Tailwind CSS**: Utility-first CSS with custom RTL configuration
- **TypeScript Ready**: Full TypeScript support available
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **PWA Ready**: Manifest file and service worker support

### 📈 Marketing & Analytics Ready
- **Google Analytics**: Ready-to-activate tracking code
- **Facebook Pixel**: Prepared for conversion tracking
- **Contact Forms**: Validated forms with marketing automation hooks
- **A/B Testing**: Component structure ready for testing

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **SEO**: React Helmet Async, structured data
- **Routing**: React Router DOM
- **Forms**: Custom validation with Hebrew support
- **Fonts**: Google Fonts (Assistant, Heebo)
- **Icons**: SVG icons and emojis

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── Benefits.jsx     # Benefits showcase
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Pricing.jsx      # Pricing plans
│   ├── ContactForm.jsx  # Lead capture form
│   └── Footer.jsx       # Site footer
├── pages/               # Page components
│   └── Home.jsx         # Main landing page
├── assets/              # Static assets
├── index.css           # Global styles and Tailwind
├── main.jsx            # Application entry point
└── App.jsx             # Main app component

public/
├── site.webmanifest    # PWA manifest
├── robots.txt          # SEO robots file
└── index.html          # HTML template
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hebrew-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📝 Customization

### 1. Update Content
Edit the Hebrew content in each component file:
- `src/components/Hero.jsx` - Main headline and messaging
- `src/components/Benefits.jsx` - Course benefits and features
- `src/components/Testimonials.jsx` - Customer reviews
- `src/components/Pricing.jsx` - Pricing plans and FAQs

### 2. Styling
The project uses Tailwind CSS with custom Hebrew fonts and RTL support:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom components

### 3. SEO Configuration
Update SEO settings in:
- `index.html` - Basic meta tags
- `src/App.jsx` - Structured data
- `src/pages/Home.jsx` - Page-specific SEO

### 4. Analytics Setup

#### Google Analytics
Uncomment and configure in `src/pages/Home.jsx`:
```javascript
// Replace GA_MEASUREMENT_ID with your actual ID
gtag('config', 'GA_MEASUREMENT_ID');
```

#### Facebook Pixel
Uncomment and configure in `src/pages/Home.jsx`:
```javascript
// Replace YOUR_PIXEL_ID with your actual pixel ID
fbq('init', 'YOUR_PIXEL_ID');
```

## 🎨 Design Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Fonts
Hebrew fonts are configured in `tailwind.config.js` and loaded in `index.html`. Current fonts:
- **Assistant**: Primary body font
- **Heebo**: Headings and emphasis

### Components
All components are modular and easily customizable:
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Spacing system: Tailwind's spacing scale
- Typography: Responsive text sizes

## 📱 Mobile Optimization

The site is built mobile-first with:
- Touch-friendly navigation
- Optimized form inputs for mobile
- Fast loading times
- Responsive images and layouts

## 🔍 SEO Features

### Meta Tags
- Hebrew language support (`lang="he"`, `dir="rtl"`)
- Open Graph for social sharing
- Twitter Cards
- Canonical URLs

### Structured Data
- Organization schema
- Course schema
- FAQ schema
- Breadcrumb navigation

### Performance
- Vite for fast builds
- Optimized images
- Minimal dependencies
- Progressive enhancement

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy!

### Netlify
1. Connect your repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server

## 🎯 Marketing Integration

### Lead Capture
The contact form includes:
- Form validation
- Required field handling
- Marketing consent checkboxes
- Analytics event tracking

### A/B Testing Ready
Components are structured for easy A/B testing:
- Modular headline components
- Swappable pricing plans
- Configurable CTAs

### Conversion Tracking
Ready for marketing tools:
- Google Analytics events
- Facebook Pixel conversion tracking
- Custom event handlers

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- Lazy loading
- Image optimization
- CSS purging
- JavaScript code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

**Built with ❤️ for the Hebrew-speaking community** 