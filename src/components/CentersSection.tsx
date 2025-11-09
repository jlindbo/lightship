import { lightshipCenters } from '../data/centers';

export default function CentersSection() {
  return (
    <section id="centers" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FIND YOUR LIGHTSHIP CENTER</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cruise in the most renowned Norwegian locations, be part of the most memorable 
            Lightship experiences and events, having access to special personalized services 
            with dedicated teams who will take care of you, your guests, and your yacht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lightshipCenters.map((center) => (
            <div
              key={center.id}
              className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={center.image}
                alt={center.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Lightship Center {center.name}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover our {center.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
