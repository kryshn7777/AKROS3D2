import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Innovation', 'Architecture', 'Ecosystem', 'Lab'];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card neural-border h-14 flex items-center justify-between px-6 rounded-full"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-neural flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            <span className="text-white font-bold text-xs">AK</span>
          </div>
          <span className="font-display font-medium text-white tracking-widest text-sm">AKROS</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-slate-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
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
