import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { 
  Activity, Brain, Shield, Zap, Target, Eye, Gauge, Layers, 
  RotateCcw, Search, Layout, Move, ClipboardCheck, Timer, 
  ZapOff, BarChart3, Binary, Fingerprint, Microscope
} from 'lucide-react';

const modules = [
  { id: '1', name: 'Precision Tap', metric: 'RT: 210ms', icon: Fingerprint, tier: 'FREE' },
  { id: '2', name: 'N-Back', metric: 'd-prime: 3.2', icon: Brain, tier: 'FREE' },
  { id: '3', name: 'Brain Fog Reset', metric: 'CV-RT: 0.14', icon: ZapOff, tier: 'FREE' },
  { id: '4', name: 'Gatekeeper', metric: 'ICR: 92%', icon: Shield, tier: 'PRO' },
  { id: '5', name: 'Tachistoscope', metric: 'Threshold: 16ms', icon: Eye, tier: 'PRO' },
  { id: '6', name: 'Interceptor', metric: 'Variance: ±4ms', icon: Target, tier: 'PRO' },
  { id: '7', name: 'Dual N-Back', metric: 'Level: N=5', icon: Layers, tier: 'PRO' },
  { id: '8', name: 'Recall Lab', metric: 'Capacity: 7.2', icon: ClipboardCheck, tier: 'PRO' },
  { id: '9', name: 'Stroop', metric: 'IRI: 0.82', icon: Gauge, tier: 'PRO' },
  { id: '10', name: 'Endurance', metric: 'Strain: 8.4', icon: Activity, tier: 'PRO' },
  { id: '11', name: 'Attentional Blink', metric: 'Lag: T2 (88%)', icon: Timer, tier: 'PRO' },
  { id: '12', name: 'Flanker', metric: 'Conflict: 12ms', icon: Search, tier: 'PRO' },
  { id: '13', name: 'Spatial Recall', metric: 'Span: 6.4', icon: Layout, tier: 'PRO' },
  { id: '14', name: 'Reflex Cancel', metric: 'Inhibition: 190ms', icon: RotateCcw, tier: 'PRO' },
  { id: '15', name: 'Pathfinder', metric: 'Flexibility: 0.9', icon: Move, tier: 'PRO' },
  { id: '16', name: 'Gear Switch', metric: 'Cost: 110ms', icon: Zap, tier: 'PRO' },
  { id: '17', name: 'Rule Shift', metric: 'Sets: 14/15', icon: Binary, tier: 'PRO' },
  { id: '18', name: 'Sequence Recall', metric: 'Verbal: 32w', icon: BarChart3, tier: 'PRO' },
  { id: '19', name: 'Field Track', metric: 'Accuracy: 98%', icon: Microscope, tier: 'PRO' },
  { id: '20', name: 'Baseline', metric: 'Calibrated', icon: ClipboardCheck, tier: 'SYSTEM' },
];

export default function ModuleGrid() {
  return (
    <section id="laboratory" className="py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:items-center justify-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-6 px-4 py-1 rounded-full border border-indigo-neural/30 bg-indigo-neural/5 text-[10px] tracking-[0.4em] text-indigo-neural font-bold uppercase"
        >
          Institutional Inventory
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-6">
          NEURAL <span className="text-indigo-neural text-glow">LABORATORY</span>
        </h2>
        <p className="text-slate-muted font-sans font-light max-w-2xl text-lg leading-relaxed">
          Access 20 clinical-grade training paradigms. From simple reaction stability 
          to complex multi-threaded executive function stress tests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, i) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="group hover:border-indigo-neural/50 transition-colors cursor-pointer relative overflow-hidden h-full min-h-[180px]">
              <div className="absolute top-0 right-0 p-4">
                <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 rounded border ${
                  module.tier === 'PRO' 
                  ? 'text-gold-liquid border-gold-liquid/20 bg-gold-liquid/5' 
                  : module.tier === 'FREE' 
                    ? 'text-indigo-neural border-indigo-neural/20 bg-indigo-neural/5'
                    : 'text-slate-muted border-white/10 bg-white/5'
                }`}>
                  {module.tier}
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-neural/10 group-hover:border-indigo-neural/30 transition-all duration-300">
                  <module.icon className="w-5 h-5 text-white group-hover:text-indigo-neural transition-colors" />
                </div>
                
                <div className="relative">
                  <h3 className="text-lg font-display font-medium text-white mb-1 group-hover:text-indigo-neural transition-colors">{module.name}</h3>
                  <p className="text-[10px] font-mono text-slate-muted tracking-widest">{module.metric}</p>
                </div>
              </div>

              {/* Liquid Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-neural/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
