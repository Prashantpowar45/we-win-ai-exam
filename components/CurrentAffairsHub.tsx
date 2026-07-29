'use me';
'use client';

import React, { useState } from 'react';
import { CURRENT_AFFAIRS_2020_2026 } from '@/lib/currentAffairsData';
import { Language, CurrentAffairsItem } from '@/lib/types';
import { Globe, Calendar, Sparkles, BookOpen, CheckCircle2, Play, ChevronRight, Search } from 'lucide-react';

interface CurrentAffairsHubProps {
  language: Language;
  onStartTest: (testId?: string) => void;
}

export const CurrentAffairsHub: React.FC<CurrentAffairsHubProps> = ({
  language,
  onStartTest
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeQuizItem, setActiveQuizItem] = useState<CurrentAffairsItem | null>(null);

  const filteredItems = CURRENT_AFFAIRS_2020_2026.filter((ca) => {
    if (selectedCategory !== 'all' && ca.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="current-affairs" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-extrabold">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>Dynamic Current Affairs Engine (2020–2026)</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Daily Current Affairs & <span className="gradient-text">GK Practice</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Updated daily with ISRO space missions, Union Budget, Defense news, Economy, and Maharashtra GK.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {['all', 'ISRO & Space', 'Economy & Budget', 'Defense', 'Maharashtra GK'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
                selectedCategory === cat
                  ? 'bg-win-600 border-win-500 text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Daily News' : cat}
            </button>
          ))}
        </div>

        {/* Current Affairs Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-win-500/50 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-win-500/10 text-win-300 border border-win-500/20">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-win-300 transition-colors">
                  {item.title[language] || item.title.en}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.summary[language] || item.summary.en}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveQuizItem(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-win-600 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:bg-win-600"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Solve Attached MCQ</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Quiz Modal Overlay */}
      {activeQuizItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <button onClick={() => setActiveQuizItem(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800">
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {activeQuizItem.category} • Practice MCQ
              </span>
              <h3 className="text-lg font-bold text-white">
                {activeQuizItem.relatedQuestion.questionText[language] || activeQuizItem.relatedQuestion.questionText.en}
              </h3>
            </div>

            <div className="space-y-2">
              {(activeQuizItem.relatedQuestion.options[language] || activeQuizItem.relatedQuestion.options.en).map((opt, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between ${
                    idx === activeQuizItem.relatedQuestion.correctOptionIndex
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <span>{String.fromCharCode(65 + idx)}. {opt}</span>
                  {idx === activeQuizItem.relatedQuestion.correctOptionIndex && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-win-400 block">AI Explanation:</span>
              <p>{activeQuizItem.relatedQuestion.explanation[language] || activeQuizItem.relatedQuestion.explanation.en}</p>
            </div>

            <button
              onClick={() => { setActiveQuizItem(null); onStartTest(); }}
              className="w-full py-3 rounded-xl bg-win-600 text-white font-bold text-xs"
            >
              Start Full 80-Question Mock Test
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
