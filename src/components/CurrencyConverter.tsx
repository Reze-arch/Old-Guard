import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Repeat, DollarSign, TrendingUp, Info, ArrowRightLeft } from 'lucide-react';

const EXCHANGE_RATE = 3450; // 1 USD = 3450 MNT

export default function CurrencyConverter() {
  const [mnt, setMnt] = useState<string>('');
  const [usd, setUsd] = useState<string>('');
  const [lastChanged, setLastChanged] = useState<'mnt' | 'usd'>('usd');

  const handleMntChange = (val: string) => {
    setMnt(val);
    setLastChanged('mnt');
    if (val === '') {
      setUsd('');
    } else {
      const converted = parseFloat(val) / EXCHANGE_RATE;
      setUsd(converted.toFixed(2));
    }
  };

  const handleUsdChange = (val: string) => {
    setUsd(val);
    setLastChanged('usd');
    if (val === '') {
      setMnt('');
    } else {
      const converted = parseFloat(val) * EXCHANGE_RATE;
      setMnt(Math.round(converted).toString());
    }
  };

  return (
    <div className="space-y-12 pb-12">
      <div>
        <h1 className="text-5xl font-bold mb-2">Currency Converter</h1>
        <p className="text-nomad-ink/60 max-w-lg text-lg">
          Easily calculate Costs in Mongolian Tögrög (₮) and US Dollars ($). 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="nomad-card p-10 bg-nomad-white flex flex-col gap-8 shadow-xl shadow-nomad-sky/5"
        >
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-nomad-sky flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              US Dollars (USD)
            </label>
            <div className="relative group">
              <input 
                type="number" 
                value={usd}
                onChange={(e) => handleUsdChange(e.target.value)}
                placeholder="0.00"
                className="w-full bg-nomad-sand/50 rounded-[28px] px-8 py-6 text-4xl font-serif font-bold text-nomad-steppe outline-none focus:ring-4 focus:ring-nomad-sky/10 border border-nomad-sky/5 transition-all text-center"
              />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-nomad-sky/30 font-serif">$</div>
            </div>
          </div>

          <div className="flex justify-center -my-4 relative z-10">
            <div className="w-14 h-14 bg-nomad-sky text-white rounded-full flex items-center justify-center shadow-lg shadow-nomad-sky/30">
              <ArrowRightLeft className="rotate-90 md:rotate-0" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-nomad-sky flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Mongolian Tögrög (MNT)
            </label>
            <div className="relative group">
              <input 
                type="number" 
                value={mnt}
                onChange={(e) => handleMntChange(e.target.value)}
                placeholder="0"
                className="w-full bg-nomad-sand/50 rounded-[28px] px-8 py-6 text-4xl font-serif font-bold text-nomad-steppe outline-none focus:ring-4 focus:ring-nomad-sky/10 border border-nomad-sky/5 transition-all text-center"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-nomad-sky/30 font-serif">₮</div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="nomad-card bg-nomad-steppe text-white p-8 overflow-visible relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-nomad-gold rounded-full flex items-center justify-center shadow-lg transform rotate-12">
               <span className="text-xs font-black text-nomad-steppe uppercase">Best</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-nomad-sky" />
              Current Exchange Rate
            </h3>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-4xl font-serif font-bold tracking-tight">1 USD = {EXCHANGE_RATE.toLocaleString()} ₮</p>
              <p className="text-white/50 text-xs mt-3 uppercase font-bold tracking-widest italic">Official rate fluctuates daily. Rates are provided for estimation purposes.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 5, 10, 50, 100].map(val => (
              <button 
                key={val}
                onClick={() => handleUsdChange(val.toString())}
                className="nomad-card p-4 hover:bg-nomad-sky hover:text-white transition-all text-center font-bold"
              >
                ${val} → {(val * EXCHANGE_RATE).toLocaleString()}₮
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="nomad-card bg-nomad-fire/5 border-nomad-fire/20 p-8">
         <h4 className="text-nomad-fire font-bold flex items-center gap-2 mb-4">
           <Repeat className="w-5 h-5" />
           Travel Tip: Cash is King
         </h4>
         <p className="text-nomad-ink/80 text-lg leading-relaxed italic">
           "In Ulaanbaatar, cards are widely accepted. However, as soon as you head into the countryside (the Steppes), you will need physical MNT. Most nomadic host families and small town shops do not accept cards or USD. Always carry a mix of small and large denominations of Tögrög."
         </p>
      </div>
    </div>
  );
}
