import { motion } from 'motion/react';
import { TRANSPORT_OPTIONS } from '../constants';
import { Bus, Train, Car, UserCheck, Clock, Wallet, Info } from 'lucide-react';

export default function Transportation() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Intercity Bus': return <Bus className="w-10 h-10" />;
      case 'Train': return <Train className="w-10 h-10" />;
      case 'Private 4x4 & Driver': return <Car className="w-10 h-10" />;
      case 'Local Guides': return <UserCheck className="w-10 h-10" />;
      default: return <Info className="w-10 h-10" />;
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <div className="relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Nomad Transport</h1>
        <p className="text-nomad-ink/60 max-w-2xl text-lg leading-relaxed">
          Traversing the vast Mongolian steppes requires careful planning. From the rhythmic clatter of the Trans-Mongolian railway to the rugged spirit of 4x4 expeditions.
        </p>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none -translate-y-4">
          <Car className="w-full h-full text-nomad-sky" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {TRANSPORT_OPTIONS.map((option, idx) => (
          <motion.div 
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="nomad-card group"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4 flex flex-col items-center justify-center p-6 bg-nomad-sand rounded-[32px] text-nomad-sky border border-nomad-sky/10 group-hover:bg-nomad-sky group-hover:text-white transition-all duration-500">
                {getIcon(option.type)}
                <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-black">{option.type}</span>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{option.title}</h2>
                  <p className="text-nomad-ink/70 leading-relaxed italic">{option.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-black/5">
                    <div className="p-2 bg-nomad-sand rounded-xl text-nomad-sky shrink-0">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-black text-nomad-sky mb-1">Estimated Costs</h4>
                      <p className="text-sm font-medium">{option.costs}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-black/5">
                    <div className="p-2 bg-nomad-sand rounded-xl text-nomad-sky shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-black text-nomad-sky mb-1">Travel Times</h4>
                      <p className="text-sm font-medium">{option.times}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-nomad-steppe/5 rounded-2xl border-l-4 border-nomad-steppe">
                   <h4 className="text-xs font-bold mb-2 flex items-center gap-2">
                     <Info className="w-4 h-4 text-nomad-steppe" />
                     Booking Advice
                   </h4>
                   <p className="text-sm text-nomad-ink/80 leading-relaxed">
                     {option.bookingAdvice}
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="nomad-card bg-nomad-steppe text-white p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 ornament-border"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Driving in Mongolia yourself?</h2>
          <p className="max-w-xl mx-auto mb-8 opacity-70">
            Wait! Driving off-road in the steppes is extremely challenging. There are no paved roads in 70% of the country and no signs. We highly recommend hiring a local driver who knows the tracks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-nomad-sky text-white px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-nomad-sky transition-all shadow-lg">Find a Trusted Driver</button>
            <button className="bg-white/10 border-2 border-white/20 text-white px-8 py-3 rounded-2xl font-bold hover:bg-white/20 transition-all">Download Offline GPS Guides</button>
          </div>
        </div>
      </div>
    </div>
  );
}
