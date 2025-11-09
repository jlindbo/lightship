import { Anchor, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';
import { boatModels } from '../data/boats';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Models */}
          <div>
            <h4 className="text-lg font-bold mb-4">MODELS</h4>
            <ul className="space-y-2">
              {boatModels.map((model) => (
                <li key={model.id}>
                  <a href={`#${model.id}`} className="text-gray-300 hover:text-white transition-colors">
                    Lightship {model.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-lg font-bold mb-4">SITE MAP</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#centers" className="text-gray-300 hover:text-white transition-colors">Lightship centers</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-white transition-colors">Partnership</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Show and events</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#company" className="text-gray-300 hover:text-white transition-colors">Company</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacts</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-lg font-bold mb-4">DISCOVER</h4>
            <ul className="space-y-2">
              <li><a href="#press" className="text-gray-300 hover:text-white transition-colors">Press room</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Work with us</a></li>
              <li>
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Language</p>
                  <select className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm">
                    <option>English</option>
                    <option>Norsk</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">LEGAL AREA</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#cookies" className="text-gray-300 hover:text-white transition-colors">Cookie policy</a></li>
              <li><a href="#notice" className="text-gray-300 hover:text-white transition-colors">Notice 231</a></li>
            </ul>

            <h4 className="text-lg font-bold mb-4">SOCIAL</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            ©2024 LIGHTSHIP AS • NORWAY • Org.nr. 123 456 789 • All Rights Reserved
          </p>
          <a
            href="#find-center"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            <Anchor size={18} />
            <span>Find a LS Center</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
