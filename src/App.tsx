import Hero from './components/Hero';
import ModuleGrid from './components/ModuleGrid';
import MetricsPreview from './components/MetricsPreview';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import NeuralScene from './components/NeuralScene';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <Navbar />
      <NeuralScene />
      
      <div className="relative z-10 w-full">
        <Hero />
        
        {/* Narrative Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <ModuleGrid />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <MetricsPreview />
        
        {/* Cinematic Final CTA */}
        <section className="min-h-[80vh] py-32 flex flex-col items-center justify-center text-center px-6 sm:px-10 relative overflow-hidden bg-obsidian">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1.2 }}
            transition={{ duration: 3 }}
            className="text-[12rem] md:text-[25rem] font-display font-black text-white absolute pointer-events-none select-none tracking-tighter"
          >
            AKROS
          </motion.div>
          
          <div className="relative z-10 space-y-12 max-w-4xl">
            <h3 className="text-5xl md:text-7xl font-display font-light text-white tracking-tight">
              THE FUTURE IS <span className="text-glow text-indigo-neural font-medium">SYNAPTIC</span>
            </h3>
            <p className="text-slate-muted font-sans font-light text-lg max-w-xl mx-auto">
              Join the elite circle of cognitive optimizers. Recalibrate your performance threshold today.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-gold-liquid text-obsidian font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] tracking-[0.2em] text-xs"
            >
              INITIALIZE DOWNLINK
            </motion.button>
          </div>
        </section>

        <footer className="py-24 px-6 sm:px-10 border-t border-white/5 bg-obsidian flex flex-col space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-neural flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <span className="text-white font-black text-sm">AK</span>
                </div>
                <span className="font-display font-medium text-white tracking-[0.3em] text-lg">AKROS</span>
              </div>
              <p className="text-slate-muted text-xs tracking-widest leading-relaxed max-w-xs">
                INSTITUTIONAL-GRADE COGNITIVE PERFORMANCE LABORATORY.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold tracking-[0.2em] text-white">RESOURCES</h5>
                <ul className="space-y-2 text-[10px] tracking-widest text-slate-muted">
                  <li><a href="#" className="hover:text-white transition-colors">PROTOCOLS</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">WHITEPAPERS</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">RESEARCH</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold tracking-[0.2em] text-white">SOCIAL</h5>
                <ul className="space-y-2 text-[10px] tracking-widest text-slate-muted">
                  <li><a href="#" className="hover:text-white transition-colors">TWITTER</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">DISCORD</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GITHUB</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-slate-muted space-y-4 md:space-y-0 text-center md:text-left">
            <p>© 2026 AKROS NEURAL SYSTEMS. ALL RIGHTS RESERVED. PRIVACY-FIRST. NO ANALYTICS.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default App;
