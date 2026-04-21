import { EMERGENCY_CONTACTS } from '../constants';
import { Phone, ShieldAlert, HeartPulse, HelpCircle, Activity } from 'lucide-react';

export default function Emergency() {
  const firstAidTips = [
    { 
      title: 'Heatstroke', 
      content: 'Move to shade, loosen clothing, and provide small sips of water. Apply cool, wet cloths to the skin.',
      icon: <Activity className="w-5 h-5" />
    },
    { 
      title: 'High Altitude', 
      content: 'Descend immediately if experiencing severe headache or confusion. Stay hydrated and avoid alcohol.',
      icon: <Activity className="w-5 h-5" />
    },
    { 
      title: 'Minor Wounds', 
      content: 'Clean with safe water, apply antiseptic, and keep covered. In the steppe, dust can cause quick infection.',
      icon: <Activity className="w-5 h-5" />
    },
    { 
      title: 'Animal Bites', 
      content: 'Clean thoroughly and seek medical attention immediately. Rabies is a consideration in remote areas.',
      icon: <Activity className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-2">Safety & First Aid</h1>
        <p className="text-nomad-ink/60 max-w-lg">
          Essential contacts and basic medical advice for travelers in Mongolia. Always carry a physical map and a first-aid kit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Phone className="w-6 h-6 text-red-500" />
            Emergency Numbers
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <div key={idx} className="nomad-card p-6 flex items-center justify-between hover:border-red-200 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">{contact.name}</h4>
                  <p className="text-3xl font-serif font-bold text-nomad-ink">{contact.number}</p>
                </div>
                <button className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
                  <Phone className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
          <div className="nomad-card bg-orange-50 border-orange-100">
             <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
               <ShieldAlert className="w-5 h-5" />
               Ulaanbaatar SOS Medica
             </h3>
             <p className="text-sm text-orange-700/80 mb-2">International standard hospital in the capital.</p>
             <p className="font-bold text-orange-900">+976 11 464325</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-nomad-steppe">
            <HeartPulse className="w-6 h-6 text-nomad-sky" />
            First Aid Basics
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {firstAidTips.map((tip, idx) => (
              <div key={idx} className="nomad-card p-6 flex flex-col gap-2 group">
                <div className="flex items-center gap-2 text-nomad-sky mb-1">
                  <div className="p-2 bg-nomad-sky/5 rounded-xl group-hover:bg-nomad-sky group-hover:text-white transition-all">
                    {tip.icon}
                  </div>
                  <h4 className="font-bold uppercase tracking-widest text-xs">{tip.title}</h4>
                </div>
                <p className="text-nomad-ink/70 text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
          <div className="nomad-card bg-nomad-steppe text-white p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             <h3 className="font-bold mb-3 flex items-center gap-2 text-xl relative z-10">
               <HelpCircle className="w-6 h-6 text-nomad-sky" />
               Travel Insurance
             </h3>
             <p className="text-white/80 text-base italic leading-relaxed relative z-10">
               "Ensure your insurance covers <span className="text-white font-bold">medical evacuation</span> via helicopter. In remote areas like the Altai, this is the only way to get to Ulaanbaatar rapidly."
             </p>
          </div>
        </section>
      </div>
    </div>
  );
}
