import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeuralScene from './components/NeuralScene';
import GlassCard from './components/GlassCard';

function NarrativeSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section 
      ref={container}
      style={{ opacity, scale }}
      className="min-h-screen py-32 px-10 flex flex-col items-center justify-center relative"
    >
      <div className="max-w-4xl w-full">
        <motion.h2 
          style={{ y }}
          className="text-5xl md:text-7xl font-display font-light text-white mb-20 text-center"
        >
          The <span className="text-glow text-indigo-neural">Architecture</span> of Awe
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GlassCard className="h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-liquid/20 border border-gold-liquid/30 flex items-center justify-center">
                  <span className="text-gold-liquid">01</span>
                </div>
                <h3 className="text-2xl font-display font-medium text-white">Dynamic Synthesis</h3>
                <p className="text-slate-muted font-sans font-light">
                  Raw data is synthesized into liquid narratives, moving through 
                  procedurally generated paths.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <GlassCard className="h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-neural/20 border border-indigo-neural/30 flex items-center justify-center">
                  <span className="text-indigo-neural">02</span>
                </div>
                <h3 className="text-2xl font-display font-medium text-white">Neural Pathways</h3>
                <p className="text-slate-muted font-sans font-light">
                  Complex connections are visualized as organic webs, revealing 
                  patterns the human eye cannot detect.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


function App() {
  return (
    <Layout>
      <Navbar />
      <NeuralScene />
      
      <div className="relative z-10 w-full">
        <Hero />
        <NarrativeSection />
        
        {/* Cinematic CTA */}
        <section className="min-h-[60vh] py-32 flex flex-col items-center justify-center text-center px-10 relative overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-7xl md:text-[15rem] font-display font-extralight text-white absolute pointer-events-none"
          >
            AKROS SYSTEM
          </motion.h2>
          <div className="relative z-10 space-y-10">
            <h3 className="text-4xl font-display font-light text-white">READY TO SYNCHRONIZE?</h3>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold group"
            >
              INITIATE DOWNLINK
            </motion.button>
          </div>
        </section>


        <footer className="py-20 px-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-muted text-xs tracking-widest">
          <p>© 2026 AKROS NEURAL SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">DISCORD</a>
            <a href="#" className="hover:text-white transition-colors">WHITEPAPER</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default App;
