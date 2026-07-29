'use me';
'use client';

import React, { useState } from 'react';
import { EXAM_CATEGORIES, SAMPLE_MOCK_TESTS } from '@/lib/mockExamData';
import { Language } from '@/lib/types';
import { Search, Filter, ShieldCheck, Building2, Train, GraduationCap, Compass, BrainCircuit, Globe, Play, ChevronRight } from 'lucide-react';

interface ExamCategoriesProps {
  language: Language;
  onStartTest: (testId?: string) => void;
}

export const ExamCategories: React.FC<ExamCategoriesProps> = ({
  language,
  onStartTest
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Train': return <Train className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  const filteredCategories = EXAM_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        cat.name.toLowerCase().includes(q) ||
        cat.subExams.some((sub) => sub.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section id="categories" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-win-500/10 border border-win-500/20 text-win-300 text-xs font-extrabold">
            <Filter className="w-3.5 h-3.5" />
            <span>Comprehensive Exam Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Government Exams, Aptitude & <span className="gradient-text">Current Affairs (2020–2026)</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select your target competitive exam or practice topic-wise aptitude and general knowledge modules.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search exam (e.g. SSC CGL, MPSC, Quant, ISRO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-win-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-win-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {EXAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-win-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6 flex flex-col justify-between hover:border-win-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-lg`}>
                    {renderCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-win-400 bg-win-500/10 px-2.5 py-1 rounded-md border border-win-500/20">
                    {cat.count}+ Mocks Available
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-win-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400">Targeted preparation & previous year question series.</p>
                </div>

                {/* Sub Exams Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.subExams.map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-1 rounded border border-slate-800"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onStartTest('cgl-full-01')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-win-600 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:bg-win-600"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Practice Test</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
