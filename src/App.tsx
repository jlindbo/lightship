import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
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
        <main>
          <HeroCarousel />
          <PhilosophySection />
          <BoatShowcase />
          <PartnerSection />
          <CentersSection />
          <NewsSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default App;