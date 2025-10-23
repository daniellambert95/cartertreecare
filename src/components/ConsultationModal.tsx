'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  service: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    description: '',
    name: '',
    phone: '',
    email: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const services = [
    { id: 'baumpflege', name: 'Tree Care', icon: '/icons/2baumpflege.svg .svg' },
    { id: 'baumfaellung', name: 'Tree Removal', icon: '/icons/3baumfallung.svg .svg' },
    { id: 'kroneneinkuerzung', name: 'Crown Reduction', icon: '/icons/6einkurzung.svg .svg' },
    { id: 'baumstumpfentfernung', name: 'Stump Removal', icon: '/icons/14stumpp.svg.svg' },
    { id: 'gartenarbeit', name: 'Garden Work', icon: '/icons/8gartenarbeit.svg .svg' },
    { id: 'kronenpflege', name: 'Other', icon: '/icons/5kronenpflege.svg .svg' },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const selectedService = services.find(s => s.id === formData.service);
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
          subject: `Book Consultation - ${selectedService?.name || 'Unknown Service'}`,
          message: `Service: ${selectedService?.name || 'Unknown'}\n\nDescription:\n${formData.description}`,
          from_name: "Carter Tree Care Website - Book Consultation",
          to_name: "Carter Tree Care Team",
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! We will contact you within 12 hours.'
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            service: '',
            description: '',
            name: '',
            phone: '',
            email: '',
            consent: false,
          });
          setCurrentStep(1);
          setSubmitStatus(null);
          onClose();
        }, 3000);
      } else {
        setSubmitStatus({
          success: false,
          message: 'An error occurred while sending. Please try again later.'
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.description.trim() !== '';
      case 3:
        return formData.name.trim() !== '' && formData.email.trim() !== '' && 
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && formData.consent;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral">Book Consultation</h2>
                <p className="text-sm text-neutral/60">Step {currentStep} of 3</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-500">{Math.round((currentStep / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {submitStatus ? (
              <div className={`text-center py-12 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${submitStatus.success ? 'bg-green-100' : 'bg-red-100'}`}>
                  {submitStatus.success ? (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {submitStatus.success ? 'Successfully sent!' : 'Error occurred'}
                </h3>
                <p className="text-gray-600">{submitStatus.message}</p>
              </div>
            ) : (
              <>
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        Let&apos;s go!
                      </div>
                      <h3 className="text-2xl font-bold text-neutral mb-2">What can we do for you?</h3>
                      <p className="text-gray-600">Choose the service for which you need consultation.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                            formData.service === service.id
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <div className="flex flex-col items-center justify-center space-y-2 text-center">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center ${
                              formData.service === service.id ? 'bg-primary/15' : 'bg-gray-100'
                            }`}>
                              <Image 
                                src={service.icon} 
                                alt={service.name}
                                width={24}
                                height={24}
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                style={{
                                  filter: formData.service === service.id 
                                    ? 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(451%) hue-rotate(81deg) brightness(90%) contrast(101%)'
                                    : 'brightness(0) saturate(100%) invert(37%) sepia(8%) saturate(378%) hue-rotate(314deg) brightness(95%) contrast(92%)'
                                }}
                              />
                            </div>
                            <span className={`font-medium text-xs sm:text-sm leading-tight ${
                              formData.service === service.id ? 'text-primary' : 'text-gray-700'
                            }`}>
                              {service.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Description */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-neutral mb-2">Please briefly describe the work...</h3>
                      <p className="text-gray-600">Let us know what exactly needs to be done.</p>
                    </div>
                    
                    <div>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your request here..."
                        rows={8}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none text-gray-900 placeholder-gray-500"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        The more detailed you describe your request, the better we can help you.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                        Almost done!
                      </div>
                      <h3 className="text-2xl font-bold text-neutral mb-2">Please provide contact details</h3>
                      <p className="text-gray-600">We will contact you within 12 hours.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 placeholder-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="Your phone number (optional)"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 placeholder-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-Mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Your email address"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 placeholder-gray-500"
                        />
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/50"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="consent" className="font-medium text-gray-700">
                            I agree to the <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span> <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer with buttons */}
          {!submitStatus && (
            <div className="flex items-center justify-between p-6 bg-gray-50 border-t border-gray-100 flex-shrink-0">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Next</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal; 