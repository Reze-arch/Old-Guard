import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Map as MapIcon, 
  BookOpen, 
  Wallet, 
  ShieldAlert, 
  Calendar, 
  Info, 
  HeartPulse,
  Menu,
  X,
  ChevronRight,
  Car,
  Sparkles,
  ArrowRightLeft
} from 'lucide-react';

// Components
import Home from './components/Home';
import RoutesList from './components/RoutesList';
import Phrasebook from './components/Phrasebook';
import ExpenseTracker from './components/ExpenseTracker';
import Etiquette from './components/Etiquette';
import Emergency from './components/Emergency';
import Festivals from './components/Festivals';
import Transportation from './components/Transportation';
import NomadAI from './components/NomadAI';
import CurrencyConverter from './components/CurrencyConverter';

export type Tab = 'home' | 'routes' | 'phrases' | 'expenses' | 'etiquette' | 'emergency' | 'festivals' | 'transport' | 'ai' | 'currency';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on navigation
  const navigate = (tab: Tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-steppe-dark flex flex-col md:flex-row max-w-[1600px] mx-auto overflow-hidden">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-steppe-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-2" onClick={() => navigate('home')}>
          <div className="w-10 h-10 bg-steppe-gold rounded-full flex items-center justify-center shadow-lg shadow-steppe-gold/20">
            <Compass className="w-6 h-6 text-steppe-dark" />
          </div>
          <span className="font-serif font-bold text-xl text-steppe-gold tracking-tight uppercase">Steppe Horizon</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors text-steppe-paper"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Navigation Sidebar */}
      <nav className={`
        fixed inset-0 z-40 bg-steppe-dark md:relative md:flex md:flex-col md:w-64 md:border-r md:border-white/10 md:bg-steppe-dark/95 md:backdrop-blur-xl
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="relative h-[1px] bg-steppe-gold/30 w-full overflow-hidden">
          <div className="absolute inset-0 ornament-border"></div>
        </div>
        <div className="hidden md:flex items-center gap-3 p-8 mb-4">
          <div className="w-12 h-12 bg-steppe-gold rounded-full flex items-center justify-center shadow-lg shadow-steppe-gold/20">
            <Compass className="w-7 h-7 text-steppe-dark" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl leading-none text-steppe-gold uppercase tracking-tighter">Steppe</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">Horizon</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 px-4 mt-20 md:mt-0 flex-1 overflow-y-auto">
          <NavItem active={activeTab === 'home'} icon={<Compass />} label="Explore" onClick={() => navigate('home')} />
          <NavItem active={activeTab === 'ai'} icon={<Sparkles />} label="Nomad AI" onClick={() => navigate('ai')} />
          <NavItem active={activeTab === 'routes'} icon={<MapIcon />} label="Routes" onClick={() => navigate('routes')} />
          <NavItem active={activeTab === 'phrases'} icon={<BookOpen />} label="Phrasebook" onClick={() => navigate('phrases')} />
          <NavItem active={activeTab === 'festivals'} icon={<Calendar />} label="Festivals" onClick={() => navigate('festivals')} />
          <NavItem active={activeTab === 'transport'} icon={<Car className="w-5 h-5" />} label="Transport" onClick={() => navigate('transport')} />
          <NavItem active={activeTab === 'expenses'} icon={<Wallet />} label="Expenses" onClick={() => navigate('expenses')} />
          <NavItem active={activeTab === 'currency'} icon={<ArrowRightLeft className="w-5 h-5" />} label="Converter" onClick={() => navigate('currency')} />
          <NavItem active={activeTab === 'etiquette'} icon={<Info />} label="Etiquette" onClick={() => navigate('etiquette')} />
          <NavItem active={activeTab === 'emergency'} icon={<HeartPulse />} label="Emergency" onClick={() => navigate('emergency')} />
        </div>

        <div className="mt-auto p-8 opacity-40 text-[10px] uppercase tracking-widest text-center">
          Nomad Spirit v1.0
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto h-screen p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl mx-auto pb-20"
          >
            {activeTab === 'home' && <Home onNavigate={navigate} />}
            {activeTab === 'routes' && <RoutesList />}
            {activeTab === 'phrases' && <Phrasebook />}
            {activeTab === 'expenses' && <ExpenseTracker />}
            {activeTab === 'etiquette' && <Etiquette />}
            {activeTab === 'emergency' && <Emergency />}
            {activeTab === 'festivals' && <Festivals />}
            {activeTab === 'transport' && <Transportation />}
            {activeTab === 'ai' && <NomadAI />}
            {activeTab === 'currency' && <CurrencyConverter />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavItem({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-500 w-full text-left group relative
        ${active ? 'text-white' : 'hover:bg-white/5 text-white/40'}
      `}
    >
      {active && (
        <motion.div 
          layoutId="nav-active"
          className="absolute inset-0 bg-white/10 rounded-xl border-l-2 border-steppe-gold"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className={`relative z-10 ${active ? 'text-steppe-gold' : 'text-white/20 group-hover:text-steppe-gold group-hover:scale-110'} transition-all`}>
        {icon}
      </span>
      <span className={`relative z-10 font-bold text-xs uppercase tracking-[0.2em] ${active ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>{label}</span>
      {active && <ChevronRight className="w-4 h-4 ml-auto opacity-50 relative z-10" />}
    </button>
  );
}
