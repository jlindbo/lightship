export default function PartnerSection() {
  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              NORWEGIAN INNOVATION
              <br />
              MEETS
              <br />
              SUSTAINABLE LUXURY
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              During the Oslo Innovation Summit, held in Oslo from June 15th to June 17th, 
              the collaboration between Lightship Yachts and leading Norwegian technology 
              partners took center stage, showcasing a fusion of sustainable luxury and 
              cutting-edge electric performance.
            </p>
            <a
              href="#partnership"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Discover more
            </a>
          </div>
          
          <div className="relative h-[400px] bg-blue-800/50 rounded-lg overflow-hidden">
            <img
              src="/images/placeholder.svg"
              alt="Norwegian Innovation Partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
