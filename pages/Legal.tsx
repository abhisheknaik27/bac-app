
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-4 text-slate-900">
        {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
      </h1>
      <p className="text-slate-500 mb-12 font-medium">
        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      <div className="prose prose-indigo max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to Bhartiya App Company. We value your {isPrivacy ? 'privacy' : 'cooperation'}. 
            This document outlines the {isPrivacy ? 'way we handle your data' : 'rules for using our software'} 
            across all our mobile and web applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {isPrivacy ? '2. Data Collection' : '2. Usage Rights'}
          </h2>
          <p className="leading-relaxed">
            {isPrivacy 
              ? 'We collect minimal data necessary for app functionality. This includes device identifiers, crash logs, and anonymized usage patterns to improve our user experience.' 
              : 'Our apps are provided "as-is". We grant you a limited, non-transferable license to use our applications for personal, non-commercial purposes.'}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {isPrivacy ? '3. Data Security' : '3. Limitations of Liability'}
          </h2>
          <p className="leading-relaxed">
            {isPrivacy
              ? 'We implement industry-standard encryption protocols. Your data is encrypted at rest and in transit. We do not sell your personal information to third parties.'
              : 'Bhartiya App Company shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.'}
          </p>
        </section>

        <section className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Us</h2>
          <p className="leading-relaxed">
            For any queries regarding this document, please reach out to our legal team at:
            <br />
            <strong className="text-amber-700 text-lg">legal@bhartiyaappco.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
