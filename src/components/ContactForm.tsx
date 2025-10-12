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
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'Please agree to the privacy policy';
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
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "Contact inquiry from website",
          message: formData.message,
          from_name: "Carter Tree Care Website",
          to_name: "Carter Tree Care Team",
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Success
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you shortly.'
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
      } else {
        // Web3Forms returned an error
        setSubmitStatus({
          success: false,
          message: 'An error occurred while sending. Please try again later.'
        });
      }
      
    } catch (error) {
      // Network or other error
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later or contact us directly.'
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
            placeholder="Your Name"
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
            placeholder="Your Email Address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700"
            placeholder="Your Phone Number (optional)"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-neutral/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-700"
          >
            <option value="" className="text-gray-500">Please select</option>
            <option value="Tree Care">Tree Care</option>
            <option value="Tree Removal">Tree Removal</option>
            <option value="Garden Work">Garden Work</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-neutral/20'} focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 text-gray-700`}
          placeholder="Your Message"
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
            I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> <span className="text-red-500">*</span>
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
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
      
      <p className="text-xs text-neutral/60 text-center mt-4">
        Fields with <span className="text-red-500">*</span> are required fields
      </p>
    </form>
  );
};

export default ContactForm; 