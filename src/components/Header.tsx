import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { boatModels } from '../data/boats';
import { useContactModal } from '../hooks/useContactModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-white font-bold text-2xl tracking-wider">
              LIGHTSHIP
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8 text-white">
              <li className="relative group">
                <button 
                  className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                  onMouseEnter={() => setIsModelsOpen(true)}
                  onMouseLeave={() => setIsModelsOpen(false)}
                >
                  <span>Models</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 ${
                    isModelsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setIsModelsOpen(true)}
                  onMouseLeave={() => setIsModelsOpen(false)}
                >
                  {boatModels.map((model) => (
                    <a
                      key={model.id}
                      href={`#${model.id}`}
                      className="block px-6 py-3 hover:bg-white/10 transition-colors whitespace-nowrap"
                    >
                      {model.name}
                    </a>
                  ))}
                </div>
              </li>
              <li><a href="#centers" className="hover:opacity-80 transition-opacity">Lightship Centers</a></li>
              <li><a href="#partnership" className="hover:opacity-80 transition-opacity">Partnership</a></li>
              <li><a href="#events" className="hover:opacity-80 transition-opacity">Show and events</a></li>
              <li><a href="#news" className="hover:opacity-80 transition-opacity">News</a></li>
              <li><a href="#company" className="hover:opacity-80 transition-opacity">Company</a></li>
              <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contacts</a></li>
            </ul>

            {/* Contact Button */}
            <button 
              onClick={openModal}
              className="hidden lg:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Contact us
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <ul className="space-y-6 text-white text-xl">
            <li>
              <div className="font-semibold mb-4">Models</div>
              <ul className="ml-4 space-y-3 text-lg">
                {boatModels.map((model) => (
                  <li key={model.id}>
                    <a href={`#${model.id}`} onClick={() => setIsMenuOpen(false)}>
                      {model.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a href="#centers" onClick={() => setIsMenuOpen(false)}>Lightship Centers</a></li>
            <li><a href="#partnership" onClick={() => setIsMenuOpen(false)}>Partnership</a></li>
            <li><a href="#events" onClick={() => setIsMenuOpen(false)}>Show and events</a></li>
            <li><a href="#news" onClick={() => setIsMenuOpen(false)}>News</a></li>
            <li><a href="#company" onClick={() => setIsMenuOpen(false)}>Company</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
          </ul>
          
          <button 
            onClick={() => {
              openModal();
              setIsMenuOpen(false);
            }}
            className="mt-8 bg-white text-black px-6 py-3 rounded-full font-medium w-full"
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
