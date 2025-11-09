# Lightship - Norwegian Electric Yachts

A modern, responsive website for Lightship, a premium Norwegian electric boat manufacturer. Built with React, TypeScript, and Tailwind CSS.

🌊 **Live Demo**: [https://lightship-fjf4ytwa5-jlindbos-projects.vercel.app](https://lightship-fjf4ytwa5-jlindbos-projects.vercel.app)

## 🚤 About Lightship

Lightship represents the future of sustainable luxury yachting. Our electric boats combine Norwegian craftsmanship with cutting-edge technology to deliver silent, emission-free cruising without compromising on performance or elegance.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jlindbo/lightship.git
cd lightship
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 📁 Project Structure

```
lightship/
├── public/
│   └── lightship-icon.svg      # Site favicon
├── src/
│   ├── components/             # React components
│   │   ├── BoatShowcase.tsx   # Boat model carousel
│   │   ├── CentersSection.tsx # Lightship centers display
│   │   ├── ContactModal.tsx   # Contact form modal
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Navigation header
│   │   ├── HeroSection.tsx    # Hero banner component
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   ├── NewsSection.tsx    # News articles
│   │   ├── NewsletterSection.tsx # Newsletter signup
│   │   ├── PartnerSection.tsx # Partnership info
│   │   └── PhilosophySection.tsx # Brand philosophy
│   ├── data/                  # Static data
│   │   ├── boats.ts          # Boat models data
│   │   ├── centers.ts        # Center locations
│   │   └── news.ts           # News items
│   ├── hooks/                # Custom React hooks
│   │   └── useContactModal.tsx
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Boat Showcase**: Carousel displaying all boat models with specifications
- **Contact Modal**: Comprehensive contact form with appointment booking
- **Newsletter Signup**: Email subscription functionality
- **Loading Animation**: Branded loading screen
- **Smooth Animations**: Subtle animations and transitions throughout
- **Norwegian Localization**: Support for Norwegian language (expandable)

## 🚢 Boat Models

- **LS32** - Compact electric day cruiser
- **LS40** - Zero-emission comfort cruiser
- **LS48** - Silent power yacht
- **LS56** - Electric luxury yacht
- **LS75** - Flagship sustainable luxury vessel

## 📍 Lightship Centers

- Oslo
- Bergen
- Stavanger
- Trondheim
- Lofoten

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any API keys or configuration:

```env
# Example environment variables
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@lightship.no
```

### Customization

- **Colors**: Edit `tailwind.config.js` to modify the color scheme
- **Fonts**: Update font imports in `index.html`
- **Content**: Modify data files in `src/data/`
- **Images**: Add boat and location images to `public/images/`

## 📸 Images Needed

The following placeholder images should be added:

```
public/images/
├── boats/
│   ├── ls32.jpg
│   ├── ls40.jpg
│   ├── ls48.jpg
│   ├── ls56.jpg
│   └── ls75.jpg
├── centers/
│   ├── oslo.jpg
│   ├── bergen.jpg
│   ├── stavanger.jpg
│   ├── trondheim.jpg
│   └── lofoten.jpg
├── news/
│   ├── ls75-debut.jpg
│   ├── rendezvous.jpg
│   └── bergen-hub.jpg
├── hero-ls75.jpg
├── hero-masterpiece.jpg
└── partnership.jpg
```

## 🚀 Deployment

The site is automatically deployed to Vercel on push to the `main` branch.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Lightship AS.

## 📞 Contact

- Website: [lightship.no](https://lightship.no) (coming soon)
- Email: contact@lightship.no
- GitHub: [@jlindbo](https://github.com/jlindbo)

---

Built with ⚡ by Lightship - Leading the charge towards sustainable luxury yachting
