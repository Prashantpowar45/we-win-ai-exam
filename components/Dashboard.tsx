'use me';
'use client';

import React from 'react';
import { Language } from '@/lib/types';
import { Trophy, Flame, Zap, Target, TrendingUp, AlertTriangle, CheckCircle2, Play, BookOpen, ChevronRight, Award, BarChart2 } from 'lucide-react';

interface DashboardProps {
  language: Language;
  onStartTest: (testId?: string) => void;
  onOpenGamification: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  language,
  onStartTest,
  onOpenGamification
}) => {
  const translations = {
    en: {
      welcome: 'Welcome back, Prashant!',
      subtitle: 'Track your preparation progress, analyze weak subjects, and boost your national rank.',
      streak: '7-Day Practice Streak',
      xpLabel: 'Level 12 Aspirant • 3,800 XP',
      metrics: {
        tests: 'Mock Tests Solved',
        avgScore: 'Average Score',
        accuracy: 'Overall Accuracy',
        rank: 'All India Rank'
      },
      weakTitle: 'Topics Needing Attention (AI Focus)',
      strongTitle: 'Your Mastery Subjects',
      recommendedTitle: 'AI Recommended Mock Tests for You',
      startBtn: 'Attempt Test',
    },
    hi: {
      welcome: 'वापसी पर स्वागत है, प्रशांत!',
      subtitle: 'अपनी तैयारी की प्रगति को ट्रैक करें, कमजोर विषयों का विश्लेषण करें और अपनी रैंक सुधारें।',
      streak: '7-दिवसीय अभ्यास स्ट्राइक',
      xpLabel: 'लेवल 12 अभ्यर्थी • 3,800 XP',
      metrics: {
        tests: 'हल किए गए मॉक टेस्ट',
        avgScore: 'औसत अंक',
        accuracy: 'सटीकता (Accuracy)',
        rank: 'ऑल इंडिया रैंक'
      },
      weakTitle: 'कमजोर विषय (AI सुझाव)',
      strongTitle: 'आपकी मजबूत पकड़ वाले विषय',
      recommendedTitle: 'आपके लिए एआई सुझाई गई मॉक परीक्षाएं',
      startBtn: 'टेस्ट शुरू करें',
    },
    mr: {
      welcome: 'पुन्हा स्वागत आहे, प्रशांत!',
      subtitle: 'तुमच्या तयारीच्या प्रगतीचा मागोवा घ्या, कमकुवत घटकांचे विश्लेषण करा आणि रँक सुधारा.',
      streak: '७-दिवसीय सराव स्ट्रिक',
      xpLabel: 'लेव्हल १२ विद्यार्थी • ३,८०० XP',
      metrics: {
        tests: 'सोडवलेल्या मॉक टेस्ट्स',
        avgScore: 'सरासरी गुण',
        accuracy: 'अचूकता (Accuracy)',
        rank: 'महाराष्ट्र / भारत रँक'
      },
      weakTitle: 'सुधारणेची गरज असलेले घटक (AI अलर्ट)',
      strongTitle: 'उत्कृष्ट पकड असलेले घटक',
      recommendedTitle: 'तुमच्यासाठी एआय-सिफारिश केलेल्या मॉक टेस्ट्स',
      startBtn: 'टेस्ट सुरू करा',
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="py-10 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-win-950/50">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-win-600 to-indigo-600 flex items-center justify-center text-3xl shadow-xl shadow-win-500/20 flex-shrink-0">
              🚀
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white">{t.welcome}</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end">
            <button
              onClick={onOpenGamification}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-xs font-black text-amber-400">{t.streak}</div>
                <div className="text-[11px] text-slate-400">{t.xpLabel}</div>
              </div>
            </button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>{t.metrics.tests}</span>
              <BookOpen className="w-4 h-4 text-win-400" />
            </div>
            <div className="text-3xl font-black text-white">24 Tests</div>
            <div className="text-[11px] text-emerald-400 font-medium">↑ 4 tests this week</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>{t.metrics.avgScore}</span>
              <Target className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400">182.5 / 200</div>
            <div className="text-[11px] text-slate-400 font-medium">Top 2% score tier</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>{t.metrics.accuracy}</span>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-amber-400">94.2%</div>
            <div className="text-[11px] text-slate-400 font-medium">Target: 90%+</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
              <span>{t.metrics.rank}</span>
              <Trophy className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-black text-purple-300">#5 National</div>
            <div className="text-[11px] text-purple-400 font-medium">Rank 1 in Maharashtra</div>
          </div>
        </div>

        {/* Weak vs Strong Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Weak Topics Alert */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-400 border-b border-slate-800 pb-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>{t.weakTitle}</span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Profit & Loss (Quant)</div>
                  <div className="text-slate-400 text-[11px]">Accuracy: 64% • Avg Time: 82s</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 font-bold border border-rose-500/20">
                  Needs Revision
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Data Interpretation Tables</div>
                  <div className="text-slate-400 text-[11px]">Accuracy: 72% • Avg Time: 95s</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                  Practice Speed
                </span>
              </div>
            </div>
          </div>

          {/* Strong Topics */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 border-b border-slate-800 pb-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>{t.strongTitle}</span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">ISRO & Space Missions (2020-2026)</div>
                  <div className="text-slate-400 text-[11px]">Accuracy: 100% • Avg Time: 18s</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                  Mastered
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Syllogisms & Verbal Reasoning</div>
                  <div className="text-slate-400 text-[11px]">Accuracy: 96% • Avg Time: 28s</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                  Top 1% Speed
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* AI Recommended Mock Tests List */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">{t.recommendedTitle}</h3>
              <p className="text-xs text-slate-400">Curated based on your target exam profile (SSC CGL & IBPS PO)</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-win-500/10 text-win-400 border border-win-500/20 text-xs font-bold font-mono">
              AI ADAPTIVE ENGINE
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4 hover:border-win-500/50 transition-colors group">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-win-500/10 text-win-400 border border-win-500/20">
                  SSC CGL Tier 1
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-win-300 transition-colors">
                  SSC CGL Tier 1 Full Mock Test #01
                </h4>
                <p className="text-xs text-slate-400">5 Questions • 60 Mins • 200 Marks</p>
              </div>

              <button
                onClick={() => onStartTest('cgl-full-01')}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-win-500/20 flex items-center gap-1.5 flex-shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{t.startBtn}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4 hover:border-win-500/50 transition-colors group">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Banking
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-win-300 transition-colors">
                  IBPS PO Prelims Grand Test #01
                </h4>
                <p className="text-xs text-slate-400">100 Questions • 60 Mins • 100 Marks</p>
              </div>

              <button
                onClick={() => onStartTest('cgl-full-01')}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-win-500/20 flex items-center gap-1.5 flex-shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{t.startBtn}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
