export default function PhilosophySection() {
  return (
    <section id="company" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Born to
            <br />
            electrify.
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Created to
            <br />
            sustain.
          </h2>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
            Lightship is more than a yacht — it's a vision for the future. Essential lines, 
            refined electric power, uncompromising luxury. From sunrise to sunset, at anchor 
            or underway, every detail is crafted for those who don't follow trends — they 
            lead the charge towards sustainable luxury.
          </p>

          <a
            href="#models"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Discover more
          </a>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Cruise in silence.
          </h3>
          <h3 className="text-4xl md:text-5xl font-bold">
            Live without limits.
          </h3>
        </div>
      </div>
    </section>
  );
}
