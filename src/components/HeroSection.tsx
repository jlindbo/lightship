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
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
            {subtitle}
          </p>
        )}
        
        {ctaButtons && ctaButtons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtons.map((button, index) => {
              const isContactButton = button.href === '#contact';
              return isContactButton ? (
                <button
                  key={index}
                  onClick={openModal}
                  className={`px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 ${
                    button.variant === 'secondary'
                      ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {button.text}
                </button>
              ) : (
                <a
                  key={index}
                  href={button.href}
                  className={`px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 ${
                    button.variant === 'secondary'
                      ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
