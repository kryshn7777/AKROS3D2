import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Clock, Zap, CheckCircle2, ChevronRight, FileJson, FileType } from 'lucide-react';

const data = [
  { name: 'W1', systematic: 85, chaotic: 45 },
  { name: 'W2', systematic: 88, chaotic: 42 },
  { name: 'W3', systematic: 91, chaotic: 47 },
  { name: 'W4', systematic: 94, chaotic: 40 },
  { name: 'W5', systematic: 96, chaotic: 44 },
  { name: 'W6', systematic: 98, chaotic: 41 },
];

const sessions = [
  { id: '1', module: 'Dual N-Back', score: 'N=5 (94%)', time: '02:14:08', type: 'Clinical' },
  { id: '2', module: 'Gatekeeper', score: 'ICR: 0.98', time: '02:14:05', type: 'Pro' },
  { id: '3', module: 'Tachistoscope', score: '16ms (100%)', time: '02:14:03', type: 'Pro' },
  { id: '4', module: 'Brain Fog Reset', score: 'CV-RT: 0.12', time: '02:13:28', type: 'Free' },
  { id: '5', module: 'Stroop Interference', score: 'IRI: 0.88', icon: Zap, time: '02:13:25', type: 'Pro' },
  { id: '6', module: 'Precision Tap', score: 'RT: 208ms', time: '02:13:14', type: 'Free' },
];

export default function MetricsPreview() {
  return (
    <section id="metrics" className="py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full relative">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 space-y-8 md:space-y-0 text-center md:text-left">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-4 text-[10px] tracking-[0.5em] text-gold-liquid font-bold uppercase"
          >
            Analytical Precision
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-4">
            COMMAND <span className="text-gold-liquid text-glow">CENTER</span>
          </h2>
          <p className="text-slate-muted font-sans font-light max-w-xl text-lg">
            High-fidelity telemetry capturing the subtle evolution of your neural architecture.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-widest text-white hover:bg-white/10 transition-all">
            <FileJson className="w-3 h-3" />
            <span>EXPORT JSON</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-indigo-neural/30 bg-indigo-neural/5 text-[10px] tracking-widest text-indigo-neural hover:bg-indigo-neural/10 transition-all">
            <FileType className="w-3 h-3" />
            <span>V3 REPORT</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Graph Section */}
        <div className="lg:col-span-2 space-y-10">
          <GlassCard className="h-[500px] p-8 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-lg font-display font-medium text-white flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-indigo-neural animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <span>LOAD SYNTHESIS — SYSTEMATIC VS CHAOTIC</span>
              </h3>
              <div className="flex space-x-6 text-[10px] tracking-widest font-bold">
                <span className="flex items-center text-indigo-neural"><div className="w-3 h-0.5 bg-indigo-neural mr-2" /> SYSTEMATIC</span>
                <span className="flex items-center text-slate-muted"><div className="w-3 h-0.5 bg-slate-muted/50 dashed mr-2" /> CHAOTIC</span>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSys" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorChaotic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff08" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#475569', fontSize: 10, fontWeight: 'bold' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#475569', fontSize: 10, fontWeight: 'bold' }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #ffffff10', background: '#020617', padding: '12px' }}
                    labelStyle={{ color: '#94A3B8', fontSize: '10px', marginBottom: '8px', fontWeight: 'bold' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="systematic" 
                    stroke="#6366F1" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorSys)" 
                    animationDuration={2000}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="chaotic" 
                    stroke="#94A3B8" 
                    strokeWidth={1}
                    strokeDasharray="5 5"
                    fillOpacity={1} 
                    fill="url(#colorChaotic)" 
                    animationDuration={2500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Detailed Session Registry */}
          <GlassCard className="p-0 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h4 className="text-sm font-display font-medium text-white tracking-widest uppercase">Clinical Session Registry</h4>
              <span className="text-[10px] text-indigo-neural font-bold">LAST 24 HOURS</span>
            </div>
            <div className="divide-y divide-white/5">
              {sessions.map((session) => (
                <div key={session.id} className="p-6 hover:bg-white/[0.02] flex items-center justify-between group transition-colors">
                  <div className="flex items-center space-x-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-slate-muted group-hover:text-gold-liquid transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-white">{session.module}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-slate-muted uppercase font-bold">{session.type}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-muted tracking-widest uppercase">{session.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-right">
                      <span className="text-xs font-bold text-white block">{session.score}</span>
                      <span className="text-[9px] text-indigo-neural tracking-widest font-bold">VERIFIED</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <GlassCard className="p-8 bg-indigo-neural/5 border-indigo-neural/20">
              <Shield className="w-10 h-10 text-indigo-neural mb-6" />
              <h4 className="text-3xl font-display font-light text-white mb-2">92.4% Stability</h4>
              <p className="text-slate-muted text-sm font-light leading-relaxed">
                Interference resistance index across multi-threaded load environments.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <GlassCard className="p-8 bg-gold-liquid/5 border-gold-liquid/20">
              <CheckCircle2 className="w-10 h-10 text-gold-liquid mb-6" />
              <h4 className="text-3xl font-display font-light text-white mb-2">6.2 Target N</h4>
              <p className="text-slate-muted text-sm font-light leading-relaxed">
                Adaptive threshold for visuospatial working memory clusters.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <GlassCard className="p-10 text-center">
              <div className="relative mb-8 flex justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-white/5 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-indigo-neural/40 border-t-indigo-neural animate-spin" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white tracking-widest">CAL</span>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4 uppercase tracking-[0.2em]">Recalibrating</h3>
              <p className="text-slate-muted text-[10px] font-mono tracking-widest mb-8">
                UPDATING NEURAL BASELINE FOR MESOCYCLE 04
              </p>
              <button className="w-full py-4 bg-indigo-neural text-white text-[10px] font-bold tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                OVERRIDE PROTOCOL
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
