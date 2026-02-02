import { motion } from 'framer-motion';
import { Activity, Map, Axe, Circle } from 'lucide-react';

const manualSteps = [
  {
    num: "01",
    title: "Move",
    desc: "Sync your GPS. Every step counts. Walk, run or cycle to generate Kinetic Energy and power up your faction's core.",
    icon: Activity,
    color: "neon-blue",
    points: ["Generate 100 kcal / run", "Earn 50 pts per km"]
  },
  {
    num: "02",
    title: "Claim",
    desc: "Make your claim on the map. Turn neutral city blocks into your color. The more you run a route, the stronger your influence becomes.",
    icon: Map,
    color: "neon-purple",
    points: ["Plant Over 15k Hexagons", "Build Defensive Network"]
  },
  {
    num: "03",
    title: "Compete",
    desc: "Defend your turf from rivals or join a local Faction to launch massive coordinated takeovers. Dominate the city leaderboard.",
    icon: Axe,
    color: "electric-green",
    points: ["Weekly Faction Wars", "Earn Exclusive Gear"]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-blue uppercase tracking-[0.4em] text-xs font-bold"
          >
            Operation Manual
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            The Path to Dominance
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-text-secondary mt-6 max-w-2xl mx-auto"
          >
            Move, Claim, and Compete in the ultimate gamified fitness experience. Your daily run just became a strategic conquest.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {manualSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-3xl relative group hover:border-neon-blue/40 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-8 border border-${step.color}/20 group-hover:scale-110 transition-transform`}>
                <step.icon className={`text-${step.color}`} size={28} />
              </div>
              
              <div className="text-sm font-bold text-text-secondary mb-2">{step.num}. {step.title}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 h-20">
                {step.desc}
              </p>

              <div className="space-y-3 border-t border-white/5 pt-6">
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
                    <Circle size={6} className={`fill-${step.color} text-${step.color}`} />
                    {pt}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
