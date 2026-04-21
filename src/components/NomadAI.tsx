import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Sparkles, XCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function NomadAI() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Sain baina uu! (Hello!) I am Horizon AI. How can I assist your expedition across the Mongolian wilderness today? Ask me about logistics, traditions, or hidden paths." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are the "Horizon AI", the elite intelligence core of Steppe Horizon. 
          Your tone is sophisticated, authoritative yet respectful, and deeply knowledgeable about Mongolian geography, culture, and high-end logistics.
          Help users with precise itineraries, strategic packing, cultural nuances, and logistical command.
          Always encourage sustainable and respectful travel. 
          Keep your answers concise, evocative, and polished. Use markdown for better formatting.`
        }
      });

      const modelResponse = response.text || "I'm sorry, the winds of the steppe have clouded my vision. Could you repeat that?";
      setMessages(prev => [...prev, { role: 'model', content: modelResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "The connection to the spirits of the steppe was lost. Please check your signal and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
      <div className="mb-10 text-center">
        <h1 className="text-6xl font-serif font-black mb-3 flex items-center justify-center gap-6 uppercase tracking-tighter">
          Horizon AI
          <div className="nomad-badge bg-steppe-gold text-steppe-dark">Intelligence</div>
        </h1>
        <p className="text-white/40 italic font-serif">Deep intelligence for the eternal blue sky.</p>
      </div>

      <div className="flex-1 nomad-card bg-steppe-dark border-white/5 flex flex-col overflow-hidden p-0 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
        
        {/* Chat Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth"
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 shadow-lg ${
                  m.role === 'user' ? 'bg-white/10 text-white border border-white/10' : 'bg-steppe-gold text-steppe-dark'
                }`}>
                  {m.role === 'user' ? <User size={24} /> : <Bot size={24} />}
                </div>
                <div className={`p-6 rounded-[32px] shadow-2xl ${
                  m.role === 'user' 
                    ? 'bg-steppe-gold text-steppe-dark rounded-tr-none' 
                    : 'bg-white/5 text-steppe-paper rounded-tl-none border border-white/5 backdrop-blur-md'
                }`}>
                  <div className={`prose prose-sm max-w-none prose-p:leading-relaxed ${
                    m.role === 'user' ? 'prose-headings:text-steppe-dark' : 'prose-headings:text-steppe-gold text-white/80'
                  }`}>
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-4 items-center text-steppe-gold">
                <div className="w-12 h-12 rounded-[20px] bg-steppe-gold/10 flex items-center justify-center border border-steppe-gold/20">
                  <Loader2 className="animate-spin text-steppe-gold" size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Synchronizing with the sky...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8 bg-black/40 backdrop-blur-3xl border-t border-white/5">
          <div className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-[32px] p-2 pl-8 focus-within:ring-2 focus-within:ring-steppe-gold/20 transition-all">
            <input 
              type="text" 
              placeholder="Command the AI..." 
              className="flex-1 bg-transparent outline-none py-3 text-steppe-paper placeholder:text-white/10 font-serif italic text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-14 h-14 bg-steppe-gold text-steppe-dark rounded-[24px] flex items-center justify-center hover:bg-steppe-paper transition-all shadow-lg shadow-steppe-gold/20 disabled:opacity-50"
            >
              <Send size={24} strokeWidth={2.5} />
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-10">
             {["Packing Strategy", "Heritage Etiquette", "Logistic Assets"].map(label => (
               <button 
                 key={label}
                 onClick={() => setInput(`Give me a detailed guide on: ${label}`)}
                 className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] hover:text-steppe-gold transition-all"
               >
                 {label}
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
