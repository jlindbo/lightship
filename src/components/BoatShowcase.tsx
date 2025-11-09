import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { boatModels } from '../data/boats';

export default function BoatShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBoat = () => {
    setCurrentIndex((prev) => (prev + 1) % boatModels.length);
  };

  const prevBoat = () => {
    setCurrentIndex((prev) => (prev - 1 + boatModels.length) % boatModels.length);
  };

  const currentBoat = boatModels[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">LIGHTSHIP YACHTS</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Boat Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevBoat}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-4">
              {boatModels.map((boat, index) => (
                <button
                  key={boat.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`text-2xl font-bold transition-all ${
                    index === currentIndex
                      ? 'text-black scale-110'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {boat.number}
                </button>
              ))}
            </div>

            <button
              onClick={nextBoat}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Boat Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={currentBoat.image}
                alt={currentBoat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded">
                {currentBoat.name}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">{currentBoat.tagline}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentBoat.description}
              </p>

              {currentBoat.specs && (
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div>
                    <span className="text-sm text-gray-500">Length</span>
                    <p className="font-semibold">{currentBoat.specs.length}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Max Speed</span>
                    <p className="font-semibold">{currentBoat.specs.maxSpeed}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Range</span>
                    <p className="font-semibold">{currentBoat.specs.range}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Passengers</span>
                    <p className="font-semibold">{currentBoat.specs.passengers}</p>
                  </div>
                </div>
              )}

              <a
                href={`#${currentBoat.id}`}
                className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                DISCOVER {currentBoat.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
