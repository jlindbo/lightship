import { useEffect, useState } from 'react';
import { Anchor } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="loading-logo mb-4">
          <Anchor size={60} className="text-white mx-auto" />
        </div>
        <h1 className="text-white text-3xl font-bold tracking-wider">LIGHTSHIP</h1>
        <p className="text-white/60 text-sm mt-2">Norwegian Electric Yachts</p>
      </div>
    </div>
  );
}
