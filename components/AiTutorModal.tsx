'use me';
'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import { Bot, Send, X, Sparkles, User, Globe, MessageSquare } from 'lucide-react';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: language === 'hi'
        ? 'नमस्ते प्रशांत! मैं आपका वी विन (We Win) एआई परीक्षा ट्यूटर हूँ। आप मुझसे एसएससी, बैंकिंग, यूपीएससी, एमपीएससी या एप्टीट्यूड के किसी भी विषय पर प्रश्न पूछ सकते हैं।'
        : language === 'mr'
        ? 'नमस्कार प्रशांत! मी तुमचा वी विन (We Win) एआय परीक्षा ट्युटर आहे. एमपीएससी, पोलीस भरती, एसएससी किंवा गणित/बुद्धिमत्तेच्या कोणत्याही शंकेचे निरसन मी करतो.'
        : 'Hello Prashant! I am your We Win AI Exam Tutor. Ask me any doubt regarding SSC, Banking, UPSC, MPSC, Quant shortcuts, or Current Affairs (2020-2026).'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let aiReply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('isro') || lower.includes('chandrayaan') || lower.includes('current affairs')) {
        aiReply = language === 'mr'
          ? 'इस्रोच्या महत्त्वाच्या घडामोडी (२०२०-२०२६):\n१. चंद्रयान-३: २३ ऑगस्ट २०२३ रोजी चंद्राच्या दक्षिण धु्रवावर यशस्वी उतरले.\n२. आदित्य-L१: सूर्य अभ्यासासाठी प्रक्षेपित.\n३. गगनयान: भारताचे पहिले मानवी अंतरिक्ष अभियान.'
          : language === 'hi'
          ? 'इसरो (ISRO) की मुख्य घटनाएं (2020-2026):\n1. चंद्रयान-3: 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव पर उतरा।\n2. आदित्य-L1: सूर्य का अध्ययन करने वाला मिशन।\n3. गगनयान: भारत का पहला मानव अंतरिक्ष मिशन।'
          : 'Key ISRO Highlights (2020-2026):\n1. Chandrayaan-3: Soft landed on lunar South Pole on Aug 23, 2023.\n2. Aditya-L1: Solar observation satellite deployed at L1 lagrange point.\n3. Gaganyaan: India\'s upcoming crewed orbital spacecraft mission.';
      } else if (lower.includes('profit') || lower.includes('loss') || lower.includes('quant')) {
        aiReply = language === 'mr'
          ? 'नफा आणि तोटा शॉर्टकट सूत्र:\n- नफा % = (नफा / खरेदी किंमत) × १००\n- जर विक्री किमतीवर तोटा झाला असेल तर: CP = SP × (100 / (100 - Loss%)).'
          : 'Profit & Loss Quick Shortcut Formula:\n- Profit % = (Profit / Cost Price) * 100\n- Equivalent Discount formula: D_net = A + B - (A * B / 100).';
      } else {
        aiReply = language === 'mr'
          ? 'तुमच्या या शंकेबाबत थोडक्यात: नियमित सराव टेस्ट सोडवून वेळ व्यवस्थापन सुधारा. वी विन व्यासपीठावर तुमच्या कमकुवत घटकांवर दररोज १० प्रश्न सोडवा.'
          : language === 'hi'
          ? 'आपकी इस शंका के लिए सुझाव: नियमित मॉक टेस्ट देकर अपना समय प्रबंधन सुधारें। We Win पर अपने कमजोर विषयों का नियमित अभ्यास करें।'
          : 'Great query! To master this topic, attempt 2 topic quizzes daily on We Win and review the step-by-step AI solutions after every test.';
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-win-600 text-white flex items-center justify-center shadow-lg shadow-win-500/30">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>We Win AI Exam Tutor</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                  ONLINE
                </span>
              </h3>
              <p className="text-xs text-slate-400">Supports English, Hindi (हिंदी), and Marathi (मराठी)</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 p-2">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-win-600 text-white'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`p-3.5 rounded-2xl max-w-md text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                m.sender === 'user'
                  ? 'bg-win-600 text-white rounded-tr-none'
                  : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-400 italic">
              <span className="w-4 h-4 border-2 border-win-500 border-t-transparent rounded-full animate-spin" />
              <span>We Win AI is generating solution...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="flex items-center gap-2 pt-2 border-t border-slate-800">
          <input
            type="text"
            placeholder={
              language === 'hi'
                ? 'अपनी शंका यहाँ पूछें...'
                : language === 'mr'
                ? 'तुमची शंका विचाराल...'
                : 'Ask doubt or formula shortcut...'
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-win-500"
          />
          <button
            type="submit"
            className="p-3 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold shadow-lg shadow-win-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
