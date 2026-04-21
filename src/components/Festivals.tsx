import { useState } from 'react';
import { FESTIVALS } from '../constants';
import { Calendar, MapPin, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Festivals() {
  const [selectedDate, setSelectedDate] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAiFestivals = async () => {
    if (!selectedDate) return;
    setIsLoading(true);
    setAiSuggestions(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `I am traveling to Mongolia in ${selectedDate}. What local festivals, cultural events, or seasonal highlights should I look out for? Please provide 3-4 specific suggestions in a concise, friendly travel guide format. Mention locations if possible. Use markdown.`,
      });
      setAiSuggestions(response.text || "No suggestions available for this date.");
    } catch (error) {
      console.error(error);
      setAiSuggestions("Sorry, I couldn't fetch recommendations right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-2">Festivals & Events</h1>
        <p className="text-nomad-ink/60 max-w-lg">
          The Mongolian calendar is marked by vibrant nomadic celebrations. Plan your visit around these legendary events.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Annual Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FESTIVALS.map((fest) => (
            <div key={fest.id} className="nomad-card p-6 border-nomad-earth/10 flex flex-col justify-between hover:border-nomad-earth/30 transition-all">
              <div>
                <span className="nomad-badge mb-4 block w-fit">{fest.date}</span>
                <h3 className="text-2xl font-bold font-serif mb-2">{fest.name}</h3>
                <div className="flex items-center gap-1 text-nomad-ink/40 text-xs font-bold uppercase tracking-widest mb-4">
                  <MapPin className="w-3 h-3" />
                  {fest.location}
                </div>
                <p className="text-nomad-ink/70 text-sm leading-relaxed mb-6">{fest.description}</p>
              </div>
              <button className="text-nomad-earth font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="nomad-card bg-nomad-steppe text-white p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-nomad-sky" />
              AI Travel Planner
            </h2>
            <p className="text-white/70 mb-8 max-w-md">
              Wondering what's happening during your specific travel dates? Tell us when you're visiting and we'll find the best events for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="e.g. July 2026 or Early Autumn" 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-3 outline-none focus:ring-4 focus:ring-nomad-sky/30 flex-1 placeholder:text-white/30 text-white"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <button 
                onClick={getAiFestivals}
                disabled={isLoading || !selectedDate}
                className="bg-nomad-sky text-white font-bold px-8 py-3 rounded-2xl hover:bg-white hover:text-nomad-sky transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Get Suggestions'}
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-[200px] bg-white/5 rounded-[32px] p-6 border border-white/10 backdrop-blur-sm">
            {!aiSuggestions && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <Calendar className="w-12 h-12 mb-2" />
                <p className="text-sm">Enter your dates to see recommendations</p>
              </div>
            )}
            
            {isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <Loader2 className="w-12 h-12 animate-spin text-nomad-sky" />
                <p className="animate-pulse">Consulting the Eternal Blue Sky...</p>
              </div>
            )}

            {aiSuggestions && (
              <div className="prose prose-invert prose-sm max-w-none prose-p:text-white/80 prose-headings:text-nomad-sky">
                {aiSuggestions.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
