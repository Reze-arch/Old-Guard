import { ETIQUETTE } from '../constants';
import { Info, MessageCircle, Heart, Wind } from 'lucide-react';

export default function Etiquette() {
  const iconMap: Record<string, any> = {
    'Ger': <Wind className="w-6 h-6" />,
    'Food': <Heart className="w-6 h-6" />,
    'Nature': <Info className="w-6 h-6" />,
    'Social': <MessageCircle className="w-6 h-6" />
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-2">Cultural Etiquette</h1>
        <p className="text-nomad-ink/60 max-w-lg">
          Mongolian culture is built on deep respect and hospitality. Understanding these nuances will enrich your experience with host families.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ETIQUETTE.map((item, idx) => (
          <div key={idx} className="nomad-card p-8 border-l-4 border-nomad-sky flex flex-col gap-4 group">
            <div className="flex items-center gap-3">
              <div className="p-4 bg-nomad-sky/5 rounded-[24px] text-nomad-sky group-hover:bg-nomad-sky group-hover:text-white transition-all duration-300">
                {iconMap[item.category] || <Info />}
              </div>
              <span className="nomad-badge">{item.category}</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-nomad-steppe">{item.title}</h3>
            <p className="text-nomad-ink/70 leading-relaxed text-lg font-light">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="nomad-card bg-nomad-sky text-white p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
          <MessageCircle className="w-8 h-8 text-white/50" />
          Pro Tip for Navigating the Steppe
        </h2>
        <p className="text-white/90 italic text-xl leading-relaxed relative z-10 font-light">
          "When approaching a nomadic family's Ger, it is custom to yell <span className="font-bold text-white tracking-widest uppercase">'Nokhoi khor!'</span> which means 'Hold the dog!'. This alerts the family to your arrival and ensures their guard dogs are handled before you approach the door."
        </p>
      </div>
    </div>
  );
}
