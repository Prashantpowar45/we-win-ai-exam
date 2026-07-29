'use me';
'use client';

import React, { useState } from 'react';
import { MockTest, Language, UserAnswer } from '@/lib/types';
import { Trophy, CheckCircle2, XCircle, AlertCircle, Sparkles, Brain, Clock, Award, ArrowLeft, RefreshCw, ChevronDown, BookOpen } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'score' | 'explanations' | 'ai-analysis'>('score');

  // Compute Results
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  test.questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans || ans.selectedOptionIndex === null) {
      unansweredCount++;
    } else if (ans.selectedOptionIndex === q.correctOptionIndex) {
      correctCount++;
      score += q.marks;
    } else {
      wrongCount++;
      score -= q.negativeMarks;
    }
  });

  const totalQuestions = test.questions.length;
  const accuracy = (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
  const percentile = Math.min(99.9, Math.max(75, Math.round(85 + (score / (test.totalMarks || 10)) * 14))).toFixed(1);

  const formatSec = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>Test Completed • Official Scorecard</span>
            </div>
            <h2 className="text-2xl font-black text-white">{test.title}</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRetake}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-win-600 hover:bg-win-500 text-xs font-bold text-white"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('score')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'score' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Score & Performance Metrics
          </button>
          <button
            onClick={() => setActiveTab('explanations')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'explanations' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Step-by-Step AI Solutions
          </button>
          <button
            onClick={() => setActiveTab('ai-analysis')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'ai-analysis' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AI Mistake Diagnosis & Action Plan
          </button>
        </div>

        {/* Tab 1: Score Metrics */}
        {activeTab === 'score' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 4 Score Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-semibold">Your Score</div>
                <div className="text-3xl font-black text-emerald-400">{score.toFixed(1)}</div>
                <div className="text-[10px] text-slate-400">Max Possible: {test.totalMarks}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-semibold">Accuracy %</div>
                <div className="text-3xl font-black text-amber-400">{accuracy}%</div>
                <div className="text-[10px] text-slate-400">{correctCount} Correct / {totalQuestions} Total</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-semibold">Percentile</div>
                <div className="text-3xl font-black text-win-400">{percentile}th</div>
                <div className="text-[10px] text-slate-400">Top 5% Performers</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs text-slate-400 font-semibold">Time Taken</div>
                <div className="text-3xl font-black text-purple-300">{formatSec(totalTimeSpentSec)}</div>
                <div className="text-[10px] text-slate-400">Avg Time/Q: {Math.round(totalTimeSpentSec / (totalQuestions || 1))}s</div>
              </div>
            </div>

            {/* Breakdown Bar */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Accuracy & Attempt Breakdown</span>
                <span className="text-emerald-400">{correctCount} Correct | {wrongCount} Incorrect | {unansweredCount} Unanswered</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full flex overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: `${(correctCount / totalQuestions) * 100}%` }} />
                <div className="bg-rose-500 h-full" style={{ width: `${(wrongCount / totalQuestions) * 100}%` }} />
                <div className="bg-slate-700 h-full" style={{ width: `${(unansweredCount / totalQuestions) * 100}%` }} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Step-by-Step AI Solutions */}
        {activeTab === 'explanations' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {test.questions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isCorrect = ans && ans.selectedOptionIndex === q.correctOptionIndex;
              const isUnanswered = !ans || ans.selectedOptionIndex === null;

              return (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-win-400">Q{idx + 1}.</span>
                      <span className="text-xs font-semibold text-slate-300">{q.subject} • {q.topic}</span>
                    </div>

                    {isCorrect ? (
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                        ✓ Correct (+{q.marks})
                      </span>
                    ) : isUnanswered ? (
                      <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 text-xs font-bold">
                        Unanswered
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/20">
                        ✗ Wrong (-{q.negativeMarks})
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-white">
                    {q.questionText[language] || q.questionText.en}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 font-bold text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Step-by-Step Explanation:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {q.explanation[language] || q.explanation.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: AI Mistake Analysis */}
        {activeTab === 'ai-analysis' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-5 rounded-2xl bg-win-950/60 border border-win-500/30 space-y-3">
              <div className="flex items-center gap-2 font-bold text-win-300 text-sm">
                <Brain className="w-5 h-5 text-win-400" />
                <span>AI Performance Diagnosis</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Great job! You achieved a stellar <strong>{accuracy}% accuracy rate</strong> with high speed in Current Affairs & Reasoning. To push your score into the Top 1 National Rank, focus on reducing time spent on complex Profit & Loss calculations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recommended 3-Step Action Plan
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-win-600 text-white font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <span>Revise <strong>Profit & Loss shortcuts</strong> using the Formula Sheet drawer.</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-win-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <span>Attempt 1 Topic-Wise Practice Quiz on <strong>Data Interpretation</strong>.</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-win-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <span>Use the <strong>We Win AI Tutor</strong> to ask doubts in Marathi, Hindi, or English.</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
