
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Legal from './pages/Legal';
import AppAds from './pages/AppAds';
import { Icons } from './constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-black/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-gradient-vibrant flex items-center justify-center">
            <span className="text-white text-xs">B</span>
          </div>
          <span className="text-gradient">Bhartiya App Co.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <a href="#apps" className="hover:text-black transition-colors">Our Apps</a>
          <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
          <Link to="/app-ads.txt" className="hover:text-black transition-colors">Ads Data</Link>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
          Join Beta
        </button>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/50 border-t border-black/5 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-vibrant flex items-center justify-center">
              <span className="text-white text-xs">B</span>
            </div>
            <span className="text-lg font-bold tracking-tighter text-slate-900">Bhartiya App Company</span>
          </div>
          <p className="text-slate-500 max-w-sm">
            Crafting the next generation of social and utility apps for the GenZ population. 
            Innovating daily, scaling globally.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-black">Terms of Service</Link></li>
            <li><Link to="/app-ads.txt" className="hover:text-black">app-ads.txt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-black">Twitter</a></li>
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/5 flex justify-between items-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Bhartiya App Company. All rights reserved.</p>
        <p>Made with ❤️ in Bharat.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/app-ads.txt" element={<AppAds />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
