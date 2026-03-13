import { motion } from 'framer-motion';
import MagneticEffect from './MagneticEffect';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border-white/20 text-indigo-neural text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-neural opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-neural"></span>
          </span>
          <span>SYSTEM ONLINE V1.0.4</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white tracking-tighter leading-[0.9]"
        >
          BREATHING <br />
          <span className="text-glow font-medium text-indigo-neural">LIFE</span> INTO DATA.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg md:text-xl text-slate-muted font-sans leading-relaxed"
        >
          Experience the next generation of neural visualization. A cinematic 
          narrative where data transcends bits and becomes an immersive 
          story of interconnected nodes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 z-20"
        >
          <MagneticEffect strength={0.3}>
            <button className="btn-primary group">
              <span className="relative z-10 flex items-center">
                LAUNCH PROJECT
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </MagneticEffect>
          
          <MagneticEffect strength={0.2}>
            <button className="px-8 py-4 glass-card border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
              VIEW TECHNOLOGY
            </button>
          </MagneticEffect>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-muted font-medium">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
