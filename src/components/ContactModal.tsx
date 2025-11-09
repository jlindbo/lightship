import { useState } from 'react';
import { X } from 'lucide-react';
import { boatModels } from '../data/boats';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    appointmentDay: '',
    hasBoat: 'no',
    boatBrand: '',
    boatModel: '',
    mooringCountry: '',
    interestedInBuying: 'no',
    selectedModels: [] as string[],
    specificRequest: '',
    contactPreference: 'email',
    phone: '',
    phonePrefix: '+47',
    marketingConsent: false,
    profilingConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleModelToggle = (modelId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedModels: prev.selectedModels.includes(modelId)
        ? prev.selectedModels.filter(id => id !== modelId)
        : [...prev.selectedModels, modelId]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg max-w-2xl w-full p-8 text-left overflow-hidden shadow-xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold mb-6">Book an appointment</h2>
          <p className="text-sm text-gray-600 mb-6">* indicates required fields</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First name*</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last name*</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Country*</label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Appointment day*</label>
              <input
                type="date"
                required
                value={formData.appointmentDay}
                onChange={(e) => setFormData({...formData, appointmentDay: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Have you already got a boat?</label>
              <select
                value={formData.hasBoat}
                onChange={(e) => setFormData({...formData, hasBoat: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="no">No</option>
                <option value="lightship">Yes, by Lightship Yachts</option>
                <option value="other">Yes, by other brands</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Are you interested in buying a Lightship Yacht in the next 6–12 months?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    checked={formData.interestedInBuying === 'yes'}
                    onChange={(e) => setFormData({...formData, interestedInBuying: e.target.value})}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="no"
                    checked={formData.interestedInBuying === 'no'}
                    onChange={(e) => setFormData({...formData, interestedInBuying: e.target.value})}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                For which boats would you like more information?
              </label>
              <div className="flex flex-wrap gap-3">
                {boatModels.map((model) => (
                  <label key={model.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.selectedModels.includes(model.id)}
                      onChange={() => handleModelToggle(model.id)}
                      className="mr-2"
                    />
                    {model.name}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Any specific request?</label>
              <textarea
                value={formData.specificRequest}
                onChange={(e) => setFormData({...formData, specificRequest: e.target.value})}
                rows={3}
                maxLength={250}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.specificRequest.length} / 250</p>
            </div>

            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.marketingConsent}
                  onChange={(e) => setFormData({...formData, marketingConsent: e.target.checked})}
                  className="mr-3 mt-1"
                />
                <span className="text-sm text-gray-600">
                  With your consent, we will be able to send you commercial communications and satisfaction surveys about our products and services by e-mail and sms.
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.profilingConsent}
                  onChange={(e) => setFormData({...formData, profilingConsent: e.target.checked})}
                  className="mr-3 mt-1"
                />
                <span className="text-sm text-gray-600">
                  With your consent, we will be able to send you personalized commercial communications based on your preferences, purchasing choices, requests and interactions with us.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Send request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
