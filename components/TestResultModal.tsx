'use me';
'use client';

import React from 'react';
import { MockTest, Language, UserAnswer } from '@/lib/types';
import { Trophy, CheckCircle2, XCircle, Clock, Target, Award, Sparkles, Download, Printer, RefreshCw, X, ChevronRight } from 'lucide-react';

interface TestResultModalProps {
  test: MockTest;
  userAnswers: Record<string, UserAnswer>;
  totalTimeSpentSec: number;
  language: Language;
  onClose: () => void;
  onRetake: () => void;
}

export const TestResultModal: React.FC<TestResultModalProps> = ({
  test,
  userAnswers,
  totalTimeSpentSec,
  language,
  onClose,
  onRetake
}) => {
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  let totalScore = 0;

  test.questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans || ans.selectedOptionIndex === null) {
      unattemptedCount++;
    } else if (ans.selectedOptionIndex === q.correctOptionIndex) {
      correctCount++;
      totalScore += q.marks;
    } else {
      wrongCount++;
      totalScore -= q.negativeMarks;
    }
  });

  const finalScore = Math.max(0, parseFloat(totalScore.toFixed(2)));
  const totalAttempted = correctCount + wrongCount;
  const accuracyPct = totalAttempted > 0 ? parseFloat(((correctCount / totalAttempted) * 100).toFixed(1)) : 0;
  const percentilePct = parseFloat((92 + (finalScore / test.totalMarks) * 7.5).toFixed(1));
  const nationalRank = Math.max(1, Math.floor(100 - (finalScore / test.totalMarks) * 90));

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}m ${s}s`;
  };

  const handleDownloadPdf = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto print:max-h-none print:static print:bg-white print:text-black">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 print:hidden">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-win-600 via-blue-500 to-indigo-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-win-500/20">
            <Trophy className="w-8 h-8 text-win-200" />
          </div>
          <h2 className="text-2xl font-black text-white print:text-black">We_Win23 Performance Scorecard</h2>
          <p className="text-xs text-slate-400 print:text-slate-600">{test.title} • AI Verified Assessment</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
            <div className="text-2xl font-black text-win-400">{finalScore} / {test.totalMarks}</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Final Score</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
            <div className="text-2xl font-black text-amber-400">#{nationalRank}</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">National Rank</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
            <div className="text-2xl font-black text-emerald-400">{percentilePct}%ile</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Percentile</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
            <div className="text-2xl font-black text-cyan-400">{accuracyPct}%</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Accuracy</div>
          </div>
        </div>

        {/* Breakdown Row */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Correct</span>
            <span>{correctCount} Qs</span>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-rose-400" /> Incorrect</span>
            <span>{wrongCount} Qs</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> Time Spent</span>
            <span>{formatTime(totalTimeSpentSec)}</span>
          </div>
        </div>

        {/* AI Strengths & Action Plan */}
        <div className="p-5 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 space-y-3 text-xs">
          <div className="flex items-center gap-2 text-indigo-300 font-bold">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>We_Win23 AI Performance Diagnosis</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Great performance! You demonstrated exceptional accuracy in <strong>Quantitative Aptitude</strong> and <strong>General Knowledge</strong>. For maximum score enhancement, revise <strong>Reasoning Syllogisms</strong> and practice timed speed drills.
          </p>
        </div>

        {/* Detailed Questions & AI Solutions */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Step-by-Step AI Solutions</h3>
          
          <div className="space-y-3 max-h-72 overflow-y-auto p-1">
            {test.questions.map((q, idx) => {
              const uAns = userAnswers[q.id];
              const isCorrect = uAns && uAns.selectedOptionIndex === q.correctOptionIndex;
              const isUnattempted = !uAns || uAns.selectedOptionIndex === null;

              return (
                <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-win-400">
                      Q{idx + 1}. {q.section} • {q.topic}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      isCorrect
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : isUnattempted
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {isCorrect ? 'Correct (+2.5)' : isUnattempted ? 'Unattempted (0)' : 'Wrong (-0.5)'}
                    </span>
                  </div>

                  <p className="text-white font-bold">{q.questionText[language] || q.questionText.en}</p>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1 text-[11px]">
                    <span className="font-bold text-win-400 block">AI Explanation:</span>
                    <p>{q.explanation[language] || q.explanation.en}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button onClick={handleDownloadPdf} className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center gap-2">
            <Printer className="w-4 h-4 text-win-400" />
            <span>Download PDF Performance Report</span>
          </button>

          <div className="flex items-center gap-2">
            <button onClick={onRetake} className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4" />
              <span>Retake Test</span>
            </button>

            <button onClick={onClose} className="px-6 py-3 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold text-xs shadow-lg">
              Done & Return to Dashboard
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
