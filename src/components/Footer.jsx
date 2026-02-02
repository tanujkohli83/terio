import { Hexagon, Twitter, Instagram, Disc, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-left">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-neon-blue" />
              <span className="text-sm font-black tracking-widest uppercase">Cyber-Fitness</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              The future of movement is gamified. Join the world's largest location-based fitness MMO and turn your daily routine into a quest for digital dominance.
            </p>
            <div className="flex gap-4">
               {[Twitter, Instagram, Disc, Github].map((Icon, i) => (
                 <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-neon-blue transition-colors">
                   <Icon size={16} />
                 </a>
               ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['The App', 'The Map', 'Global Leaderboard', 'Merchant store'].map(item => (
                <li key={item}><a href="#" className="text-text-secondary text-sm hover:text-neon-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Protocol</h4>
            <ul className="space-y-4">
              {['Whitepaper', 'Privacy Policy', 'Terms of Service', 'Contact Support'].map(item => (
                <li key={item}><a href="#" className="text-text-secondary text-sm hover:text-neon-blue transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="p-6 bg-neon-blue/5 border border-neon-blue/10 rounded-3xl h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-electric-green rounded-full"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Network Online</span>
            </div>
            <div className="text-2xl font-black text-neon-blue">14.2K+</div>
            <div className="text-[10px] uppercase font-bold text-text-secondary mt-1">Sectors Active</div>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
          <div className="text-[10px] text-text-secondary/40 font-bold uppercase tracking-widest leading-6 pt-1.5">
            © 2025 CYBER-FITNESS SYSTEMS. BUILT FOR THE FUTURE OF MOVEMENT.
          </div>
          <div className="flex gap-6">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neon-blue">
               <span className="text-xs font-black italic">!</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
