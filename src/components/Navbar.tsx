import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Laboratory', 'Protocols', 'Metrics'];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card neural-border h-16 flex items-center justify-between px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-indigo-neural flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.6)]">
            <span className="text-white font-black text-xs">AK</span>
          </div>
          <span className="font-display font-medium text-white tracking-[0.2em] text-sm group cursor-pointer">
            AKROS
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-[10px] uppercase tracking-[0.2em] text-slate-muted hover:text-white transition-all font-bold"
            >
              {item}
            </motion.a>
          ))}
          
          <button className="px-6 py-2 bg-indigo-neural/20 border border-indigo-neural/40 text-indigo-neural text-[10px] font-bold tracking-[0.2em] rounded-full hover:bg-indigo-neural hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            INITIALIZE
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </motion.div>
    </nav>
  );
}
