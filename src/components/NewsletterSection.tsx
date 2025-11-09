import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-lg mb-8 text-gray-300">
            Stay up to date with everything happening in the world of Lightship. 
            Subscribe to our newsletter!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail*"
              required
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-green-400">
              Thank you! You will receive the most relevant news from the world of Lightship.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
