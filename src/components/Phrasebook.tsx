import { useState } from 'react';
import { PHRASES } from '../constants';
import { Volume2, Search, BookOpen } from 'lucide-react';

export default function Phrasebook() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(PHRASES.map(p => p.category))];

  const filteredPhrases = PHRASES.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.english.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.mongolian.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-2">Phrasebook</h1>
        <p className="text-nomad-ink/60 max-w-lg">
          Master the local tongue. While many speak some English in the capital, a few words in the countryside will open many doors.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nomad-ink/30 group-focus-within:text-nomad-sky transition-colors" />
          <input 
            type="text" 
            placeholder="Search phrases..." 
            className="w-full bg-nomad-white rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-4 focus:ring-nomad-sky/10 border border-black/5 transition-all text-nomad-ink"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto px-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all whitespace-nowrap
                ${activeCategory === cat ? 'bg-nomad-sky text-white shadow-lg shadow-nomad-sky/20' : 'bg-nomad-white text-nomad-ink/60 hover:bg-nomad-sky/5 border border-black/5'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPhrases.map((phrase, idx) => (
          <div key={idx} className="nomad-card p-8 flex flex-col gap-3 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="nomad-badge">{phrase.category}</span>
              <button 
                className="p-3 bg-nomad-sand rounded-[18px] text-nomad-sky hover:bg-nomad-sky hover:text-white hover:scale-110 transition-all shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Pronunciation: ${phrase.pronunciation}`);
                }}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-4xl font-bold font-serif text-nomad-steppe leading-tight">{phrase.mongolian}</h3>
            <p className="text-nomad-ink/40 italic text-sm tracking-wide font-light">{phrase.pronunciation}</p>
            <div className="h-px bg-nomad-sky/10 w-full my-1" />
            <p className="text-xl text-nomad-ink/80 font-medium tracking-tight">{phrase.english}</p>
          </div>
        ))}
      </div>

      {filteredPhrases.length === 0 && (
        <div className="text-center py-20 opacity-40">
           <BookOpen className="w-12 h-12 mx-auto mb-4" />
           <p>No phrases found for your search.</p>
        </div>
      )}
    </div>
  );
}
