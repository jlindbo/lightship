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
              className="lg:hidden text-white p-2 -mr-2"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-white transition-transform duration-300"></span>
                <span className="block h-0.5 w-full bg-white transition-opacity duration-300"></span>
                <span className="block h-0.5 w-full bg-white transition-transform duration-300"></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu Slide-in */}
      <div className={`fixed left-0 top-0 h-full w-full max-w-md bg-black z-50 lg:hidden transition-transform duration-500 ease-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <a href="/" className="text-white font-bold text-2xl tracking-wider">
              LIGHTSHIP
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-8">
            <ul className="space-y-1 px-6">
              <li>
                <a 
                  href="#models" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  MODELS
                </a>
              </li>
              <li>
                <a 
                  href="#centers" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  LIGHTSHIP CENTERS
                </a>
              </li>
              <li>
                <a 
                  href="#partnership" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  PARTNERSHIP
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  SHOW AND EVENTS
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  NEWS
                </a>
              </li>
              <li>
                <a 
                  href="#company" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  COMPANY
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-white text-xl font-light uppercase tracking-wider hover:text-gray-300 transition-colors"
                >
                  CONTACTS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
