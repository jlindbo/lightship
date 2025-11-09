import { ChevronDown } from 'lucide-react';
import { useContactModal } from '../hooks/useContactModal';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }>;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundVideo,
  backgroundImage,
  ctaButtons,
  overlay = true
}: HeroSectionProps) {
  const { openModal } = useContactModal();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-black" />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight text-white uppercase leading-none">
            {title.split(' ').map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
          
          {ctaButtons && ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.map((button, index) => {
                const isContactButton = button.href === '#contact';
                return isContactButton ? (
                  <button
                    key={index}
                    onClick={openModal}
                    className={`px-10 py-4 rounded-full font-medium transition-all text-sm uppercase tracking-wider ${
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
                    className={`px-10 py-4 rounded-full font-medium transition-all text-sm uppercase tracking-wider ${
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
      <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
        <ChevronDown size={32} className="rotate-90" />
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
        <ChevronDown size={32} className="-rotate-90" />
      </button>
    </section>
  );
}
