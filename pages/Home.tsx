
import React from 'react';
import { Icons } from '../constants';

const Home: React.FC = () => {
  const apps = [
    {
      name: "VibeChat",
      description: "Ephemeral group messaging for local hangouts.",
      icon: "https://picsum.photos/seed/vibe/200/200",
      color: "from-amber-200 to-orange-400"
    },
    {
      name: "ZenFocus",
      description: "AI-powered study streaks with gamified rewards.",
      icon: "https://picsum.photos/seed/zen/200/200",
      color: "from-pink-200 to-rose-400"
    },
    {
      name: "GigSpot",
      description: "Connect with local student gigs in 60 seconds.",
      icon: "https://picsum.photos/seed/gig/200/200",
      color: "from-indigo-200 to-violet-400"
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-200/30 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-bold text-amber-700 mb-8">
            <Icons.Rocket /> NEW ERA OF APPS
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-slate-900">
            Building the <span className="text-gradient">Digital Heartbeat</span> of GenZ.
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't just build apps. We build habits. From social networking to high-productivity tools, we understand the modern digital native.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-vibrant text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-amber-500/20">
              Explore Our Portfolio
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass text-slate-800 font-bold rounded-2xl hover:bg-white/80 transition-colors border-black/10">
              Read Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* App Grid */}
      <section id="apps" className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">Our Ecosystem</h2>
            <p className="text-slate-500">Discover apps that are currently trending in our universe. Millions of active sessions every month.</p>
          </div>
          <div className="flex gap-2">
             <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">&larr;</div>
             <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-slate-400 cursor-pointer hover:text-slate-900 transition-colors">&rarr;</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <div key={i} className="group relative glass p-8 rounded-[2rem] hover:border-amber-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/5">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${app.color} mb-6 flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform overflow-hidden`}>
                <img src={app.icon} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={app.name} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900">{app.name}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {app.description}
              </p>
              <button className="text-sm font-bold flex items-center gap-2 text-amber-700 group-hover:text-amber-600 transition-colors">
                Get Early Access <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto glass p-12 rounded-[3rem] border-amber-500/10 overflow-hidden relative shadow-inner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">5M+</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">12+</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Live Apps</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">4.8★</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Avg Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-gradient mb-2">99%</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 max-w-5xl mx-auto text-center pb-20">
        <h2 className="text-2xl font-bold text-slate-300 mb-8 uppercase tracking-[0.2em] text-sm">Empowering Local Innovation</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="text-3xl font-black text-slate-800">STARTUP HUB</div>
          <div className="text-3xl font-black text-slate-800">NATIVE VIBES</div>
          <div className="text-3xl font-black text-slate-800">TECH PULSE</div>
          <div className="text-3xl font-black text-slate-800">GENZ LABS</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
