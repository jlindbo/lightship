import { newsItems } from '../data/news';

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">LATEST NEWS</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="group cursor-pointer"
            >
              <div className="relative h-[250px] mb-6 overflow-hidden rounded-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded text-sm font-medium">
                  {news.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {news.excerpt}
              </p>
              <a
                href={`#${news.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                read more
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-news"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Read all news
          </a>
        </div>
      </div>
    </section>
  );
}
