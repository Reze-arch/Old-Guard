import { motion } from 'motion/react';
import { ROUTES } from '../constants';
import { MapPin, ArrowRight, Download } from 'lucide-react';

export default function RoutesList() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-5xl font-bold mb-2">Curated Routes</h1>
          <p className="text-nomad-ink/60 max-w-lg">
            Navigating the vast Mongolian wilderness. These routes are optimized for local transport, horse treks, and 4x4 vehicles.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="nomad-btn-secondary py-2 px-4 text-sm">
            <Download className="w-4 h-4" />
            Download maps for offline use
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {ROUTES.map((route, idx) => (
          <motion.div 
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col lg:flex-row gap-8 group"
          >
            <div className="flex-1">
              <div className="aspect-[16/9] rounded-[40px] overflow-hidden shadow-xl shadow-nomad-earth/10 border border-black/5">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                 <span className="nomad-badge">{route.duration}</span>
                 <span className="nomad-badge bg-nomad-clay/10 text-nomad-clay">{route.distance}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{route.name}</h2>
              <p className="text-nomad-ink/70 mb-6 text-lg leading-relaxed">{route.description}</p>
              
              <div className="space-y-4 mb-8">
                <h3 className="uppercase tracking-widest text-[10px] font-bold text-nomad-earth">Route Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {route.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-sm text-nomad-ink/80">
                      <div className="w-1.5 h-1.5 bg-nomad-earth rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <button className="nomad-btn-primary w-fit group-hover:gap-4">
                View detailed itinerary 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="nomad-card bg-nomad-sand border-dashed border-2 border-nomad-earth/30 text-center py-20">
         <MapPin className="w-12 h-12 text-nomad-earth mx-auto mb-4 opacity-50" />
         <h2 className="text-2xl font-bold mb-2">Build your own route?</h2>
         <p className="text-nomad-ink/60 mb-6 max-w-xs mx-auto">Custom routes are available through our local nomad network.</p>
         <button className="nomad-btn-secondary mx-auto">Contact a Guide</button>
      </div>
    </div>
  );
}
