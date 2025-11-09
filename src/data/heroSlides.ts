export type HeroSlideCTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  background: string;
  accentLabel: string;
  ctas: HeroSlideCTA[];
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-ls75',
    title: 'ENJOY NEW LIGHTSHIP 75',
    subtitle: 'The next generation flagship for electric luxury yachting',
    background: '/images/hero/slide-1.jpg',
    accentLabel: 'LIGHTSHIP 75',
    ctas: [
      { label: 'Discover LS75', href: '#models', variant: 'primary' },
      { label: 'Request Info', href: '#contact', variant: 'secondary' },
    ],
  },
  {
    id: 'hero-silent',
    title: 'CRUISE IN SILENCE',
    subtitle: 'Zero-emission performance with uncompromising comfort',
    background: '/images/hero/slide-1.jpg',
    accentLabel: 'SILENT POWER',
    ctas: [
      { label: 'Explore range', href: '#models', variant: 'primary' },
      { label: 'Book an appointment', href: '#contact', variant: 'secondary' },
    ],
  },
  {
    id: 'hero-masterpiece',
    title: 'A LIVABLE MASTERPIECE',
    subtitle: 'Norwegian craftsmanship designed for life at sea',
    background: '/images/hero/slide-1.jpg',
    accentLabel: 'DESIGN EVOLVED',
    ctas: [
      { label: 'Discover interiors', href: '#models', variant: 'primary' },
      { label: 'Request Info', href: '#contact', variant: 'secondary' },
    ],
  },
];
