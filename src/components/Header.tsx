import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useContactModal } from '../hooks/useContactModal';

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: 'MODELS', href: '#models' },
  { label: 'LIGHTSHIP CENTERS', href: '#centers' },
  { label: 'PARTNERSHIP', href: '#partnership' },
  { label: 'SHOW AND EVENTS', href: '#events' },
  { label: 'NEWS', href: '#news' },
  { label: 'COMPANY', href: '#company' },
  { label: 'CONTACTS', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href === '#contact') {
      openModal();
      return;
    }

    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center px-6 md:px-8 lg:px-12 xl:px-16 pt-8">
          <div
            className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between rounded-full px-8 md:px-12 py-4 transition-all duration-300 backdrop-blur-md ${
              isScrolled
                ? 'bg-gradient-to-r from-[#2a241c]/95 via-[#1f1a15]/95 to-[#2a241c]/95 shadow-lg shadow-black/40'
                : 'bg-gradient-to-r from-[#33291f]/80 via-[#201910]/80 to-[#33291f]/80'
            }`}
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative flex h-8 w-8 items-center justify-center"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`absolute left-1/2 h-[2px] w-5 -translate-x-1/2 bg-white transition-transform duration-300 ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2'
                }`}
              />
              <span
                className={`absolute left-1/2 h-[2px] w-5 -translate-x-1/2 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-1/2 h-[2px] w-5 -translate-x-1/2 bg-white transition-transform duration-300 ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-2'
                }`}
              />
            </button>

            <a
              href="/"
              className="text-center uppercase text-white tracking-[0.45em]"
            >
              <span className="block text-[11px] font-light">LIGHTSHIP</span>
              <span className="block text-[10px] font-extralight tracking-[0.55em]">
                YACHTS
              </span>
            </a>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="hidden md:inline-flex items-center rounded-full border border-white/40 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={openModal}
                className="md:hidden rounded-full border border-white/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/70" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between px-8 pt-12">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="text-white transition-colors hover:text-white/70"
              aria-label="Close navigation menu"
            >
              <X size={28} />
            </button>
            <a
              href="/"
              className="text-center uppercase text-white tracking-[0.55em]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block text-sm font-light">LIGHTSHIP</span>
              <span className="block text-[11px] font-extralight tracking-[0.6em]">
                YACHTS
              </span>
            </a>
            <span className="w-7" />
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white transition-colors hover:text-white/70"
              >
                <span className="text-2xl font-light uppercase tracking-[0.35em] md:text-3xl">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex justify-center pb-16">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="rounded-full border border-white/40 px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Request Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
