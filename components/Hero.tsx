'use me';
'use client';

import React from 'react';
import { Language } from '@/lib/types';
import { Trophy, Play, Sparkles, ShieldCheck, Zap, ArrowRight, Brain, Globe, Camera } from 'lucide-react';

interface HeroProps {
  language: Language;
  onStartTest: (testId?: string) => void;
  onExploreCategories: () => void;
  onOpenAiTutor: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onStartTest,
  onExploreCategories,
  onOpenAiTutor
}) => {
  const translations = {
    en: {
      badge: 'WE_WIN23 • AI PROCTORED EXAM PLATFORM',
      title: 'Crack Government & Aptitude Exams with ',
      highlight: 'AI Precision & Proctoring',
      subtitle: 'Real Proctored Exam Simulator for SSC CGL, Banking (IBPS/SBI), Railways (RRB), UPSC, MPSC & Police Bharti. Live camera monitoring, anti-cheat detection, and 4-section 80-question tests.',
      startCta: 'Start Proctored Test Now',
      exploreCta: 'Explore 50+ Exams',
      aiCta: 'Ask We_Win23 AI Tutor',
      stats: [
        { label: 'Proctored Exam Tracks', val: '50+' },
        { label: '2020-2026 GK & Current Affairs', val: '10,000+' },
        { label: 'National Aspirants', val: '1,50,000+' },
        { label: 'Proctoring Security Index', val: '100%' }
      ]
    },
    hi: {
      badge: 'वी विन23 • एआई प्रोक्टर्ड परीक्षा प्लेटफॉर्म',
      title: 'सरकारी और एप्टीट्यूड परीक्षाओं को क्रैक करें ',
      highlight: 'एआई सटीकता और प्रोक्टरिंग के साथ',
      subtitle: 'SSC CGL, बैंक (IBPS/SBI), रेलवे (RRB), UPSC, MPSC और पुलिस भर्ती के लिए लाइव कैमरा प्रोक्टर्ड टेस्ट।',
      startCta: 'अभी प्रोक्टर्ड टेस्ट शुरू करें',
      exploreCta: '50+ परीक्षाएं देखें',
      aiCta: 'AI ट्यूटर से पूछें',
      stats: [
        { label: 'परीक्षा श्रेणियां', val: '50+' },
        { label: '2020-2026 करंट अफेयर्स', val: '10,000+' },
        { label: 'अभ्यर्थी', val: '1,50,000+' },
        { label: 'सुरक्षा सूचकांक', val: '100%' }
      ]
    },
    mr: {
      badge: 'वी विन२३ • एआय प्रोक्टर्ड परीक्षा प्लॅटफॉर्म',
      title: 'सरकारी व ॲप्टिट्यूड परीक्षांमध्ये मिळवा ',
      highlight: 'एआय-आधारित देदीप्यमान यश',
      subtitle: 'SSC CGL, बँकिंग (IBPS/SBI), रेल्वे (RRB), UPSC, MPSC व पोलीस भरतीसाठी थेट कॅमेरा प्रोक्टर्ड सराव परीक्षा. ४-सेक्शन टेस्ट इंजिन.',
      startCta: 'प्रोक्टर्ड टेस्ट आत्ताच सुरू करा',
      exploreCta: '५०+ परीक्षा पहा',
      aiCta: 'AI ट्युटरला विचारा',
      stats: [
        { label: 'परीक्षा प्रकार', val: '५०+' },
        { label: '२०२०-२०२६ चालू घडामोडी', val: '१०,०००+' },
        { label: 'एकूण विद्यार्थी', val: '१,५०,०००+' },
        { label: 'सुरक्षा निर्देशांक', val: '१००%' }
      ]
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-950 border-b border-slate-900">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-win-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-extrabold tracking-wider">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {t.title} <span className="gradient-text">{t.highlight}</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onStartTest()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-win-600 via-blue-500 to-indigo-600 text-white font-black text-base shadow-xl shadow-win-500/25 hover:shadow-win-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>{t.startCta}</span>
            </button>

            <button
              onClick={onExploreCategories}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>{t.exploreCta}</span>
              <ArrowRight className="w-4 h-4 text-win-400" />
            </button>

            <button
              onClick={onOpenAiTutor}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/30 text-indigo-200 font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4 text-indigo-400" />
              <span>{t.aiCta}</span>
            </button>
          </div>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-900 max-w-4xl mx-auto">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-2xl font-black text-win-400">{stat.val}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
