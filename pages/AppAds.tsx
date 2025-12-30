
import React, { useState } from 'react';
import { Icons } from '../constants';

const AppAds: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const adsText = "google.com, pub-4282310189334407, DIRECT, f08c47fec0942fa0";

  const handleCopy = () => {
    navigator.clipboard.writeText(adsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="glass p-12 rounded-[2rem] border-black/5 relative overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-amber-500/10 text-amber-700 rounded-xl">
            <Icons.FileText />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900">app-ads.txt</h1>
            <p className="text-slate-500 text-sm">Authorized Sellers Declaration for AdMob</p>
          </div>
        </div>

        <p className="text-slate-600 mb-8 leading-relaxed">
          The <strong>app-ads.txt</strong> file allows app developers to declare who is authorized to sell their advertising inventory. 
          This improves transparency for advertisers and helps protect your ad revenue.
        </p>

        <div className="relative group">
          <div className="bg-slate-100 rounded-xl p-6 font-mono text-sm text-slate-700 border border-black/5 overflow-x-auto">
            {adsText}
          </div>
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-white hover:bg-slate-50 text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-black/10 shadow-sm"
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/50 p-6 rounded-2xl border border-black/5">
            <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Verification Status
            </h4>
            <p className="text-sm text-slate-500">Crawled by Google Bot daily. Served at root domain.</p>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border border-black/5">
            <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Inventory Protection
            </h4>
            <p className="text-sm text-slate-500">Relationship established with Publisher ID pub-4282310189334407.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-400 text-sm">
        <p>If you are an advertiser, verify our inventory using the data above.</p>
      </div>
    </div>
  );
};

export default AppAds;
