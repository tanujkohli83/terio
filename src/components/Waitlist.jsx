import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Globe, Shield, Check, Loader2 } from 'lucide-react';

const Waitlist = () => {
  const [formData, setFormData] = useState({ name: '', email: '', city: '', class: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="waitlist" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-neon-blue/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-12"
        >
          <div className="inline-block bg-neon-blue/10 border border-neon-blue/20 px-4 py-1 rounded-full text-[10px] font-bold text-neon-blue uppercase tracking-widest mb-6 px-1.5">
            Limited Access Registration
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">
            Claim Your Territory <br />
            <span className="text-neon-blue text-glow-blue italic">Before Anyone Else</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join 12,000+ early adopters turning their daily steps into digital conquest. Reserve your zone and start the domination.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto relative px-10 pt-1.5"
        >
          {/* Form Card */}
          <div className="glass-card rounded-[40px] p-8 md:p-12 relative overflow-hidden border-neon-blue/20 box-glow-cyan pt-15.5">
            {/* Header Plate */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-background border-x border-b border-neon-blue/30 px-6 py-2 rounded-b-2xl">
              <span className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.3em]">Player Registration</span>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center gap-6"
                >
                  <div className="w-20 h-20 bg-neon-blue rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                    <Check size={40} strokeWidth={3} />
                  </div>
                  <h3 className="text-3xl font-bold">Registration Locked</h3>
                  <p className="text-text-secondary">Welcome to Sector 7. Awaiting command.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="text-left space-y-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. John Doe"
                        className="w-full bg-background border border-white/10 h-14 rounded-2xl pl-12 pr-4 text-sm focus:border-neon-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="text-left space-y-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-4">Secure Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input 
                        type="email" 
                        required
                        placeholder="player@stridezone.xyz"
                        className="w-full bg-background border border-white/10 h-14 rounded-2xl pl-12 pr-4 text-sm focus:border-neon-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="text-left space-y-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-4">Operational City</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input 
                        type="text" 
                        placeholder="e.g. London"
                        className="w-full bg-background border border-white/10 h-14 rounded-2xl pl-12 pr-4 text-sm focus:border-neon-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="text-left space-y-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-4">Player Class</label>
                    <div className="relative">
                      <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <select className="w-full bg-background border border-white/10 h-14 rounded-2xl pl-12 pr-4 text-sm focus:border-neon-blue outline-none appearance-none cursor-pointer transition-all">
                        <option>Select your role</option>
                        <option>Claimer (Speed-focused)</option>
                        <option>Defender (Endurance-focused)</option>
                        <option>Tactician (Mixed)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="md:col-span-2 h-16 bg-neon-blue text-black font-black uppercase tracking-[0.2em] rounded-2xl mt-4 hover:scale-[1.02] transition-all box-glow-cyan flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="animate-spin" /> Uplink in Progress...</>
                    ) : (
                      'Get Early Access'
                    )}
                  </button>
                  <p className="md:col-span-2 text-[10px] text-text-secondary mt-2">
                    By joining, you agree to our Protocol Terms of Engagement.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
