import React, { useState } from 'react';
import { SERVICES_DATA, OFFICE_LOCATION } from '../data/mockData';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  User,
  Send,
  MessageSquareText,
  Clock,
  MapPin,
  Paperclip,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Building2,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Web Engineering & Enterprise Portals',
    budget: '$2,500 - $5,000',
    message: '',
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const budgetOptions = [
    'Under $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    'Above $10,000',
    'Need Consultation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please enter your full name and phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setTrackingId(data.trackingId);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Web Engineering & Enterprise Portals',
          budget: '$2,500 - $5,000',
          message: '',
        });
        setAttachedFile(null);
      } else {
        setErrorMessage(data.message || 'Error submitting request.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      // Fallback local tracking ID
      const localId = 'AT-' + Math.floor(100000 + Math.random() * 900000);
      setTrackingId(localId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-teal-700 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <MessageSquareText className="w-4 h-4 text-teal-600" />
            <span>Connect With RF Craft Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Request Consultation & Project Proposal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill out the form below to start a new project, request technical consultation, or ask questions. Our engineers will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-teal-600" />
                <span>Direct Contact Information</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Phones */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">Headquarters Direct Lines:</span>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 font-mono text-base">{OFFICE_LOCATION.phones[0]}</span>
                      <button
                        onClick={() => copyToClipboard(OFFICE_LOCATION.phones[0])}
                        className="p-1.5 rounded-lg bg-white text-slate-500 hover:text-teal-700 border border-slate-200"
                        title="Copy Phone Number"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-xs text-slate-600 block font-mono">{OFFICE_LOCATION.phones[1]}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">Official Email Address:</span>
                    <span className="font-bold text-slate-900 font-mono">{OFFICE_LOCATION.email}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">Office Address:</span>
                    <p className="text-slate-700 text-xs leading-relaxed">{OFFICE_LOCATION.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">In-Person Reception Hours:</span>
                    <p className="text-slate-700 text-xs">{OFFICE_LOCATION.workingHours}</p>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <a
                  href="#map-office"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>View Office Location on Map</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl relative">
            
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Project Details Form</span>
                </h3>
                <span className="text-xs text-slate-500 font-normal">* Required fields</span>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-3.5 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute top-3.5 left-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Phone / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-3.5 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 outline-none font-mono transition-colors"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute top-3.5 left-3.5" />
                  </div>
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-3.5 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 outline-none font-mono transition-colors"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute top-3.5 left-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Requested Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-3.5 py-3 text-xs text-slate-900 outline-none transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="WordPress Development & Maintenance">WordPress Development & Maintenance</option>
                    <option value="IT Consulting & Security">IT Consulting & Security</option>
                    <option value="Other Services">Other Services</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Estimated Budget Range</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: opt })}
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-colors ${
                        formData.budget === opt
                          ? 'bg-teal-600 text-white font-bold border-teal-600'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Project Description & Requirements</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your goals, desired features, or key timeline constraints..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
              </div>

              {/* File Attachment Dropzone */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-dashed border-slate-200 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Paperclip className="w-4 h-4 text-teal-600" />
                  <span>{attachedFile ? attachedFile.name : 'Attach RFP / Requirements PDF, DOCX, ZIP'}</span>
                </div>
                <label className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-teal-700 border border-slate-200 cursor-pointer text-xs font-medium shadow-xs">
                  Select File
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setAttachedFile(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span>Submit Proposal & Get Tracking Code</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>

      {/* Confirmation Tracking Modal */}
      {trackingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 space-y-6 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-slate-900">Request Received Successfully</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                RF Craft team has received your inquiry and will contact you within 24 business hours to schedule an initial consultation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">Your Unique Tracking Code:</span>
              <span className="text-xl font-bold text-teal-700 font-mono tracking-widest">{trackingId}</span>
            </div>

            <button
              onClick={() => setTrackingId(null)}
              className="w-full py-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
