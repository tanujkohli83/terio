import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Users, Trophy, Bell, BarChart2 } from 'lucide-react';

const features = [
  { icon: Zap, text: "Real-time GPS territory claiming", color: "text-neon-blue" },
  { icon: Users, text: "Live friend competition on map", color: "text-neon-purple" },
  { icon: Trophy, text: "Global & local leaderboards", color: "text-electric-green" },
  { icon: Zap, text: "Achievement unlocks & rewards", color: "text-neon-blue" },
  { icon: Bell, text: "Push notifications to defend zones", color: "text-neon-purple" },
  { icon: BarChart2, text: "Premium features & analytics", color: "text-electric-green" },
];

const phoneScreens = [
  { 
    id: 1, 
    content: (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.4),transparent_70%)]"></div>
        {/* Mock Map */}
        <div className="grid grid-cols-4 gap-1 transform rotate-12 scale-150">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`w-12 h-12 clip-path-hexagon ${i % 3 === 0 ? 'bg-neon-blue/80' : 'bg-surface border border-white/10'}`}></div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-electric-green text-black font-bold py-2 px-6 rounded-full shadow-lg">Start Run</div>
      </div>
    )
  },
  { 
    id: 2, 
    content: (
      <div className="w-full h-full bg-gray-900 flex flex-col p-6">
        <div className="text-center mt-12 mb-8">
          <div className="text-6xl font-bold font-mono text-white">4.5<span className="text-xl text-text-secondary">km</span></div>
          <div className="text-electric-green uppercase tracking-wider text-sm mt-2">Running</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface p-4 rounded-xl">
            <div className="text-text-secondary text-xs">Pace</div>
            <div className="text-xl font-bold">5:30 <span className="text-xs font-normal">/km</span></div>
          </div>
          <div className="bg-surface p-4 rounded-xl">
            <div className="text-text-secondary text-xs">Calories</div>
            <div className="text-xl font-bold">320 <span className="text-xs font-normal">kcal</span></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="w-full h-full bg-gray-900 flex flex-col p-4">
        <h3 className="text-center text-white font-bold mb-4 mt-8">Leaderboard</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((rank) => (
            <div key={rank} className={`flex items-center p-3 rounded-xl ${rank === 1 ? 'bg-neon-blue/20 border border-neon-blue/50' : 'bg-surface'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${rank === 1 ? 'bg-neon-blue text-black' : 'bg-white/10'}`}>{rank}</div>
              <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
              <div className="flex-1 font-medium text-sm">Runner {rank}</div>
              <div className="text-xs font-mono">{1000 - rank * 50} pts</div>
            </div>
          ))}
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-zinc-800 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               
              <AnimatePresence mode="wait">
                <motion.div
                  key={phoneScreens[activeScreen].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {phoneScreens[activeScreen].content}
                </motion.div>
              </AnimatePresence>
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-20"></div>
            </div>
          </motion.div>

          {/* Features List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-4">Built for Competitors</h2>
              <p className="text-text-secondary text-lg">Every feature designed to keep you moving</p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`p-2 rounded-lg bg-surface ${feature.color} group-hover:scale-110 transition-transform`}>
                    <Check size={20} />
                  </div>
                  <span className="text-lg text-white group-hover:text-neon-blue transition-colors">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Clip Path CSS override for Hexagon */}
      <style>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
};

export default Features;
