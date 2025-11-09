export const SEO_CONFIG = {
  defaultTitle: 'Lightship - Norwegian Electric Yachts',
  titleTemplate: '%s | Lightship',
  defaultDescription: 'Lightship - Premium Norwegian electric boats. Sustainable luxury, refined power, uncompromising elegance.',
  siteUrl: 'https://lightship.no',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@lightshipyachts',
  
  // Structured data for boats
  getBoatStructuredData: (boat: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: boat.name,
    description: boat.description,
    image: boat.image,
    brand: {
      '@type': 'Brand',
      name: 'Lightship'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Lightship AS',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NO'
      }
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NOK',
      availability: 'https://schema.org/InStock'
    }
  }),

  // Organization structured data
  organizationStructuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lightship AS',
    url: 'https://lightship.no',
    logo: 'https://lightship.no/lightship-icon.svg',
    sameAs: [
      'https://www.facebook.com/lightshipyachts',
      'https://www.instagram.com/lightshipyachts',
      'https://www.linkedin.com/company/lightship-yachts',
      'https://www.youtube.com/@lightshipyachts'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NO',
      addressLocality: 'Oslo'
    }
  }
};
