import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroInterior from './components/HeroInterior';
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
        backgroundImage="/images/placeholder.svg"
        ctaButtons={[
          { text: 'Discover LS75', href: '#ls75' },
          { text: 'Request info', href: '#contact', variant: 'secondary' }
        ]}
      />

      {/* Interior Hero */}
      <HeroInterior
        title="A LIVABLE MASTERPIECE"
        backgroundImage="/images/placeholder.svg"
        ctaButtons={[
          { text: 'Discover', href: '#models' },
          { text: 'Request Info', href: '#contact', variant: 'secondary' }
        ]}
        slideIndicators={3}
        currentSlide={0}
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