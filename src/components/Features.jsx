import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Users, Trophy, Bell, BarChart2, Map as MapIcon, Timer, Heart, Shield, Navigation } from 'lucide-react';

const features = [
  { icon: Zap, text: "Real-time GPS territory claiming", color: "text-neon-blue" },
  { icon: Users, text: "Live friend competition on map", color: "text-neon-purple" },
  { icon: Trophy, text: "Global & local leaderboards", color: "text-electric-green" },
  { icon: Shield, text: "Zone defense & decay system", color: "text-neon-blue" },
  { icon: Bell, text: "Tactical push notifications", color: "text-neon-purple" },
  { icon: BarChart2, text: "Advanced performance analytics", color: "text-electric-green" },
];

const phoneScreens = [
  { 
    id: 1, 
    content: (
      <div className="w-full h-full bg-[#0F172A] flex flex-col items-center relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,180,255,0.15),transparent_60%)]"></div>
        
        {/* Glowing Hexagons on Map */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-neon-blue/20 clip-path-hexagon border border-neon-blue/40 animate-pulse"></div>
        <div className="absolute top-40 right-12 w-16 h-16 bg-neon-purple/20 clip-path-hexagon border border-neon-purple/40 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-electric-green/10 clip-path-hexagon border border-electric-green/30 animate-pulse delay-1000"></div>

        {/* HUD Elements */}
        <div className="mt-16 w-full px-6 flex justify-between items-center z-10">
          <div className="bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Zone: North Bank</span>
          </div>
          <div className="bg-black/60 backdrop-blur p-2 rounded-full border border-white/10">
            <Navigation size={12} className="text-neon-blue" />
          </div>
        </div>

        {/* Main Action Circle */}
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-neon-blue/20 blur-2xl group-hover:bg-neon-blue/40 transition-colors"></div>
            <div className="relative w-36 h-36 rounded-full bg-[#0A0A0A] border-4 border-neon-blue flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <span className="text-[10px] font-black text-neon-blue uppercase mb-1">Status</span>
              <span className="text-xl font-black text-white leading-none">READY</span>
              <div className="mt-2 w-12 h-1 bg-neon-blue/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-neon-blue animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="w-[85%] mb-8 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-10 flex justify-between gap-4">
           <div className="text-center">
             <div className="text-[8px] text-text-secondary uppercase">Rank</div>
             <div className="text-sm font-black">#234</div>
           </div>
           <div className="w-px bg-white/10 h-8"></div>
           <div className="text-center">
             <div className="text-[8px] text-text-secondary uppercase">Claims</div>
             <div className="text-sm font-black">15</div>
           </div>
           <div className="w-px bg-white/10 h-8"></div>
           <div className="text-center">
             <div className="text-[8px] text-text-secondary uppercase">Level</div>
             <div className="text-sm font-black text-neon-blue">12</div>
           </div>
        </div>

        {/* BIG START BUTTON */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-electric-green rounded-xl flex items-center justify-center text-black font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(57,255,20,0.4)]">
          Start Activity
        </div>
      </div>
    )
  },
  { 
    id: 2, 
    content: (
      <div className="w-full h-full bg-[#0F172A] flex flex-col p-6 items-center">
        {/* Header HUD */}
        <div className="mt-10 w-full flex justify-between items-center opacity-60">
           <Timer size={14} />
           <span className="text-xs font-mono">00:14:23</span>
           <Heart size={14} className="text-red-500 animate-pulse" />
        </div>

        {/* Main Stat Ring */}
        <div className="mt-10 relative flex items-center justify-center">
          <svg className="w-48 h-48 -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="552" strokeDashoffset="138" strokeLinecap="round" className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-4xl font-black text-white">4.2</span>
             <span className="text-[10px] uppercase font-bold text-text-secondary tracking-[0.2em]">km Claimed</span>
          </div>
        </div>

        {/* Split Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 w-full">
           <div className="bg-surface/50 border border-white/5 p-4 rounded-2xl">
              <div className="text-[10px] text-text-secondary uppercase mb-1">Pace</div>
              <div className="text-xl font-black text-white tracking-tight">5:30 <span className="text-xs font-normal opacity-50">/km</span></div>
           </div>
           <div className="bg-surface/50 border border-white/5 p-4 rounded-2xl">
              <div className="text-[10px] text-text-secondary uppercase mb-1">Energy</div>
              <div className="text-xl font-black text-neon-purple tracking-tight">+320 <span className="text-xs font-normal opacity-50">KE</span></div>
           </div>
        </div>

        {/* Activity Graph Sketch */}
        <div className="mt-6 flex-1 w-full bg-black/40 rounded-2xl border border-white/5 p-4 overflow-hidden relative">
           <div className="text-[8px] text-text-secondary uppercase mb-4">Live Intensity</div>
           <div className="flex items-end h-16 gap-1">
              {[40, 60, 30, 80, 50, 90, 45, 70, 60, 40, 55, 75, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-neon-blue/30 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
           </div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon-blue/10 to-transparent"></div>
        </div>
        
        {/* Control Button */}
        <div className="w-full flex gap-4 mt-6">
           <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5"><div className="w-4 h-4 bg-white rounded-sm"></div></div>
           <div className="flex-1 h-14 bg-surface rounded-full flex items-center justify-center font-black uppercase text-xs tracking-widest border border-white/10">Resume</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="w-full h-full bg-[#0F172A] flex flex-col p-6 pt-12">
        <h3 className="text-center text-white font-black uppercase tracking-[0.3em] text-xs mb-8">Sector Rankings</h3>
        
        <div className="space-y-3">
          {[
            { name: "Neon_Striker", pts: "14.2k", level: 32, color: "neon-blue" },
            { name: "ZoneMaster_X", pts: "12.8k", level: 28, color: "white" },
            { name: "ShadowStep", pts: "11.5k", level: 25, color: "white" },
            { name: "UrbanGhost", pts: "9.2k", level: 22, color: "white" },
            { name: "Circuit_Run", pts: "8.1k", level: 19, color: "white" }
          ].map((runner, i) => (
            <div key={i} className={`flex items-center p-3 rounded-2xl border ${i === 0 ? 'bg-neon-blue/10 border-neon-blue/30' : 'bg-surface/40 border-white/5'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black mr-3 ${i === 0 ? 'bg-neon-blue text-black' : 'bg-white/10 text-white'}`}>
                #{i + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold text-white tracking-tight">{runner.name}</div>
                  <div className="text-[8px] font-bold text-neon-purple uppercase">Lv.{runner.level}</div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full mt-1.5 overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-40" style={{ width: `${100 - i * 15}%` }}></div>
                </div>
              </div>
              <div className="text-right ml-3">
                <div className="text-xs font-black text-white">{runner.pts}</div>
                <div className="text-[8px] text-text-secondary uppercase font-bold tracking-tighter">KE Points</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Footer Info */}
        <div className="mt-auto items-center flex flex-col gap-2">
           <div className="text-[8px] text-text-secondary uppercase tracking-[0.2em]">Next payout in 4h 12m</div>
           <div className="w-24 h-1 bg-white/10 rounded-full"></div>
        </div>
      </div>
    )
  }
];

const Features = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % phoneScreens.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Phone Mockup Case */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center relative perspective-1000"
          >
            {/* External Glow */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] w-[400px] left-1/2 -translate-x-1/2 bg-neon-blue/10 blur-[120px] rounded-full -z-10"></div>

            <div className="relative w-[320px] h-[640px] bg-black rounded-[50px] border-[10px] border-[#1A1A1A] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
               {/* Reflection Effect */}
               <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50"></div>
               
               {/* Internal Screen Container */}
               <div className="w-full h-full rounded-[36px] overflow-hidden relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={phoneScreens[activeScreen].id}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      {phoneScreens[activeScreen].content}
                    </motion.div>
                 </AnimatePresence>
                 
                 {/* Internal HUD Overlays */}
                 <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
               </div>
               
               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#1A1A1A] rounded-b-[20px] z-50 flex items-end justify-center pb-2">
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-black border border-white/5"></div>
                    <div className="w-12 h-1 rounded-full bg-black border border-white/5"></div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Features List Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-neon-blue uppercase tracking-[0.4em] text-[10px] font-black mb-4 block">Core Experience</span>
              <h2 className="text-5xl font-extrabold mb-6 leading-tight">Built for <br />the Elite Elite Competitor</h2>
              <p className="text-text-secondary text-xl leading-relaxed max-w-lg">
                Our interface is tactical, real-time, and designed to keep your focus on the territory ahead. No clutter—only results.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-6 p-4 rounded-3xl group hover:bg-white/5 transition-all cursor-default border border-transparent hover:border-white/5"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-surface flex items-center justify-center shrink-0 ${feature.color} group-hover:scale-110 group-hover:bg-background transition-all shadow-xl`}>
                    <feature.icon size={28} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">{feature.text}</span>
                    <span className="text-xs text-text-secondary opacity-60">Real-time synchronization with Sector 7 Node.</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Clip Path CSS for Hexagon */}
      <style>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Features;
