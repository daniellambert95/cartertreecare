'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    
    // Clear error when user checks the box
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setSubmitStatus({
        success: true,
        message: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
      
    } catch {
      // Error
      setSubmitStatus({
        success: false,
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus && (
        <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-neutral/20'} focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700`}
            placeholder="Ihr Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-neutral/20'} focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700`}
            placeholder="Ihre E-Mail-Adresse"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700"
            placeholder="Ihre Telefonnummer (freiwillig)"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">
            Betreff
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-700"
          >
            <option value="" className="text-gray-500">Bitte wählen</option>
            <option value="Baumpflege">Baumpflege</option>
            <option value="Baumfällung">Baumfällung</option>
            <option value="Gartenarbeit">Gartenarbeit</option>
            <option value="Beratung">Beratung</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-neutral/20'} focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700`}
          placeholder="Ihre Nachricht"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-primary border-neutral/20 rounded focus:ring-primary/50"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className={`font-medium ${errors.consent ? 'text-red-500' : 'text-neutral/80'}`}>
            Ich stimme der <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> zu <span className="text-red-500">*</span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </>
          ) : (
            'Nachricht senden'
          )}
        </button>
      </div>
      
      <p className="text-xs text-neutral/60 text-center mt-4">
        Felder mit <span className="text-red-500">*</span> sind Pflichtfelder
      </p>
    </form>
  );
};

export default ContactForm; 