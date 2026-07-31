'use me';
'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import { Bot, Send, Sparkles, X, User, MessageSquare, BookOpen, Lightbulb } from 'lucide-react';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Namaste! I am We_Win23 AI Tutor. Ask me any doubt in Quantitative Aptitude, Reasoning, English Grammar, or 2020-2026 Current Affairs!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userMsgText = inputQuery.trim();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let responseText = `Here is the step-by-step AI explanation for "${userMsgText}":\n\n1. Formula: Apply standard exam logic.\n2. Step: Break down values.\n3. Result: Verified option matched.`;

      if (userMsgText.toLowerCase().includes('profit') || userMsgText.toLowerCase().includes('loss')) {
        responseText = `Profit & Loss Solution:\n• Profit % = (Selling Price - Cost Price) / Cost Price × 100\n• Discount % = (Marked Price - Selling Price) / Marked Price × 100.\nAlways assume CP = 100x for 20-second shortcuts!`;
      } else if (userMsgText.toLowerCase().includes('isro') || userMsgText.toLowerCase().includes('space')) {
        responseText = `ISRO Current Affairs (2020-2026):\n• Chandrayaan-3: Soft landed on Moon's South Pole on Aug 23, 2023 (Lander: Vikram, Rover: Pragyan).\n• Aditya-L1: Solar observation spacecraft placed at Lagrange Point 1.`;
      } else if (userMsgText.toLowerCase().includes('study') || userMsgText.toLowerCase().includes('plan')) {
        responseText = `Personalized 7-Day Study Plan:\n• Day 1-2: Quantitative Aptitude (Percentages, Profit & Loss).\n• Day 3-4: Logical Reasoning (Syllogism, Coding-Decoding).\n• Day 5: English Grammar & Error Spotting.\n• Day 6: Current Affairs (2020-2026 ISRO & Budget).\n• Day 7: Full 80-Question Proctored Mock Test!`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                <span>We_Win23 AI Tutor</span>
                <Sparkles className="w-3.5 h-3.5 text-win-400" />
              </h3>
              <p className="text-[10px] text-slate-400">Live Doubt Solver & Study Planner</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conversation Log */}
        <div className="flex-1 overflow-y-auto space-y-3 p-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-win-600 text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">
                  🤖
                </div>
              )}

              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-win-600 text-white font-semibold rounded-br-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none whitespace-pre-line'
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-[9px] opacity-60 block text-right">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
              <div className="w-2 h-2 rounded-full bg-win-400 animate-ping" />
              <span>We_Win23 AI is solving your query...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="pt-2 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask AI a question or doubt..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-win-500"
          />
          <button
            type="submit"
            className="p-3 rounded-xl bg-win-600 hover:bg-win-500 text-white shadow-lg flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
