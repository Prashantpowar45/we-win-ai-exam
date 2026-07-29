'use me';
'use client';

import React, { useState } from 'react';
import { Question, Language } from '@/lib/types';
import { Bot, Sparkles, X, CheckCircle2, Play, RefreshCw, Zap } from 'lucide-react';

interface AiQuestionGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AiQuestionGeneratorModal: React.FC<AiQuestionGeneratorModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [subject, setSubject] = useState('Quantitative Aptitude');
  const [topic, setTopic] = useState('Profit & Loss');
  const [difficulty, setDifficulty] = useState('Medium');
  const [loading, setLoading] = useState(false);
  const [generatedQs, setGeneratedQs] = useState<Question[]>([]);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, topic, difficulty, count: 3 })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setGeneratedQs(data.questions);
      }
    } catch (err) {
      console.error('Failed to generate AI questions:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-win-600 text-white flex items-center justify-center font-black text-xl mx-auto shadow-lg shadow-win-500/30">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-black text-white">Infinite AI Question Generator</h3>
          <p className="text-xs text-slate-400">Generate fresh, original 4-option MCQs tailored to your weak topics</p>
        </div>

        {/* Generator Controls Form */}
        <form onSubmit={handleGenerate} className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <label className="block font-bold text-slate-300">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-win-500"
            >
              <option value="Quantitative Aptitude">Quantitative Aptitude</option>
              <option value="Reasoning">Reasoning</option>
              <option value="English / Verbal Ability">English / Verbal Ability</option>
              <option value="General Knowledge / Current Affairs">General Knowledge 2020-2026</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block font-bold text-slate-300">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-win-500"
              placeholder="e.g. Profit & Loss / ISRO"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-bold text-slate-300">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-win-500"
            >
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="sm:col-span-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-win-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>AI is Generating Original Questions...</span>
                </span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-win-300" />
                  <span>Generate AI Practice Set</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Generated Questions List */}
        {generatedQs.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-800 animate-in fade-in duration-200">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Generated {generatedQs.length} AI Practice Items:</span>
            </div>

            <div className="space-y-4">
              {generatedQs.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-win-400">AI Item #{idx + 1} • {q.topic} ({q.difficulty})</span>
                    <span className="px-2 py-0.5 rounded bg-win-500/10 text-win-300 border border-win-500/20 text-[10px]">
                      Original AI Generated
                    </span>
                  </div>

                  <p className="text-white font-bold">{q.questionText[language] || q.questionText.en}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {(q.options[language] || q.options.en).map((opt, oIdx) => (
                      <div key={oIdx} className={`p-2 rounded-lg border ${oIdx === q.correctOptionIndex ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                        {String.fromCharCode(65 + oIdx)}. {opt}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1 text-[11px]">
                    <span className="font-bold text-win-400 block">AI Step-by-Step Solution:</span>
                    <p>{q.explanation[language] || q.explanation.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
