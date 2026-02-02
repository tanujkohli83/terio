import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  { label: "Waitlist Members", value: 10000, suffix: "+", color: "text-neon-blue" },
  { label: "Cities Ready", value: 50, suffix: "+", color: "text-neon-purple" },
  { label: "Addictive", value: 100, suffix: "%", color: "text-electric-green" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-black relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
            >
              <div className={`text-5xl md:text-6xl font-bold font-mono mb-2 ${stat.color} drop-shadow-[0_0_10px_currentColor]`}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-secondary uppercase tracking-widest text-sm font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
