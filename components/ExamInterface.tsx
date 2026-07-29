'use me';
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MockTest, Language, UserAnswer } from '@/lib/types';
import { Clock, ShieldCheck, ArrowLeft, ArrowRight, Bookmark, Maximize, Minimize, AlertCircle, CheckCircle2, BookmarkCheck, FileText, Globe, X } from 'lucide-react';

interface ExamInterfaceProps {
  test: MockTest;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSubmitTest: (userAnswers: Record<string, UserAnswer>, totalTimeSpentSec: number) => void;
  onCancelTest: () => void;
}

export const ExamInterface: React.FC<ExamInterfaceProps> = ({
  test,
  language,
  onLanguageChange,
  onSubmitTest,
  onCancelTest
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [timeLeftSec, setTimeLeftSec] = useState<number>(test.durationMinutes * 60);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});
  const [showFormulaSheet, setShowFormulaSheet] = useState<boolean>(false);

  // User answers state
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>(() => {
    const initial: Record<string, UserAnswer> = {};
    test.questions.forEach((q) => {
      initial[q.id] = {
        questionId: q.id,
        selectedOptionIndex: null,
        status: 'unanswered',
        timeSpentSec: 0
      };
    });
    return initial;
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmitTest(userAnswers, test.durationMinutes * 60);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [userAnswers, test.durationMinutes, onSubmitTest]);

  const currentQ = test.questions[currentIdx];
  const currentAnswer = userAnswers[currentQ?.id];

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOptionIndex: optionIdx,
      }
    }));
  };

  const handleSaveAndNext = () => {
    const hasSelection = currentAnswer.selectedOptionIndex !== null;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        status: hasSelection ? 'answered' : 'unanswered'
      }
    }));
    if (currentIdx < test.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleMarkForReview = () => {
    const hasSelection = currentAnswer.selectedOptionIndex !== null;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        status: hasSelection ? 'marked_and_answered' : 'marked_for_review'
      }
    }));
    if (currentIdx < test.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOptionIndex: null,
        status: 'unanswered'
      }
    }));
  };

  const toggleBookmark = (qId: string) => {
    setBookmarked((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Palette Status Counts
  const answeredCount = Object.values(userAnswers).filter(a => a.status === 'answered' || a.status === 'marked_and_answered').length;
  const markedCount = Object.values(userAnswers).filter(a => a.status === 'marked_for_review' || a.status === 'marked_and_answered').length;
  const unansweredCount = test.questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-win-500 selection:text-white">
      
      {/* Top Test Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-lg z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onCancelTest}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            title="Exit Test"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              <span>{test.title}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-win-500/20 text-win-300 border border-win-500/30">
                LIVE EXAM ENGINE
              </span>
            </h1>
            <p className="text-[11px] text-slate-400">Total Questions: {test.questions.length} • Maximum Marks: {test.totalMarks}</p>
          </div>
        </div>

        {/* Right Tools: Timer, Language, Fullscreen, Formula Sheet */}
        <div className="flex items-center gap-4">
          
          {/* Formula Sheet Trigger */}
          <button
            onClick={() => setShowFormulaSheet(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700"
          >
            <FileText className="w-3.5 h-3.5 text-win-400" />
            <span>Formulas Sheet</span>
          </button>

          {/* Language Switcher inside Test */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-win-400 mr-1" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-slate-900">English</option>
              <option value="hi" className="bg-slate-900">हिंदी</option>
              <option value="mr" className="bg-slate-900">मराठी</option>
            </select>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-win-500/40 text-win-400 font-mono font-bold text-sm shadow-inner">
            <Clock className="w-4 h-4 text-win-400 animate-pulse" />
            <span>{formatTime(timeLeftSec)}</span>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

        </div>
      </header>

      {/* Main Test Grid Layout */}
      <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
        
        {/* Left Area: Question Display */}
        <div className="lg:col-span-8 p-4 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          
          <div className="space-y-6">
            
            {/* Question Bar Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-win-400 bg-win-500/10 px-3 py-1 rounded-lg border border-win-500/20">
                  Question {currentIdx + 1} of {test.questions.length}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Marks: +{currentQ.marks} | Negative: -{currentQ.negativeMarks}
                </span>
              </div>

              <button
                onClick={() => toggleBookmark(currentQ.id)}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                  bookmarked[currentQ.id]
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{bookmarked[currentQ.id] ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.questionText[language] || currentQ.questionText.en}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {(currentQ.options[language] || currentQ.options.en).map((optText, optIdx) => {
                const isSelected = currentAnswer.selectedOptionIndex === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleOptionSelect(optIdx)}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'bg-win-600/20 border-win-500 text-white font-bold shadow-lg shadow-win-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs border ${
                        isSelected
                          ? 'bg-win-500 text-white border-win-400'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{optText}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-win-400" />}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Action Controls */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearResponse}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-semibold"
              >
                Clear Response
              </button>
              <button
                onClick={handleMarkForReview}
                className="px-3.5 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-300 border border-purple-500/30 text-xs font-semibold"
              >
                Mark for Review & Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-bold disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={handleSaveAndNext}
                className="px-6 py-2.5 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold text-xs shadow-lg shadow-win-500/20"
              >
                Save & Next
              </button>
            </div>
          </div>

        </div>

        {/* Right Area: Question Palette Grid */}
        <div className="lg:col-span-4 bg-slate-900/90 border-l border-slate-800 p-6 flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            
            {/* Palette Summary Legend */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                Question Palette
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-emerald-500" />
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-rose-500" />
                  <span>Unanswered ({unansweredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-purple-500" />
                  <span>Marked for Review ({markedCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-slate-700" />
                  <span>Not Visited</span>
                </div>
              </div>
            </div>

            {/* Question Buttons Grid */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400">Select Question:</div>
              <div className="grid grid-cols-5 gap-2 max-h-60 overflow-y-auto p-1">
                {test.questions.map((q, idx) => {
                  const status = userAnswers[q.id]?.status;
                  let btnBg = 'bg-slate-800 text-slate-300 border-slate-700';
                  if (status === 'answered') btnBg = 'bg-emerald-600 text-white font-bold border-emerald-500';
                  if (status === 'marked_for_review') btnBg = 'bg-purple-600 text-white font-bold border-purple-500';
                  if (status === 'marked_and_answered') btnBg = 'bg-purple-600 text-emerald-300 font-bold border-emerald-400';

                  const isCurrent = currentIdx === idx;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-9 rounded-lg border text-xs font-bold transition-all ${btnBg} ${
                        isCurrent ? 'ring-2 ring-win-400 ring-offset-2 ring-offset-slate-950 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Submit Test Button */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => onSubmitTest(userAnswers, (test.durationMinutes * 60) - timeLeftSec)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              Submit Final Test
            </button>
            <div className="text-[10px] text-slate-400 text-center">
              🔒 Auto-submit will trigger when timer reaches 00:00.
            </div>
          </div>

        </div>

      </div>

      {/* Formulas Modal */}
      {showFormulaSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 relative">
            <button onClick={() => setShowFormulaSheet(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-win-400" />
              <span>Aptitude Formula Quick Reference</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-300 max-h-80 overflow-y-auto">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-win-400">Profit & Loss:</strong> Profit % = (Profit / CP) * 100
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-win-400">Speed & Distance:</strong> Speed = Distance / Time
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-win-400">Simple Interest:</strong> SI = (P * R * T) / 100
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
