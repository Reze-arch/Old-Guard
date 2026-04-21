import { Tab } from '../App';
import { ROUTES } from '../constants';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <div className="space-y-20">
      <section className="relative h-[600px] rounded-[48px] overflow-hidden group">
        <img 
          src="https://picsum.photos/seed/mongolia-luxury/1200/800" 
          alt="Mongolian Horizon" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steppe-dark via-steppe-dark/40 to-transparent flex flex-col justify-end p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl text-steppe-paper font-serif font-black mb-6 tracking-tighter leading-[0.85] uppercase">
              Beyond the <br /> <span className="text-steppe-gold italic font-light lowercase">Horizon</span>
            </h1>
            <p className="text-steppe-paper/60 max-w-lg mb-10 text-xl font-light leading-relaxed font-serif italic">
              "To see a world in a grain of sand and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour."
            </p>
            <button 
              onClick={() => onNavigate('routes')}
              className="nomad-btn-primary w-fit text-base tracking-[0.3em]"
            >
              Enter the Steppe
            </button>
          </motion.div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="nomad-card group bg-steppe-dark flex flex-col justify-between min-h-[320px]">
          <div>
            <h2 className="text-4xl mb-6 text-steppe-gold">Cultural <br />Precision</h2>
            <p className="text-steppe-paper/40 mb-8 font-light italic leading-relaxed">"A nomad knows the stars better than the streets." Explore the linguistics and heritage of the eternal blue sky.</p>
          </div>
          <button 
            onClick={() => onNavigate('phrases')}
            className="nomad-btn-secondary w-full group-hover:bg-steppe-gold group-hover:text-steppe-dark group-hover:border-transparent transition-all"
          >
            Open Archives
          </button>
        </div>

        <div className="nomad-card group bg-steppe-dark flex flex-col justify-between min-h-[320px]">
          <div>
            <h2 className="text-4xl mb-6 text-steppe-paper">Ancestral <br />Heritage</h2>
            <p className="text-steppe-paper/40 mb-8 font-light leading-relaxed">Deep dive into the sophisticated social protocols and hospitality traditions of the northern nomads.</p>
          </div>
          <button 
            onClick={() => onNavigate('etiquette')}
            className="nomad-btn-secondary w-full group-hover:bg-steppe-paper group-hover:text-steppe-dark group-hover:border-transparent transition-all"
          >
            Access Protocols
          </button>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
          <h2 className="text-5xl text-steppe-paper font-serif uppercase tracking-tight">Expedition Routes</h2>
          <button 
             onClick={() => onNavigate('routes')}
            className="text-steppe-gold font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:translate-x-2 transition-all"
          >
            View Portfolios
            <div className="w-10 h-10 rounded-full bg-steppe-gold/10 flex items-center justify-center border border-steppe-gold/20">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ROUTES.slice(0, 3).map((route) => (
            <div key={route.id} className="group cursor-pointer" onClick={() => onNavigate('routes')}>
              <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steppe-dark via-steppe-dark/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-steppe-paper font-serif font-bold text-2xl uppercase tracking-tighter">{route.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 px-2">
                <span className="nomad-badge">{route.duration}</span>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{route.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.02] backdrop-blur-3xl rounded-[64px] p-12 md:p-24 border border-white/5 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-steppe-gold/20 to-transparent" />
        <div className="flex-1 space-y-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-none">Logistical <br />Command</h2>
          <p className="text-xl text-white/40 leading-relaxed font-light font-serif italic">
            "Mastering the geography is the first step to mastering your freedom." Secure private transportation, navigate the rail systems, and command your passage across the high steppes.
          </p>
          <button 
            onClick={() => onNavigate('transport')}
            className="nomad-btn-primary w-fit group pr-14"
          >
            Command Logistics
            <ChevronRight className="absolute right-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="flex-1 w-full max-w-md relative z-10">
          <div className="aspect-[4/5] bg-steppe-dark rounded-[48px] shadow-2xl p-4 rotate-6 border border-white/10 transform hover:rotate-0 transition-all duration-1000 overflow-hidden grayscale hover:grayscale-0">
            <img 
              src="https://picsum.photos/seed/expedition/600/800" 
              alt="Expedition Vehicle" 
              className="w-full h-full object-cover rounded-[36px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
