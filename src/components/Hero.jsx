import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Navigation } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 5]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
        ></motion.div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/10 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-left flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-neon-blue/10 border border-neon-blue/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-neon-blue uppercase w-fit"
            >
              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse"></div>
              Live Beta Expansion Phase 1
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-[1.1]"
            >
              Turn Your Runs <br />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue">Territory</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
            >
              The world is your leaderboard. Claim streets, defend your neighborhood, and become the local legend in the ultimate gamified fitness experience.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mt-4"
            >
              <div className="flex-1 relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-surface border border-white/10 h-14 rounded-xl px-12 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-blue" />
              </div>
              <button className="bg-neon-blue text-black font-bold h-14 px-8 rounded-xl hover:scale-105 transition-transform box-glow-cyan">
                Join the Waitlist ➜
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                <span className="text-white font-bold">12,000+</span> Runners already claiming turf
              </span>
            </motion.div>
          </div>

          {/* Right Column: Map Mockup */}
          <motion.div
            style={{ y: y2, rotateY: rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              {/* Map Back Layer */}
              <div className="absolute inset-0 bg-neon-blue rounded-[40px] transform rotate-3 scale-[0.98] opacity-20 blur-sm"></div>
              
              {/* Realistic Map Card */}
              <div className="absolute inset-0 bg-[#0F172A] rounded-[40px] border border-white/20 shadow-2xl overflow-hidden group">
                {/* Stylized Map Image */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="City Map" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:scale-110 transition-transform duration-[10s]"
                />
                
                {/* Map Grid Content */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.2),transparent_70%)]"></div>
                
                <div className="w-full h-full p-8 flex flex-col justify-between relative z-10">
                  {/* Top Bar: Zone Captured */}
                  <div className="flex justify-between items-start">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="bg-[#0A0A0A]/90 backdrop-blur px-4 py-2 rounded-full border border-neon-blue/40 flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    >
                       <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-[0_0_8px_#00F0FF]"></div>
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neon-blue">Zone Captured</span>
                    </motion.div>
                  </div>

                  {/* Defender Tag (Side Overlay) */}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-1/4 -right-4 bg-[#0A0A0A]/90 backdrop-blur py-3 px-5 rounded-l-2xl border-y border-l border-white/10 flex items-center gap-4 shadow-2xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30 overflow-hidden shrink-0">
                      <Navigation size={18} className="text-neon-blue fill-neon-blue/20 rotate-45" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[8px] text-text-secondary uppercase font-bold tracking-[0.2em] mb-0.5">Defender</div>
                      <div className="text-sm font-black text-white">Ghost_Runner</div>
                    </div>
                  </motion.div>

                  {/* XP Gain Bubble (Bottom Right) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                    className="absolute bottom-8 right-8"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-neon-purple/30 blur-3xl group-hover:bg-neon-purple/50 transition-colors"></div>
                      <div className="relative bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 w-36 h-36 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-inner">
                        <div className="text-[10px] font-bold uppercase text-neon-purple tracking-widest mb-2">XP Gain</div>
                        <div className="text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">+2,450</div>
                        
                        {/* Simple Progress Bar Overlay */}
                        <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '70%' }}
                            transition={{ delay: 2, duration: 1.5 }}
                            className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* External Glow Layer */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
