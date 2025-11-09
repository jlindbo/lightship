import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/heroSlides';
import { useContactModal } from '../hooks/useContactModal';

const AUTO_PLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 700;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { openModal } = useContactModal();

  const slides = useMemo(() => heroSlides, []);
  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((nextIndex + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
    },
    [isAnimating, totalSlides]
  );

  const handleNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide(activeIndex + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, goToSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <article
            key={slide.id}
            className={`absolute inset-0 transition-opacity ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: `${TRANSITION_DURATION}ms` }}
            aria-hidden={!isActive}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/15" />

            <div className="relative z-10 flex h-full items-end px-8 md:px-14 lg:px-24 xl:px-[140px] pb-16 md:pb-24">
              <div className="max-w-3xl text-white">
                <h1 className="mb-8 text-[38px] font-black uppercase leading-[0.95] tracking-tighter md:text-[48px] lg:text-[58px] xl:text-[64px]">
                  {slide.title}
                </h1>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  {slide.ctas.map((cta) => {
                    const isPrimary = cta.variant !== 'secondary';
                    const handleClick = () => {
                      if (cta.href === '#contact') {
                        openModal();
                      } else if (cta.href.startsWith('#')) {
                        const target = document.querySelector(cta.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    };

                    return (
                      <button
                        key={`${slide.id}-${cta.label}`}
                        type="button"
                        onClick={handleClick}
                        className={`rounded-full px-10 py-[16px] text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                          isPrimary
                            ? 'bg-white text-black hover:bg-gray-100 hover:translate-y-[-2px]'
                            : 'border-2 border-white/70 text-white hover:bg-white hover:text-black hover:translate-y-[-2px]'
                        }`}
                      >
                        {cta.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-4 text-white transition-colors hover:bg-white hover:text-black"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-4 text-white transition-colors hover:bg-white hover:text-black"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 xl:left-[140px] flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={`${slide.id}-indicator`}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === activeIndex ? 'w-16 bg-white' : 'w-8 bg-white/35 hover:bg-white/55'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}
