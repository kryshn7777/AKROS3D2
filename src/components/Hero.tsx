import { motion } from 'framer-motion';
import MagneticEffect from './MagneticEffect';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center text-center space-y-12">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass-card border-white/20 text-indigo-neural text-xs font-bold tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-neural opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-neural"></span>
          </span>
          <span>NEURAL STATUS: OPTIMIZED</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] lg:text-[13rem] font-display font-extralight text-white tracking-[1.2rem] sm:tracking-[2rem] leading-[0.8] relative"
        >
          <span className="text-glow">EVOLVE</span> <br />
          <span className="relative inline-block mt-4 sm:mt-8">
            <span className="absolute inset-0 text-indigo-neural blur-3xl opacity-20 pointer-events-none">BEYOND</span>
            <span className="relative font-normal text-indigo-neural tracking-tighter sm:tracking-[-0.5rem] italic">BEYOND</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-lg md:text-xl text-slate-muted font-sans font-extralight leading-relaxed tracking-wide"
        >
          Institutional-grade cognitive training for those who refuse to settle for plateau. Train your brain like a system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 z-20 pt-8"
        >
          <MagneticEffect strength={0.4}>
            <button className="btn-primary group !px-12 !py-5">
              <span className="relative z-10 flex items-center text-sm font-bold tracking-widest">
                INITIALIZE LABORATORY
              </span>
            </button>
          </MagneticEffect>
          
          <MagneticEffect strength={0.2}>
            <button className="px-12 py-5 glass-card border-white/20 text-white text-sm font-bold tracking-widest hover:border-indigo-neural/50 transition-all uppercase">
              View Protocols
            </button>
          </MagneticEffect>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6"
      >
        <span className="text-[10px] uppercase tracking-[0.8em] text-slate-muted font-bold opacity-50">SCROLL TO CALIBRATE</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-indigo-neural to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
