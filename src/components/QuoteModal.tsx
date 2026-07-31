import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import {
  X,
  Sparkles,
  Calculator,
  Check,
  Clock,
  Tag,
  ArrowLeft,
  CheckCircle2,
  Send
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialProjectTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialProjectTitle,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES_DATA[0].id
  );

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [deliverySpeed, setDeliverySpeed] = useState<'normal' | 'express'>('normal');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Ballpark calculation in USD
  let basePriceNum = 1500;
  if (selectedServiceId === 'ai-solutions') basePriceNum = 3500;
  if (selectedServiceId === 'mobile-apps') basePriceNum = 2500;
  if (selectedServiceId === 'data-analysis') basePriceNum = 2000;

  const featureAddon = selectedFeatures.length * 300;
  const speedMultiplier = deliverySpeed === 'express' ? 1.25 : 1.0;

  const estimatedTotal = Math.round((basePriceNum + featureAddon) * speedMultiplier);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-zinc-100">Online Project Cost & Timeline Estimator</h3>
              <span className="text-xs text-zinc-400">Instant Smart Scope & Estimate Calculation</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mx-auto border border-teal-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif font-bold text-zinc-100">Estimate Request Submitted Successfully</h4>
            <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
              Your preliminary estimate of approximately <strong>${estimatedTotal.toLocaleString()}</strong> has been generated. An RF Craft specialist will review your parameters and reach out at <strong>{contactPhone}</strong> within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-zinc-950 text-zinc-100 border border-zinc-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitQuote} className="space-y-6 pt-4">
            {initialProjectTitle && (
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-teal-400 font-medium">
                Selected Reference Project: <strong>{initialProjectTitle}</strong>
              </div>
            )}

            {/* Service Choice */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-200 block">1. Select Required Service Category:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-3 rounded-xl text-xs font-semibold border text-center transition-colors ${
                      selectedServiceId === s.id
                        ? 'bg-teal-500 text-zinc-950 font-bold border-teal-500'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-200 block">2. Select Key Features & Modules Needed:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.features.map((feature, idx) => {
                  const isChecked = selectedFeatures.includes(feature);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleFeature(feature)}
                      className={`p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between text-left transition-colors ${
                        isChecked
                          ? 'bg-zinc-950 border-teal-500 text-zinc-100'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <span className="leading-tight">{feature}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'bg-teal-500 border-teal-500 text-zinc-950' : 'border-zinc-700'}`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Speed */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-200 block">3. Development Timeline Priority:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('normal')}
                  className={`p-3 rounded-xl text-xs font-medium border text-center transition-colors ${
                    deliverySpeed === 'normal'
                      ? 'bg-teal-500 text-zinc-950 font-bold border-teal-500'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                  }`}
                >
                  Standard Timeline ({activeService.estimatedTime})
                </button>

                <button
                  type="button"
                  onClick={() => setDeliverySpeed('express')}
                  className={`p-3 rounded-xl text-xs font-medium border text-center transition-colors ${
                    deliverySpeed === 'express'
                      ? 'bg-teal-500 text-zinc-950 font-bold border-teal-500'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                  }`}
                >
                  Express Sprint (Priority Allocation)
                </button>
              </div>
            </div>

            {/* Price Preview Card */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Estimated Total Cost:</span>
                <span className="text-xl font-serif font-bold text-teal-400">
                  ~${estimatedTotal.toLocaleString()} USD
                </span>
              </div>
              <div className="text-right font-mono text-xs text-zinc-300">
                <span className="text-zinc-500">Estimated Duration: </span>
                <span className="font-bold text-zinc-100">{activeService.estimatedTime}</span>
              </div>
            </div>

            {/* Contact Input for Callback */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs text-zinc-300 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 rounded-xl px-3 py-2.5 text-xs text-zinc-100 outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-300 block mb-1">Phone Number (for proposal delivery)</label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 rounded-xl px-3 py-2.5 text-xs text-zinc-100 font-mono outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-teal-500 hover:bg-teal-600 text-zinc-950 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
            >
              <span>Submit & Receive Detailed Proposal</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
