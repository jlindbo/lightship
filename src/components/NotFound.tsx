import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Lost at Sea</h2>
        <p className="text-xl text-gray-300 mb-8">
          The page you're looking for seems to have drifted away. 
          Let's navigate you back to familiar waters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
