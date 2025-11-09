import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BoatShowcase from './components/BoatShowcase';
import PhilosophySection from './components/PhilosophySection';
import PartnerSection from './components/PartnerSection';
import CentersSection from './components/CentersSection';
import NewsSection from './components/NewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LoadingScreen from './components/LoadingScreen';
import { useContactModal } from './hooks/useContactModal';

function App() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Hero Section */}
      <HeroSection
        title="ENJOY NEW LIGHTSHIP 75"
        subtitle="The future of sustainable luxury yachting"
        backgroundImage="/images/hero-ls75.jpg"
        ctaButtons={[
          { text: 'Discover LS75', href: '#ls75' },
          { text: 'Request info', href: '#contact', variant: 'secondary' }
        ]}
      />

      {/* Secondary Hero */}
      <HeroSection
        title="A LIVABLE MASTERPIECE"
        subtitle="Where Norwegian craftsmanship meets electric innovation"
        backgroundImage="/images/hero-masterpiece.jpg"
        ctaButtons={[
          { text: 'Discover', href: '#models' },
          { text: 'Request Info', href: '#contact', variant: 'secondary' }
        ]}
      />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Boat Showcase */}
      <BoatShowcase />

      {/* Partner Section */}
      <PartnerSection />

      {/* Centers Section */}
      <CentersSection />

      {/* News Section */}
      <NewsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isOpen}
        onClose={closeModal}
      />
      </div>
    </>
  );
}

export default App;