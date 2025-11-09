import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContactModal } from '../hooks/useContactModal';

interface HeroInteriorProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }>;
  showNavArrows?: boolean;
  slideIndicators?: number;
  currentSlide?: number;
}

export default function HeroInterior({
  title,
  subtitle,
  backgroundImage,
  ctaButtons,
  showNavArrows = true,
  slideIndicators = 3,
  currentSlide = 0
}: HeroInteriorProps) {
  const { openModal } = useContactModal();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-white uppercase tracking-tight leading-[0.9]">
            {title.split(' ').map((word, index) => (
              <span key={index} className={index > 0 ? "block" : ""}>
                {word}
              </span>
            ))}
          </h1>
          
          {ctaButtons && ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.map((button, index) => {
                const isContactButton = button.href === '#contact';
                return isContactButton ? (
                  <button
                    key={index}
                    onClick={openModal}
                    className={`px-10 py-4 rounded-full font-medium transition-all text-sm tracking-wider ${
                      button.variant === 'secondary'
                        ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {button.text}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={button.href}
                    className={`px-10 py-4 rounded-full font-medium transition-all text-sm tracking-wider ${
                      button.variant === 'secondary'
                        ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {button.text}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showNavArrows && (
        <>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10">
            <ChevronLeft size={32} />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10">
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {slideIndicators > 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: slideIndicators }).map((_, index) => (
            <button
              key={index}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
